import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { LoginService } from '../login/login.service';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { BookAppoinmentComponent } from '../book-appoinment/book-appoinment.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    public dialog: MatDialog
  ) {}
  isMenuOpen: boolean = false;
  ngOnInit() {}
  ngAfterViewInit() {
    fromEvent(
      document.querySelector('.mainNav') as HTMLElement,
      'click'
    ).subscribe(
      (eve) => {
        const isMainNav = (eve.target as HTMLElement).classList.contains(
          'mainNav'
        );
        if (isMainNav) {
          this.toggleSideMenu();
        }
      },
      (err) => {}
    );
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
        this.toggleSideMenu();
      });
  }
  toggleSideMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BookAppoinmentComponent, {
      width: '90vw',
      height: 'auto',
      data: {
        origin: 'popup',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

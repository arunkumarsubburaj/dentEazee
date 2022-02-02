import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { BookAppoinmentComponent } from '../book-appoinment/book-appoinment.component';

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
  ngAfterViewInit() {}
  toggleSideMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BookAppoinmentComponent, {
      width: '90vw',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

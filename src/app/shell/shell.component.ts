import { ToastrService } from 'ngx-toastr';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private toastrService: ToastrService) {}
  isMenuOpen: boolean = false;
  ngOnInit() {}
  ngAfterViewInit() {}
  toggleSideMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

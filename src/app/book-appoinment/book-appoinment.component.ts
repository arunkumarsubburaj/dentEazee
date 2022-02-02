import { Component, OnInit } from '@angular/core';
interface selectObj {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-book-appoinment',
  templateUrl: './book-appoinment.component.html',
  styleUrls: ['./book-appoinment.component.scss'],
})
export class BookAppoinmentComponent implements OnInit {
  constructor() {}
  departments: selectObj[] = [
    { value: 'steak-0', viewValue: 'Cosmetic Dentistry' },
    { value: 'pizza-1', viewValue: 'Teeth Whitening' },
    { value: 'tacos-2', viewValue: 'Brackets' },
    { value: 'tacos-3', viewValue: 'Pediatric Dentistry' },
  ];
  times: selectObj[] = [
    { value: 'steak-0', viewValue: '10.00' },
    { value: 'steak-0', viewValue: '11.00' },
    { value: 'steak-0', viewValue: '12.00' },
    { value: 'steak-0', viewValue: '13.00' },
    { value: 'steak-0', viewValue: '14.00' },
    { value: 'steak-0', viewValue: '15.00' },
    { value: 'steak-0', viewValue: '16.00' },
    { value: 'steak-0', viewValue: '17.00' },
    { value: 'steak-0', viewValue: '18.00' },
    { value: 'steak-0', viewValue: '19.00' },
    { value: 'steak-0', viewValue: '20.00' },
  ];
  ngOnInit(): void {}
}

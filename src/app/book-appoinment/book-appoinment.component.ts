import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/shared/services/mail.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(
    private toastrService: ToastrService,
    private mailService: MailService,
    @Inject(MAT_DIALOG_DATA) public data: { origin: string }
  ) {}
  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNo: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
  });
  departments: selectObj[] = [
    { value: 'Cosmetic Dentistry', viewValue: 'Cosmetic Dentistry' },
    { value: 'Teeth Whitening', viewValue: 'Teeth Whitening' },
    { value: 'Brackets', viewValue: 'Brackets' },
    { value: 'Pediatric Dentistry', viewValue: 'Pediatric Dentistry' },
  ];
  times: selectObj[] = [
    { value: '10:00', viewValue: '10:00' },
    { value: '11:00', viewValue: '11:00' },
    { value: '12:00', viewValue: '12:00' },
    { value: '13:00', viewValue: '13:00' },
    { value: '14:00', viewValue: '14:00' },
    { value: '15:00', viewValue: '15:00' },
    { value: '16:00', viewValue: '16:00' },
    { value: '17:00', viewValue: '17:00' },
    { value: '18:00', viewValue: '18:00' },
    { value: '19:00', viewValue: '19:00' },
    { value: '20:00', viewValue: '20:00' },
  ];
  ngOnInit(): void {}
  onSubmit() {
    this.myForm.markAllAsTouched();
    if (!this.myForm.valid) {
      return;
    } else {
      console.log('myForm=====>', this.myForm.getRawValue());
      this.mailService.sendAppoinment(this.myForm.getRawValue()).subscribe(
        (res) => {
          this.toastrService.success('Mail Sent Successfully...');
        },
        (err) => {
          this.toastrService.error('There is some error with Mail service...');
        }
      );
    }
  }
}

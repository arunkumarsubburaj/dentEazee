import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/shared/services/mail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNo: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  constructor(
    private mailService: MailService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.myForm.markAllAsTouched();
    if (!this.myForm.valid) {
      return;
    } else {
      console.log('myForm=====>', this.myForm.getRawValue());
      const formData = this.myForm.getRawValue();
      this.mailService.sendConntactUsMail(formData).subscribe(
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

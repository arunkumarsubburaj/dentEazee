import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/modules/shared/shared.module';
import { AuthGuardService } from './../shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { LoaderInterceptor } from './loader.interceptor';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from 'src/shared/services/auth.service';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { OrthodonticsComponent } from './orthodontics/orthodontics.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookAppoinmentComponent } from './book-appoinment/book-appoinment.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LoginComponent,
    LoaderComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    OrthodonticsComponent,
    TestimonialsComponent,
    GalleryComponent,
    BlogComponent,
    ContactUsComponent,
    BookAppoinmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatTabsModule,
    MatSelectModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      closeButton: true,
      positionClass: 'custom-center',
    }),
    GalleryModule.withConfig({
      thumbPosition: 'bottom',
      thumb: false,
      dots: true,
      dotsPosition: 'bottom',
    }),
    LightboxModule,
  ],
  exports: [HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthGuardService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

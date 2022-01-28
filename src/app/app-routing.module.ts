import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { OrthodonticsComponent } from './orthodontics/orthodontics.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'aboutUs',
        component: AboutUsComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'orthodontics',
        component: OrthodonticsComponent,
      },
      {
        path: 'testimonials',
        component: TestimonialsComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'contactUs',
        component: ContactUsComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}

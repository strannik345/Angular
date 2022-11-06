import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../features/courses/courses.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { CourseComponent } from '../features/course/course.component';
import { CourseListComponent } from '../features/course-list/course-list.component';
import { CourseCardComponent } from '../features/course-card/course-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from '../features/login/login.component';
import { RegistrationComponent } from '../features/registration/registration.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    CourseListComponent,
    CourseCardComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    CourseCardComponent,
    LoginComponent,
    RegistrationComponent
  ]
})
export class SharedModule { }

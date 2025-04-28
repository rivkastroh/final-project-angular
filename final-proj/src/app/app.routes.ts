import { Routes } from '@angular/router';
import { ListLessonComponent } from './list-lesson/list-lesson.component';
import { RegisteringComponent } from './registering/registering.component';
import { LoginComponent } from './login/login.component';
import { LessonComponent } from './lesson/lesson.component';
import { teacherGuard } from './teacher.guard';
import { secretaryGuard } from './secretary.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // נתיב ברירת מחדל
    { path: 'login', component: LoginComponent },
    { path: 'lessons', component: ListLessonComponent ,canActivate : [teacherGuard]},
    { path: 'registering', component: RegisteringComponent ,canActivate:[secretaryGuard]},
    { path: 'lesson', component: LessonComponent ,canActivate : [teacherGuard]}

];
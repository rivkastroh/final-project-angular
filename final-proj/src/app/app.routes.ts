import { Routes } from '@angular/router';
import { ListLessonComponent } from './list-lesson/list-lesson.component';
import { RegisteringComponent } from './registering/registering.component';
import { LoginComponent } from './login/login.component';
import { LessonComponent } from './lesson/lesson.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // נתיב ברירת מחדל
    { path: 'login', component: LoginComponent },
    { path: 'lessons', component: ListLessonComponent },
    { path: 'registering', component: RegisteringComponent },
    { path: 'lesson', component: LessonComponent }

];
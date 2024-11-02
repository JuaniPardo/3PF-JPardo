import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./core/components/dashboard/dashboard.component";
import {WelcomeComponent} from "./shared/components/welcome/welcome.component";
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";

const routes: Routes = [
   {
      path: '',
      component: DashboardComponent,
      children: [
         {
            path: '',
            component: WelcomeComponent
         },
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'register',
            component: RegisterComponent
         },
         {
            path: 'students',
            loadChildren: () =>
               import('./features/students/students.module').then(m => m.StudentsModule)
         },
         {
            path: 'courses',
            loadChildren: () =>
               import('./features/courses/courses.module').then(m => m.CoursesModule)
         },
         {
            path: 'classes',
            loadChildren: () =>
               import('./features/classes/classes.module').then(m => m.ClassesModule)
         },
      ]
   },
   {path: '**', redirectTo: 'students', pathMatch: 'full'},
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}

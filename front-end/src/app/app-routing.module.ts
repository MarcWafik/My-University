import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards';

import { AppComponent } from './app.component';
import { AuthenticationService } from './services';

import {
	RegistrationComponent,
	LoginComponent,
	HomeComponent,
	DashboardComponent,
	GroupComponent,
	UserRoleViewComponent,
	UserRoleEditComponent,
	EditProfileComponent,
	EditCourseComponent,
	ListAllComponent,
	EditDepartementComponent,
	EditSemesterComponent,
	EnrollmentComponent
} from './components';


//const defaultRoute = AuthenticationService.IsLoggedIn() ? '/home' : 'login';
const appRoutes: Routes = [
	{ path: 'registration', component: RegistrationComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'group', component: GroupComponent },
	{ path: 'permissions', component: UserRoleViewComponent },
	{ path: 'edit-permissions', component: UserRoleEditComponent },
	{ path: 'list-all', component: ListAllComponent, canActivate: [AuthenticationGuard] },
	{ path: 'enrollment', component: EnrollmentComponent },
	{ path: 'edit-course', component: EditCourseComponent },
	{ path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthenticationGuard] },
	{ path: 'edit-departement', component: EditDepartementComponent },
	{ path: 'edit-semester', component: EditSemesterComponent },

	{ path: '', redirectTo: 'home'/*defaultRoute*/, pathMatch: 'full' }, // Default url
	{ path: '**', component: LoginComponent } // Wrong path ==> 404 url
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
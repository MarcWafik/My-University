import { Component, OnInit } from '@angular/core';

import { UserService, AuthenticationService, UserRoleService, CourseService, DepartmentService, SemesterService } from './services';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	private title;
	private user;

	constructor(private authenticationService: AuthenticationService, public userService: UserService,
		private UserRoleService: UserRoleService, private courseService: CourseService, private router: Router, private departmentService: DepartmentService, private semesterService: SemesterService) {

		this.title = 'My University';

		router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.setCurrentUser();
			}
		});
	}

	onEditProfile() {
		this.router.navigate(['/edit-profile']);
	}

	onLogout() {
		this.authenticationService.signOut();
		this.router.navigate(['/login']);
	}

	onLogin() {
		this.router.navigate(['/login']);
	}

	ngOnInit() {
		this.setCurrentUser();
	}

	private setCurrentUser() {
		this.user = this.authenticationService.getCurrentUser();
	}

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './components/login.component.html'
})
export class LoginComponent implements OnInit {

    phoneNumber: string;
    password: string;

    constructor(private router: Router) { }

    ngOnInit() { }

    login() {
        this.router.navigate(['profile-detail']);
    }
}

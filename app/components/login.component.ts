import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: 'login',
    templateUrl: './components/login.component.html',
    styleUrls: ['./components/login.component.css']
})
export class LoginComponent implements OnInit {

    phoneNumber: string;
    password: string;

    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true;
    }
    ngOnInit() { }

    login() {
        this.router.navigate(['profile-detail']);
    }

    signup() {
        this.router.navigate(['signup']);
    }
}

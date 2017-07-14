import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {
    constructor(private page: Page, private router: Router) {
        page.actionBarHidden = true;
    }

    ngOnInit() { }

    login() {
        this.router.navigate(['login']);
    }
}
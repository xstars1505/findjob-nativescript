import {
    Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, OnChanges,
    ChangeDetectionStrategy, ChangeDetectorRef
} from "@angular/core";

import { Item } from "../item/item";
import { ItemService } from "../item/item.service";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";
import { TNSFontIconService } from "nativescript-ngx-fonticon";

@Component({
    selector: "welcome",
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./welcome.component.html",
    styleUrls: ['./welcome.component.css'],
    //encapsulation: ViewEncapsulation.Native
})
export class WelcomeComponent implements OnInit {
    items: Item[];
    @ViewChild('slides') slideContainer: ElementRef;
    currentSlide: any;
    isLast = false;
    constructor(
        private itemService: ItemService,
        private page: Page,
        private router: Router,
        private fonticon: TNSFontIconService,
        private ref: ChangeDetectorRef )
    { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.page.backgroundImage = "res://bg";
        this.currentSlide = <any>this.slideContainer;
    }

    next() {
        this.currentSlide.nextSlide();
    }

    signin() {
        this.router.navigate(['login']);
    }

    checkIsLast(value) {
        this.isLast = value;
        this.ref.detectChanges();
    }
}

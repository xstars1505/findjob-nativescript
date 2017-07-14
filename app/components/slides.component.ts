import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from "@angular/core";

import { Item } from "../item/item";
import { ItemService } from "../item/item.service";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";

@Component({
    selector: "images-slider",
    moduleId: module.id,
    templateUrl: "./slides.component.html",
    styleUrls: ['./slides.component.css'],
    //encapsulation: ViewEncapsulation.Native
})
export class WelcomeComponent implements OnInit {
    items: Item[];
    @ViewChild('slides') slideContainer: ElementRef;
    currentSlide: any;

    constructor(private itemService: ItemService, private page: Page, private router: Router) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.page.backgroundImage = "res://bg";
        this.currentSlide = <any>this.slideContainer;
    }

    isLastSlide() {
        let currentSlide = <any>this.slideContainer;
        return !currentSlide.hasNext;
    }

    next() {
        if (this.currentSlide.hasNext) {
            this.currentSlide.nextSlide();
        }
    }

    signin() {
        this.router.navigate(['login']);
    }
}

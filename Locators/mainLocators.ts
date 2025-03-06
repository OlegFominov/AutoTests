import { Locator, Page } from "playwright-core";


export class MainPageLocators {

    page: Page;
    readonly titleDPM: Locator;


    constructor(page: Page) { 
        this.titleDPM = page.locator("//img[@alt='DPMLOL']").nth(1);
        this.page = page; 
    }
     
}

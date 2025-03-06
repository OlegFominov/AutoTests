import {test} from "@playwright/test"
import { MainPage } from "../Pages/mainPage"

test("Контр пик тест", async ({page}) => {
    const mainPage = new MainPage(page);

    await mainPage.goToMainPage();
    
})
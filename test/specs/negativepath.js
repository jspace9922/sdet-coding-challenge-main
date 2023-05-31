import { faker } from '@faker-js/faker'
import basicInfoPage from '../pageobjects/basicInfo.page.js'
import loginPage from '../pageobjects/login.page.js'

describe("Intelycare Application Page: Negative Path", () => {
    beforeEach(async () => {
        await browser.url('/apply/career.html')
    });



    it("Validate Continue Button is Unclickable without Mandatory Fields", async () => {

        const emailName = faker.person.firstName().replace(/\s+/g, '');
        await loginPage.email.setValue(`${emailName}@mailinator.com`);
        await loginPage.password.setValue("TestPassW0rd");
        await loginPage.btnAcctCreation.click();
        await browser.pause(3000);
        await basicInfoPage.btnShiftCheckbox.click();
        await basicInfoPage.btnWorkExperience.click();
        await basicInfoPage.btnTOS.click();
        const myInput = await $("#AP_Basic_Info_continue");
        await expect(myInput).toHaveElementClass('disabled', { message: 'Not disabled', })

    });

});
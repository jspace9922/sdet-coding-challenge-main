import { faker } from '@faker-js/faker'
import basicInfoPage from '../pageobjects/basicInfo.page.js'
import loginPage from '../pageobjects/login.page.js'

describe("Intelycare Application Form", () => {
    beforeEach(async () => {
        await browser.url('/apply/career.html')
    });

    it("Happy Path Basic Info Page", async () => {

        const emailName = faker.person.firstName().replace(/\s+/g, '');
        const firstName = faker.person.firstName().replace(/\s+/g, '');
        const lastName = faker.person.lastName().replace(/\s+/g, '');
        await loginPage.email.setValue(`${emailName}@mailinator.com`);
        await loginPage.password.setValue("TestPassW0rd");
        await loginPage.btnAcctCreation.click();
        //await browser.pause(3000);
        await basicInfoPage.txtFirstName.setValue(`${firstName}`);
        await basicInfoPage.txtLastName.setValue(`${lastName}`);
        await basicInfoPage.txtMobileNumber.setValue('7589577506');
        await basicInfoPage.txtZipCode.setValue('02090');
        await basicInfoPage.qualificationDropdown.click();
        await basicInfoPage.rnOption.click()
        await browser.keys(['Escape']);
        await basicInfoPage.btnShiftCheckbox.click();
        await basicInfoPage.btnWorkExperience.click();
        await basicInfoPage.btnTOS.click();
        await basicInfoPage.btnContinueButton.click();
        await browser.pause(3000);
    });

});



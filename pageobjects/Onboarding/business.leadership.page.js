import Page from '../page';
import faker from '@faker-js/faker';


class BusinessLeadership extends Page {

    // Business Leadership Details
    get titleTextbox() { return $('input[name=title]'); }
    
    // Date of Birth
    get monthDropdown() { return $('input[name="birthdate--month"]'); }
    get dayDropdown() { return $('input[name="birthdate--day"]'); }
    get yearDropdown() { return $('input[name="birthdate--year"]'); }

    // Social Security Number
    get ssnTextbox() { return $('input[name="ssn"]'); }

    // Percentage Ownership
    get percentageOwnershipTextbox() { return $('input[name="percentage-ownership"]'); }

    // Next Button that appears on multiple pages
    get nextButton() { return $('//button//span[text()="Next"]'); }

    async enterTitle() {
        await this.titleTextbox.waitForDisplayed();
        await this.titleTextbox.setValue(faker.name.title());
    }

    async pickDate() {
        const month = faker.date.month();
        const day = faker.datatype.number(28);
        const currentYear = new Date().getFullYear();
        const year = faker.datatype.number({ min: 1900, max: currentYear - 18});

        await this.dayDropdown.waitForDisplayed();
        await this.dayDropdown.setValue(day);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.monthDropdown.setValue(month);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
        await this.yearDropdown.setValue(year);
        await browser.keys("ArrowDown");
        await browser.keys("Enter");
    }

    async enterSocial() {
        const ssn = faker.finance.account(9);
        await this.ssnTextbox.waitForDisplayed();
        await this.ssnTextbox.setValue(ssn);
    }

    async enterPercentageOwnership(number) {
        await this.percentageOwnershipTextbox.waitForDisplayed();
        if (number !== undefined) {
            await this.percentageOwnershipTextbox.setValue(number);
        } else {
            await this.percentageOwnershipTextbox.setValue("100");
        }
    }

}

export default new BusinessLeadership();
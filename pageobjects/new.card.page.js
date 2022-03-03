import Page from './page';
import CardsPage from './cards.page';

class NewCardPage extends Page {

    // Selector getters
    get pageHeader() { return $('//h1/span[text()="New Card"]'); }

    // Allocation input and employee input. inputOptions is used to select option from Allocation and employee input by index
    get allocationInput() { return $('//input[@name="allocation"]'); }
    get employeeInput() { return $('//input[@name="employee"]'); }
    get inputOptions() { return $('//ul'); }
    get addNewEmployeeOption() { return $('#add-employee'); }
    get addEmployeeButton() { return $('//button//span[text()="Add employee"]'); }
    get employeeOverlayClose() { return $('header > h3 ~ button'); }

    // Checkboxes - Virtual Card and Physical Card checkboxes.
    get virtualCardCheckbox() { return $('input[name=card-type_VIRTUAL]'); }
    get physicalCardCheckbox() { return $('//span[text()="Physical card"]'); }

    // Used for Physical Cards only
    get deliveryAddressCheckbox() { return $('(//label//span[text()="Business"])[1]'); }

    // Checkbox to show/not show employee name
    get showEmployeeNameCheckbox() { return $('//input[@name="name-on-card"]'); }

    // Spend Controls - Daily, Monthly and Transaction Limits
    get dailyLimitCheckbox() { return $('input[name=purchases-daily-limit]'); }
    get dailyLimitTextbox() { return $('input[name=purchases-daily-limit-amount]'); }
    get monthlyLimitCheckbox() { return $('input[name=purchases-monthly-limit]'); }
    get monthlyLimitTextbox() { return $('input[name=purchases-monthly-limit-amount]'); }
    get transactionLimitCheckbox() { return $('input[name=purchases-transaction-limit]'); }
    get transactionLimitTextbox() { return $('input[name=purchases-instant-limit-amount]'); }

    // Categories Selectors - choose either All categories or specific one. Not all categories are added, add a missing one, if needed.
    get allCategoriesCheckbox() { return $('input[name=mcc-categories-all]'); }
    get childCareCheckbox() { return $('input[name=mcc-categories-CHILD_CARE]'); }
    get digitalGoodsCheckbox() { return $('input[name=mcc-categories-DIGITAL_GOODS]'); }
    get educationCheckbox() { return $('input[name=mcc-categories-EDUCATION]'); }
    get entertainmentCheckbox() { return $('input[name=mcc-categories-ENTERTAINMENT]'); }
    
    // Payment Types -  POS, Online and Manual entry
    get allPaymentTypesCheckbox() { return $('input[name=payment-types-all]'); }
    get posCheckbox() { return $('input[name=payment-types-POS]'); }
    get onlineCheckbox() { return $('input[name=payment-types-ONLINE]'); }
    get manualEntryCheckbox() { return $('input[name=payment-types-MANUAL_ENTRY]'); }

    // Create card button when all the required fields are filled
    get createCardButton() { return $('//button//span[text()="Create Card"]'); }


    /**
    * Method to create physical or virtual card
    * @author   Nikita Bogdanov
    * @param    {String} type - either "physical" or "virtual"
    * @param    {String} categoryType - all categories or child care, digital goods
    * @param    {String} limit - daily, monthly ot transaction limit
    */    
    async addNewCard(type, categoryType, limit, paymentType) {
        await CardsPage.successNotification.waitForDisplayed({ reverse: true});

        // Click on Add New Card buttton
        await CardsPage.addNewCardButton.click();

        // Navigated to New Card page
        await expect(this.pageHeader).toHaveText('New Card');

        // Selecting Root Allocation
        await this.allocationInput.click();
        await this.inputOptions.waitForDisplayed();
        await this.inputOptions.$$('li')[0].click();

        // Selecting an Employee
        await this.employeeInput.click();
        await this.inputOptions.waitForDisplayed();
        await this.inputOptions.$$('li')[0].click();

        // Depends on passed value - clicks on virtual card checkbox or physical, if physical also clicks on delivery address
        if (type !== "physical") {
            await browser.execute(`document.querySelector("${await this.virtualCardCheckbox.selector}").click()`);
        } else {
            await browser.execute(`document.querySelector("${await this.physicalCardCheckbox.selector}").click()`);
            await browser.execute(`document.querySelector("${await this.deliveryAddressCheckbox.selector}").click()`);
        }

        // Remove selection for categories, inherited from allocation
        if (await this.allCategoriesCheckbox.isSelected() === true && categoryType !== null) {
            await this.allPaymentTypesCheckbox.scrollIntoView();
            await browser.execute(`document.querySelector("${await this.allCategoriesCheckbox.selector}").click()`);
            await browser.pause(3000);
            console.log("Selection for categories is removed. Starting to select " + categoryType.toUpperCase());
        } else {
            console.log("All categories checkbox is not selected");
        }

        // Spend Cotrols Steps
        switch (categoryType) {
            case "child care":
                await browser.execute(`document.querySelector("${await this.childCareCheckbox.selector}").click()`);
                await expect(this.childCareCheckbox).toBeSelected();
                break;
            case "digital goods":
                await browser.execute(`document.querySelector("${await this.digitalGoodsCheckbox.selector}").click()`);
                await expect(this.digitalGoodsCheckbox).toBeSelected();
                break;
            case "education":
                await browser.execute(`document.querySelector("${await this.educationCheckbox.selector}").click()`);
                await expect(this.educationCheckbox).toBeSelected();
                break;
            case "entertainment":
                await browser.execute(`document.querySelector("${await this.entertainmentCheckbox.selector}").click()`);
                await expect(this.entertainmentCheckbox).toBeSelected();
                break;
            case "all categories":
                await browser.execute(`document.querySelector("${await this.allCategoriesCheckbox.selector}").click()`);
                await expect(this.allCategoriesCheckbox).toBeSelected();
                break;
            default:
                break;
        }

        // Limits - Daily, Monthly or/and Transaction limit
        switch (limit) {
            case "daily":
                await browser.pause(1500);
                await browser.execute(`document.querySelector("${await this.dailyLimitCheckbox.selector}").click()`);
                await this.dailyLimitTextbox.waitForExist();
                await this.dailyLimitTextbox.setValue('50');
                await expect(this.dailyLimitTextbox).toBeDisplayed();
                await expect(this.dailyLimitTextbox).toHaveValue("50");
                break;
            case "monthly":
                await browser.pause(1500);
                await this.monthlyLimitCheckbox.waitForExist();
                await browser.execute(`document.querySelector("${await this.monthlyLimitCheckbox.selector}").click()`);
                await this.monthlyLimitTextbox.waitForExist();
                await this.monthlyLimitTextbox.setValue("500");
                await expect(this.monthlyLimitTextbox).toBeDisplayed();
                await expect(this.monthlyLimitTextbox).toHaveValue("500");
                break;
            case "transaction":
                await browser.pause(1500);
                await this.transactionLimitCheckbox.waitForExist();
                await browser.execute(`document.querySelector("${await this.transactionLimitCheckbox.selector}").click()`);
                await this.transactionLimitTextbox.waitForExist();
                await this.transactionLimitTextbox.setValue("500");
                await expect(this.transactionLimitTextbox).toBeDisplayed();
                await expect(this.transactionLimitTextbox).toHaveValue("500");
                break;
            default:
                break;
        }

        // Remove selection for payment types, inherited from allocation
        if (await this.allPaymentTypesCheckbox.isSelected() === true && paymentType !== null) {
            await this.allPaymentTypesCheckbox.scrollIntoView();
            await browser.execute(`document.querySelector("${await this.allPaymentTypesCheckbox.selector}").click()`);
            console.log("Selection for payment types is removed. Starting to select " + paymentType.toUpperCase());
        } else {
            console.log("No payment types are selected.");
        }

        // Payment Types - POS, Online and Manual entry
        switch (paymentType) {
            case "pos":
                await browser.execute(`document.querySelector("${await this.posCheckbox.selector}").click()`);
                await expect(this.posCheckbox).toBeSelected();
                break;
            case "online":
                await browser.execute(`document.querySelector("${await this.onlineCheckbox.selector}").click()`);
                await expect(this.onlineCheckbox).toBeSelected();
                break;
            case "manual entry":
                await browser.execute(`document.querySelector("${await this.manualEntryCheckbox.selector}").click()`);
                await expect(this.manualEntryCheckbox).toBeSelected();
                break;
            default:
                break;
        }

        // Wait for Create Card button is displayed/enabled
        await this.createCardButton.waitForEnabled();
        await browser.pause(1000);

        // Clicking Create Card button
        await this.createCardButton.click();

        // Card is created and validate notification
        await expect(CardsPage.successNotification).toBeDisplayed();

        await CardsPage.addNewCardButton.waitForDisplayed();
    }

    open() {
        return super.open('cards/edit');
    }

}

export default new NewCardPage();
import Page from './page';
import NewEmployeesPage from './new.employee.page';

class NewCardPage extends Page {

    // Selector getters
    get pageHeader() { return $('//h1/span[text()="New Card"]'); }

    // Allocation input and employee input. inputOptions is used to select option from Allocation and employee input by index
    get allocationInput() { return $('//input[@name="allocation"]'); }
    get employeeInput() { return $('//input[@name="employee"]'); }
    get inputOptions() { return $('//ul'); }
    get employeesFromDropdown() { return $$('//ul/li/span'); }
    get addNewEmployeeButton() { return $('#add-employee'); }
    get addEmployeeButton() { return $('//button//span[text()="Add employee"]'); }
    get newEmployeeOverlayClose() { return $('header > h3 ~ button'); }

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
    * Method to select allocation
    * @author   Nikita Bogdanov
    * @param    {String} options - allocation options
    */  
    async selectAllocation(options) {
        if (options === "root") {
            await this.allocationInput.waitForExist();
            await this.allocationInput.click();
            await this.inputOptions.waitForDisplayed();
            await this.inputOptions.$$('li')[0].click();
        } else {
            await this.allocationInput.waitForExist();
            await this.allocationInput.click();
            await this.inputOptions.waitForDisplayed();
            await this.inputOptions.$$('li')[1].click();   
        }

    }

    /**
    * Method to select an employee
    * @author   Nikita Bogdanov
    * @param    {String} options - allocation options
    */  
    async selectEmployee(type) {
        await this.employeeInput.waitForDisplayed();
        await this.employeeInput.click();
        switch (type) {
            case "owner":
                await this.inputOptions.waitForDisplayed();
                await this.inputOptions.$$('li')[0].click();
                break;
            case "new employee":
                await this.inputOptions.waitForDisplayed();
                await this.addNewEmployeeButton.waitForDisplayed();
                await this.addNewEmployeeButton.click();
                await NewEmployeesPage.createEmployee();
                await this.newEmployeeOverlayClose.waitForDisplayed({ reverse: true });
                break;
        }
    }

    async employeeWithName(name) {
        await this.employeeInput.waitForDisplayed();
        await this.employeeInput.click();
        await browser.pause(3000);
        for (let i = 0; i < await this.employeesFromDropdown.length; i++) {
            if (await this.employeesFromDropdown[i].getText() === name) {
                await this.employeesFromDropdown[i].click();
            } else {
                console.log("Employee with provided name is not found...");
            }
        }
    }

    /**
    * Method to select virtua or physical card.
    * @author   Nikita Bogdanov
    * @param    {String} type - physical or virtual
    */  
    async cardType(type) {
        await this.virtualCardCheckbox.waitForExist();
        if (type !== "physical") {
            await browser.execute(`document.querySelector("${await this.virtualCardCheckbox.selector}").click()`);
        } else {
            await browser.execute(`document.querySelector("${await this.physicalCardCheckbox.selector}").click()`);
            await browser.execute(`document.querySelector("${await this.deliveryAddressCheckbox.selector}").click()`);
        }
    }


    /**
    * Method to enable/disable showing employee name.
    * @author   Nikita Bogdanov
    */  
    async showEmployeeName() {
        await this.showEmployeeNameCheckbox.waitForDisplayed();
        await this.showEmployeeNameCheckbox.click();
    }

    /**
    * Method to select virtua or physical card.
    * @author   Nikita Bogdanov
    * @param    {String} type - daily, monthly and transaction
    * @param    {String} amount - any amount?
    */  
    async setlimit(type, amount) {
        switch (type) {
            case "daily":
                await browser.pause(1500);
                await browser.execute(`document.querySelector("${await this.dailyLimitCheckbox.selector}").click()`);
                await this.dailyLimitTextbox.waitForExist();
                await this.dailyLimitTextbox.setValue(amount);
                break;
            case "monthly":
                await browser.pause(1500);
                await this.monthlyLimitCheckbox.waitForExist();
                await browser.execute(`document.querySelector("${await this.monthlyLimitCheckbox.selector}").click()`);
                await this.monthlyLimitTextbox.waitForExist();
                await this.monthlyLimitTextbox.setValue(amount);
                break;
            case "transaction":
                await browser.pause(1500);
                await this.transactionLimitCheckbox.waitForExist();
                await browser.execute(`document.querySelector("${await this.transactionLimitCheckbox.selector}").click()`);
                await this.transactionLimitTextbox.waitForExist();
                await this.transactionLimitTextbox.setValue(amount);
                break;
            default:
                break;
        }
    }

    async setCategories(categoryType) {
        if (await this.allCategoriesCheckbox.isSelected() === true) {
            await this.allPaymentTypesCheckbox.scrollIntoView();
            await browser.execute(`document.querySelector("${await this.allCategoriesCheckbox.selector}").click()`);
        } else {
            console.log("All categories checkbox is not selected");
        }
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
    }

    async setPaymentTypes(paymentType) {
        if (await this.allPaymentTypesCheckbox.isSelected() === true) {
            await this.allPaymentTypesCheckbox.scrollIntoView();
            await browser.execute(`document.querySelector("${await this.allPaymentTypesCheckbox.selector}").click()`);
        } else {
            console.log("All payment types checkbox is not selected");
        }
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
            case "all":
                await browser.execute(`document.querySelector("${await this.allPaymentTypesCheckbox.selector}").click()`);
                await expect(this.allPaymentTypesCheckbox).toBeSelected();
                break;
            default:
                break;
        }
    }

    open() {
        return super.open('cards/edit');
    }

}

export default new NewCardPage();
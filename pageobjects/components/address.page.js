import faker from "@faker-js/faker";

const streetNumber = faker.datatype.number({ min: 100, max: 9999});

class Address {
    get streetAddressTextbox() { return $('input[name="streetLine1"]'); }
    get streetAddressOptions() { return $$('div[role=dialog] ul li'); }

    async enterAddress() {
        await this.streetAddressTextbox.waitForExist();
        await this.streetAddressTextbox.setValue(streetNumber + " ");
        await browser.pause(2500);
        await this.streetAddressOptions[0].waitForExist();
        await this.streetAddressOptions[0].click();
    }
}

export default new Address();
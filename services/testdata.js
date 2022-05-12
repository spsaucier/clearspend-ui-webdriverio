const axios = require("axios");
const config = require('./config');
const expect = require('chai').expect;

// Assign baseURL value
axios.defaults.baseURL = 'https://api.capital.qa.clearspend.com';
axios.defaults.withCredentials = true;
let businessProspectId;
let cookie;
let businessBankAccountId;
let linkToken;
let publicToken;

// Send Request to create new business prospect
async function createBusinessProspect() {
    try {
        const resp = await axios.post('/business-prospects', config.businessProspect);
        businessProspectId = resp.data.businessProspectId;
        expect(resp.status).to.equal(200);
        expect(resp.statusText).to.equal('OK');
        expect(resp.data).to.have.property('businessProspectId');
        console.log('\x1b[32m%s\x1b[0m', "New Business Prospect ID: " + "<<< " + businessProspectId + " >>>");
    } catch (error) {
        console.error(error);
    }
    }

// Send Request to validate email
async function validateEmail() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Validating provided email...");
        const resp = await axios.post("/business-prospects/" + businessProspectId + "/validate-identifier", config.validateIdentifierByEmail);
    } catch (error) {
        console.error(error);
    }
}

// Send Request with phone number for business prospect
async function specifyPhoneNumber() {
    try {
        const resp = await axios.post(`/business-prospects/${businessProspectId}/phone`, config.businessProspectPhoneNumber);
    } catch (error) {
        console.error(error);
    }
}

// Validate Phone Number, confirm with confirmation code.
async function validatePhoneNumber() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Validating phone number...");
        const resp = await axios.post(`/business-prospects/${businessProspectId}/validate-identifier`, config.validateIdentifierByPhoneNumber);
    } catch (error) {
        console.error(error);
    }
}

// Set password for business prospect account
async function setPassword() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Setting up new password for the account...");
        const resp = await axios.post(`/business-prospects/${businessProspectId}/password`, config.password);
    } catch (error) {
        console.error(error);
    }
}

// Login with new account - saving cookies to cookie variable
async function loginWithNewAccount() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Trying to login with new account...");
        const resp = await axios.post("/authentication/login", config.userCredentials);
        cookie = resp.headers["set-cookie"][0] + "; " + resp.headers["set-cookie"][1];
    } catch (error) {
        console.error(error);
    }
}

// Convert Business Prospect 
async function convertBusinessProspect() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Converting business prospect...");
        const resp = await axios.post(`/business-prospects/${businessProspectId}/convert`, config.businessProspectCompanyDetails, {
            headers: {
                Cookie: cookie
            }
        });
        console.log('\x1b[32m%s\x1b[0m', "New Business Owner ID: " + "<<< " + resp.data.businessOwnerId + " >>>");
        config.businessOwnerDetails.id = resp.data.businessOwnerId;
    } catch (error) {
        console.error(error);
    }
}

async function updateOwner() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Adding account details to the business owner...");
        const resp = await axios.patch(`/business-owners/update`, config.businessOwnerDetails, {
            headers: {
                Cookie: cookie
            }
        });
    } catch (error) {
        console.error(error);
    }
}

async function triggerAllOwnersProvided() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Triggering all owners provided...");
        const resp = await axios.post(`/business-owners/trigger-all-owners-provided`, {
            noOtherOwnersToProvide: true,
            noExecutiveToProvide: true
        }, {
            headers: {
                Cookie: cookie
            }
        });
    } catch (error) {
        console.error(error);
    }
}

async function applicationReviewRequirements() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Checking application review requirements...");
        const resp = await axios.get(`/application-review/requirement`, {
            headers: {
                Cookie: cookie
            }
        });
    } catch (error) {
        console.error(error);
    }
}

async function uploadDocuments() {
    try {
        console.log('\x1b[33m%s\x1b[0m', "Uploading documents...");
        const resp = await axios.post(`/application-review/document`, {
            headers: {
                Cookie: cookie
            }
        });
        console.log(resp.data);
    } catch (error) {
        console.error(error);
    }
}

async function generateLinkToken() {
    try {
        const resp = await axios.get(`/business-bank-accounts/link-token`, {
            headers: {
                Cookie: cookie
            }
        });
        linkToken = resp.data.linkToken;
        console.log('\x1b[32m%s\x1b[0m', "New linkToken is generated: " + "<<< " + linkToken + " >>>");
    } catch (error) {
        console.error(error);
    }
}

async function generatePublicToken() {
    try {
        const resp = await axios.post(`https://sandbox.plaid.com/sandbox/public_token/create`, {
            client_id: "6148efa64491e20011af5b75",
            secret: "f85bb203341c7ec9ce1e8403edf92d",
            institution_id: "ins_109508",
            initial_products: ["assets"],
            options: {
              webhook: "https://string.com",
              override_username: "user_good",
              override_password: "pass_good"
            }
        });
        publicToken = resp.data.public_token;
        console.log('\x1b[32m%s\x1b[0m', "New publicToken is generated: " + "<<< " + publicToken + " >>>");
    } catch (error) {
        console.error(error);
    }
}

async function linkBusinessBankAccount() {
    try {
        const resp = await axios.get(`business-bank-accounts/link-token/${publicToken}/accounts`, {
            headers: {
                Cookie: cookie
            }
        });
        businessBankAccountId = resp.data[0].businessBankAccountId;
        console.log('\x1b[33m%s\x1b[0m', "Linking Business Bank Accounts...");
    } catch (error) {
        console.error(error);
    }
}

async function registerBank() {
    try {
        const resp = await axios.post(`/business-bank-accounts/${businessBankAccountId}/register`, {}, {
            headers: {
                Cookie: cookie
            }
        });
        console.log('\x1b[33m%s\x1b[0m', "Registering bank...");
    } catch (error) {
        console.error(error);
    }
}

async function makeDeposit() {
    try {
        const resp = await axios.post(`/business-bank-accounts/${businessBankAccountId}/transactions`, {
            "bankAccountTransactType": "DEPOSIT",
            "amount": {
              "currency": "USD",
              "amount": 100
            }
          }, {
            headers: {
                Cookie: cookie
            }
        });
        console.log('\x1b[33m%s\x1b[0m', "Making first deposit...");
    } catch (error) {
        console.error(error);
    }
}

async function completeOnboarding() {
    try {
        const resp = await axios.post(`/businesses/complete-onboarding`, {}, {
            headers: {
                Cookie: cookie
            }
        });
        console.log('\x1b[33m%s\x1b[0m', "Onboarding is completed");
        console.log('\x1b[32m%s\x1b[0m', "New Account is generated: " + "<<< " + config.businessProspect.email + " / password123 >>>");
    } catch (error) {
        console.error(error);
    }
}

// Combine all the requests and return new user
async function createBusinessAndOwner() {
    await createBusinessProspect();
    await validateEmail();
    await specifyPhoneNumber();
    await validatePhoneNumber();
    await setPassword();
    await loginWithNewAccount();
    await convertBusinessProspect();
    await updateOwner();
    await triggerAllOwnersProvided();
    await applicationReviewRequirements();
    await generatePublicToken();
    await linkBusinessBankAccount();
    await registerBank();
    await makeDeposit();
    await completeOnboarding();
    return config.businessProspect.email;
}

module.exports = {
    createBusinessAndOwner
};
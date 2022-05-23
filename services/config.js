import faker from '@faker-js/faker';

// New email for the business prospect
const email = faker.internet.email();

// Object that contains Business Prospect details - email, name, businessType and more..
const businessProspect = {
    email: email,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    businessType: "SINGLE_MEMBER_LLC",
    relationshipOwner: true,
    relationshipExecutive: true,
    tosAndPrivacyPolicyAcceptance: true
};

// Object that contains data for Validating by email
const validateIdentifierByEmail = {
    identifierType: "EMAIL",
    otp: "111111"
};

// Business Prospect's object with phone number
const businessProspectPhoneNumber = {
    phone: faker.phone.phoneNumber("+1321#######")
};

// Object that contains data for Validating by phone number
const validateIdentifierByPhoneNumber = {
    identifierType: "PHONE",
    otp: "111111"
};

// Object that contains password for new user
const password = {
    password: "password123"
};

const userCredentials = {
    username: email,
    password: "password123"
};

const businessProspectCompanyDetails = {
    legalName: faker.company.companyName(),
    employerIdentificationNumber: faker.datatype.number({ min: 100000000, max: 999999999 }),
    businessPhone: "+13213474518",
    address: {
      streetLine1: "8849 Latrec Ave",
      streetLine2: "",
      locality: "Orlando",
      region: "Florida",
      postalCode: "32819", 
      country: "USA"
    },
    mcc: "5462",
    description: "Business small description",
    businessName: "business",
    url: "https://fecebook.com/business"
  };

const businessOwnerDetails = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    relationshipOwner: true,
    relationshipExecutive: true,
    percentageOwnership: 100,
    title: "CEO",
    dateOfBirth: "1990-01-01",
    taxIdentificationNumber: faker.random.numeric(9),
    email: email,
    phone: "+13213474518",
    address: {
      streetLine1: "8849 Latrec Ave",
      streetLine2: "",
      locality: "FL",
      region: "Orlando",
      postalCode: "32819",
      country: "USA"
    },
    isOnboarding: false
};

const uploadFile = {
    "documentList": [
        "@testdata/success.png"
      ]
};

module.exports = {
    businessProspect,
    validateIdentifierByEmail,
    businessProspectPhoneNumber,
    validateIdentifierByPhoneNumber,
    password,
    userCredentials,
    businessProspectCompanyDetails,
    businessOwnerDetails,
    uploadFile
};
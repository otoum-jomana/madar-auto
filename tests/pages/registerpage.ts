import { Page, Locator } from '@playwright/test';


export class RegisterPage {
    readonly page: Page;
    
    // info (User)
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly positionInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly phoneInput: Locator;

    // info (Company)
    readonly companyNameInput: Locator;
    readonly businessTypeInput: Locator;
    readonly websiteInput: Locator;

    // info (Company Address - Optional)
    readonly streetInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly zipInput: Locator;
    readonly countryInput: Locator;

    // create account button
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstNameInput = page.getByLabel('First Name *', { exact: false });
        this.lastNameInput = page.getByLabel('Last Name *', { exact: false });
        this.positionInput = page.getByLabel('Position *', { exact: false });
        this.emailInput = page.getByLabel('Work Email *', { exact: false });
        this.passwordInput = page.getByLabel('Password *', { exact: true }); // exact عشان نميزها عن تاكيد الباسورد
        this.confirmPasswordInput = page.getByLabel('Confirm Password *', { exact: false });
        this.phoneInput = page.getByLabel('Phone Number *', { exact: false });

        this.companyNameInput = page.getByLabel('Company Name *', { exact: false });
        this.businessTypeInput = page.getByLabel('Business Type', { exact: false });
        this.websiteInput = page.getByLabel('Website', { exact: false });

        this.streetInput = page.getByLabel('Street', { exact: false });
        this.cityInput = page.getByLabel('City', { exact: false });
        this.stateInput = page.getByLabel('State / Province', { exact: false });
        this.zipInput = page.getByLabel('ZIP / Postal Code', { exact: false });
        this.countryInput = page.getByLabel('Country', { exact: false });

        // create account button 
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    }

    // to fill form in one
    async fillRegistrationForm(userData: any) {
        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);
        await this.positionInput.fill(userData.position);
        await this.emailInput.fill(userData.email);
        await this.passwordInput.fill(userData.password);
        await this.confirmPasswordInput.fill(userData.confirmPassword);
        await this.phoneInput.fill(userData.phone);

        await this.companyNameInput.fill(userData.companyName);
        if (userData.businessType) await this.businessTypeInput.fill(userData.businessType);
        if (userData.website) await this.websiteInput.fill(userData.website);

        if (userData.street) await this.streetInput.fill(userData.street);
        if (userData.city) await this.cityInput.fill(userData.city);
        if (userData.state) await this.stateInput.fill(userData.state);
        if (userData.zip) await this.zipInput.fill(userData.zip);
        if (userData.country) await this.countryInput.fill(userData.country);
    }

    async submitForm() {
        await this.createAccountButton.click({ force: true });
    }
}
import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        //page-feild
        this.emailInput = page.getByLabel('Email Address *', { exact: false });
        this.passwordInput = page.getByLabel('Password *', { exact: false });
        
        this.signInButton = page.getByRole('button', { name: 'Sign In', exact: true });
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
}
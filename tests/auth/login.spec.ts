import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { faker } from '@faker-js/faker';
test.describe('MADAR - Login Authentication Suite', () => {
       // test1: positive scenario (valid admin credentials)
    test('Should successfully login with valid admin credentials', async ({ page }) => {
        
        const loginPage = new LoginPage(page);

        await page.goto('/login', { waitUntil: 'domcontentloaded' });

        await loginPage.login('madar_admin@m.com', '12345678'); 

        //  expect: redirection to dashboard page after successful login
        await expect(page).toHaveURL(/.*\/dashboard/);    });

        // test2: negative scenario(random credentials)
    test('Should not login with unregistered random credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        await page.goto('/login', { waitUntil: 'domcontentloaded' });

        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password({ length: 8 });

        await loginPage.login(randomEmail, randomPassword); 
 
        //login failed
        await expect(page).toHaveURL(/.*\/login/);
        await expect(page).not.toHaveURL(/.*\/dashboard/);
        
        // test3: negative scenario (short password)
    test('Should show error when password is too short', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto('/login', { waitUntil: 'domcontentloaded' });

        const randomEmail = faker.internet.email();
        const shortPassword = faker.internet.password({ length: 3 }); 

        await loginPage.login(randomEmail, shortPassword);

        // Expect: error message about password length
        await expect(page).toHaveURL(/.*\/login/);
    });
    });
});
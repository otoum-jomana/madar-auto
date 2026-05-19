import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerpage';
import { faker } from '@faker-js/faker';
test.describe('MADAR - Complete User & Company Registration Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/login'); 
    await page.waitForLoadState('networkidle');
    await page.getByText('Register', { exact: true }).click();
    await page.waitForLoadState('networkidle');

  });

  test('Should successfully register a new account with complete profile data', async ({ page }) => {
    
    // 1. craet copy of Page Object
    const registerPage = new RegisterPage(page);
    
    // 2. test data in organized object
    const testData = {
        firstName: 'Jumana',
        lastName: 'Al-Etoom',
        position: 'QA Engineer',
        email: 'jumana.al-etoom@example.com',
        password: 'SecurePass123!',
        confirmPassword: 'SecurePass123!',
        phone: '0790000000',
        companyName: 'Madar Automation Solution',
        businessType: 'Software Development',
        website: 'https://madar-automation.com',
        street: 'Main Street',
        city: 'Jerash',
        state: 'Jerash Governance',
        zip: '26110',
        country: 'Jordan'
    };

    // 3. fill the registration form with test data
    await registerPage.fillRegistrationForm(testData);
    
    await registerPage.submitForm();

    // 4. verify the expected outcome 
    await expect(page).toHaveURL('/login');

  }); 
});































// import { test, expect } from '@playwright/test';

// test.describe('MADAR - Complete User & Company Registration Suite', () => {

//   test.beforeEach(async ({ page }) => {
//     await page.goto('/login'); 
//     await page.waitForLoadState('networkidle');
//     await page.getByText('Register', { exact: true }).click();
//     await page.waitForLoadState('networkidle');

//   });

//   test('Should successfully register a new account with complete profile data', async ({ page }) => {
//      // إنشاء نسخة من الـ Page Object
//         const registerPage = new RegisterPage(page);
    
//         // تجهيز بيانات الفحص في Object مرتب
//         const testData = {
//             firstName: 'Jumana',
//             lastName: 'Al-Etoom',
//             position: 'QA Engineer',
//             email: 'jumana.al-etoom@example.com',
//             password: 'SecurePass123!',
//             confirmPassword: 'SecurePass123!',
//             phone: '0790000000',
//             companyName: 'Madar Automation Solution',
//             businessType: 'Software Development',
//             website: 'https://madar-automation.com',
//             street: 'Main Street',
//             city: 'Jerash',
//             state: 'Jerash Governance',
//             zip: '26110',
//             country: 'Jordan'

//     // 1. (User Info)
//    // await page.locator('#_r_14_').fill('jumana');
//     // await page.fill('[name="First Name"]','jomana');
//     // await page.fill('[name="Last Name"]','al-etoom');
//     // await page.fill('[name="Job Title"]','QA Engineer');
//     // await page.fill('[name="Email"]','jumana.al-etoom@example.com');
//     // await page.fill('[name="Password"]','SecurePass123!');
//     // await page.fill('[name="Confirm Password"]','SecurePass123!');
//     // await page.fill('[name="Phone Number"]','0790000000');
//     // await page.click('button:has-text("Next")');

   
    
    
//     //await page.locator('#_r_15_').fill('al-etoom');
//     // await page.locator('#_r_16_').fill('QA Engineer');
//     // await page.locator('#_r_17_').fill('jumana.al-etoom@example.com');
//     // await page.locator('#_r_18_').fill('SecurePass123!');
//     // await page.locator('#_r_19_').fill('SecurePass123!');
//     // await page.locator('#_r_20_').fill('0790000000');

//     // 2. (Company Info)
//     //  await page.locator('#_r_21_').fill('Madar Automation Solution');
//     //  await page.locator('#_r_22_').fill('Software Development');
//     //  await page.locator('#_r_23_').fill('https://madar-automation.com');

//     // // 3. (Company Address)
//     // await page.locator('#_r_1a_').fill('Main Street');
//     // await page.locator('#_r_1b_').fill('Jerash');
//     // await page.locator('#_r_1c_').fill('26110');
//     // await page.locator('#_r_1d_').fill('Jerash Governance');
//     // await page.locator('#_r_1e_').fill('Jordan');

//     // // 4. (Captcha)
//     // await page.getByText('Verify you are human').click();

//     // // 5. (Create Account)
//     // await page.locator('button:has-text("Create Account")').click();

//     // // 6. (Verification step) 
//     // await expect(page).toHaveURL('/login');
//   };
//       await registerPage.fillRegistrationForm(testData);
//           await registerPage.submitForm();
//           await expect(page).toHaveURL('/login');
// //4. (Captcha)
//      //await page.getByText('Verify you are human').click();
// // 5. (Create Account)
//     // await page.locator('button:has-text("Create Account")').click();

// });
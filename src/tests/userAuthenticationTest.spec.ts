import { test, expect } from "@playwright/test";
import { UserLoginPage } from "../pages/qaBrainsPages/userLoginPage";

test.describe("User Authentication Tests", () => {
  let userLoginPage: UserLoginPage;
  test("should login successfully with valid credentials", async ({ page }) => {
    userLoginPage = new UserLoginPage(page);
    await userLoginPage.goToLoginPage();
    await userLoginPage.loginWithCredentials(
      process.env.VALID_LOGIN_EMAIL as string,
      process.env.VALID_LOGIN_PASSWORD as string,
    );
  });
});

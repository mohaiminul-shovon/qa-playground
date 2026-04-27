import { Page, Locator } from "@playwright/test";
export class UserLoginPage {
  readonly page: Page;
  readonly headingText: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.headingText = page.getByRole("heading", {
      name: "User Authentication",
    });
    this.emailInput = page.getByRole("textbox", { name: "Email*" });
    this.passwordInput = page.getByRole("textbox", { name: "Password*" });
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  public async goToLoginPage() {
    await this.page.goto(process.env.BASE_URL as string);
  }
  public async fillLoginForm(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }
  public async loginWithCredentials(email: string, password: string) {
    await this.fillLoginForm(email, password);
    await this.loginButton.click();
  }
}

import { Page, Locator } from "@playwright/test";

export class InputFieldsPage {
  readonly page: Page;
  readonly headingText: Locator;
  readonly movieNameInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headingText = page.getByRole("heading", {
      name: "Input Field Automation",
    });
    this.movieNameInput = page.getByPlaceholder("Enter hollywood movie name");
  }
}

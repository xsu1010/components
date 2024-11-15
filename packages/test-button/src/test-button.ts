import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import TestButtonStyles from "./test-button.styles.js";

@customElement("test-button")
export class TestButton extends LitElement {
  static override styles = [TestButtonStyles];
  @property({ type: String }) variant: "primary" | "secondary" = "primary";
  override render() {
    return html`<button class="${this.variant.toLowerCase()}"><slot></button>`;
  }
}

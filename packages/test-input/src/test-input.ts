import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import TestInputStyles from "./test-input.styles.js";

@customElement("test-input")
export class TestInput extends LitElement {
  static override styles = [TestInputStyles];
  @property({ type: String }) variant: "primary" | "secondary" = "primary";

  @property({ type: String }) label: string = "Label";
  /**
   * It stores and provides tools to manipulate DOM elements as standard HTML form elements.
   * https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals
   */
  public internals: ElementInternals;

  protected constructor() {
    super();
    this.internals = this.attachInternals();
    this.internals.role = "input";
  }

  override render() {
    return html`
      <label
        >${this.label}
        <input type="text" class="${this.variant.toLowerCase()}" />
      </label>
    `;
  }
}

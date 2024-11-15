import { css } from "lit";

const TestButtonStyles = css`
  button {
    all: unset;
    padding: var(--test-button-padding, 8px 16px);
    border-radius: var(--test-button-border-radius, 4px);
    font-family: var(--test-button-font-family, sans-serif);
    font-weight: var(--test-button-font-weight, bold);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-transform: var(--test-button-text-transform, none);
    cursor: pointer;
  }

  .primary {
    background-color: var(--bg-test-button-primary, blue);
    color: var(--fg-test-button-primary, white);
  }

  .secondary {
    background-color: var(--bg-test-button-secondary, white);
    color: var(--fg-test-button-secondary, black);
  }
`;
export default TestButtonStyles;

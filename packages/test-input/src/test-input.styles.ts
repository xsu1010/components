import { css } from "lit";

const TestInputStyles = css`
  :host {
    display: block;
    width: 200px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-family: var(--test-input-font-family, sans-serif);
    gap: var(--test-input-label-gap, 8px);
  }

  input {
    all: unset;
    cursor: text;
    padding: var(--test-input-padding, 8px 16px);
    border: var(--test-input-border, 1px solid #ccc);
    border-radius: var(--test-input-border-radius, 4px);
    font-family: var(--test-input-font-family, sans-serif);
  }

  .primary {
    background-color: var(--bg-test-input-primary, #eee);
    color: var(--fg-test-input-primary, black);
  }

  .secondary {
    background-color: var(--bg-test-input-secondary, #ffaaaa);
    color: var(--fg-test-input-secondary, black);
  }
`;
export default TestInputStyles;

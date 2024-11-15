import "./test-button";
import type { Meta, StoryObj } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { html } from "lit";

const meta: Meta = {
  title: "Test Components/Button",
  component: "test-button",
  args: {
    variant: "Primary",
    label: "Label",
  },
  parameters: {
    actions: {
      handles: ["click"],
    },
    docs: {
      controls: {
        sort: "alpha",
      },
    },
  },
  decorators: [withActions],
  argTypes: {
    variant: {
      name: "Button variant",
      defaultValue: "Primary",
      description: `The button variant.       
<br>

| HTML Attribute | Component Property |
| :---: | :---: |
| \`variant\` | \`variant\` |
<br>            
`,
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Primary",
        },
      },
      control: "select",
      options: ["Primary", "Secondary"],
    },
    label: {
      name: "Label",
      defaultValue: "",
      description: `The button label.`,
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "Primary",
        },
      },
      control: "text",
    },
  },
  render: (args) =>
    html`<test-button variant="${args.variant}">${args.label}</test-button>`,
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: "Primary",
    label: "Label",
  },
};

export const Secondary: Story = {
  args: {
    variant: "Secondary",
    label: "Label",
  },
};

export const Playground: Story = {
  args: {
    ...Primary.args,
  },
};

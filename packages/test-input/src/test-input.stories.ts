import "./test-input";
import type { Meta, StoryObj } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { html, nothing } from "lit";

const meta: Meta = {
  title: "Test Components/Input",
  component: "test-input",
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
      description: `The input variant.       
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
      description: `The input label.`,
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
    html`<test-input
      label="${args.label}"
      variant="${args.variant}"
    ></test-input>`,
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

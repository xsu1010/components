import type { StorybookConfig } from "@storybook/web-components-vite";
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../../../packages/test-*/src/**/*.mdx",
    "../../../packages/test-*/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  framework: "@storybook/web-components-vite",
};
export default config;

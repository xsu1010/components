import type { Preview, Renderer } from "@storybook/web-components";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../../../test-ds/components/src/tokens/main.css";
import "../../../test-ds/components/src/tokens/sub.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<Renderer>({
      themes: {
        Main: "main-brand",
        Secondary: "sub-brand",
      },
      defaultTheme: "Main",
    }),
  ],
};

export default preview;

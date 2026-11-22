import React, { useState } from 'react';
import { ThemeProvider } from '../../context/ThemeContextProvider';
import { CheckBox } from '.';
import DefaultTheme from '../../theme/DefaultTheme';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

const ControlledTemplate = (args) => {
  const [checked, setChecked] = useState(args.checked ?? true);
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CheckBox
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </ThemeProvider>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    checked: true,
  },
  render: (args) => <ControlledTemplate {...args} />,
};

export const Uncontrolled = {
  args: {
    defaultChecked: false,
  },
  render: (args) => (
    <ThemeProvider theme={DefaultTheme}>
      <CheckBox {...args} />
    </ThemeProvider>
  ),
};

export const Disabled = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => (
    <ThemeProvider theme={DefaultTheme}>
      <CheckBox {...args} />
    </ThemeProvider>
  ),
};

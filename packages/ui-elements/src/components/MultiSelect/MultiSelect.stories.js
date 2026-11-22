import React, { useState } from 'react';
import { ThemeProvider } from '../../context/ThemeContextProvider';
import DefaultTheme from '../../theme/DefaultTheme';
import MultiSelect from './MultiSelect';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
};

const MultiSelectStory = (args) => {
  const [value, setValue] = useState(args.value || []);
  return (
    <ThemeProvider theme={DefaultTheme}>
      <MultiSelect
        {...args}
        value={value}
        onChange={(val) => {
          setValue(val);
          args.onChange?.(val);
        }}
      />
    </ThemeProvider>
  );
};

export const Default = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    placeholder: 'Select options...',
    value: [],
    disabled: false,
  },
  render: (args) => <MultiSelectStory {...args} />,
};

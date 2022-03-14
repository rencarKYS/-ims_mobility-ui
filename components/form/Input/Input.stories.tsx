import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './index'

export default {
  title: "Example/IMSForm/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Blue = Template.bind({});

Blue.args = {
  blue: true,
  label: 'Input',
};
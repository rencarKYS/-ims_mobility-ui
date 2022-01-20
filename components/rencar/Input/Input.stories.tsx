import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './index'

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const RencarInput = Template.bind({});

RencarInput.args = {
  placeholder: "입력하세요"
};
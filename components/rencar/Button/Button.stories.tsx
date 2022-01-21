import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index'

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
export const Outline = Template.bind({})
export const DefaultBorder = Template.bind({})
export const OutlineBorder = Template.bind({})

Default.args = {
  label: "Default",
  disabled: false,
}

Outline.args = {
  label: "Outline",
  disabled: false,
  outline: true,
}

DefaultBorder.args = {
  label: "Radius",
  disabled: false,
  style: { borderRadius: '5px' }
}

OutlineBorder.args = {
  label: "Radius",
  disabled: false,
  outline: true,
  style: { borderRadius: '5px' }
}
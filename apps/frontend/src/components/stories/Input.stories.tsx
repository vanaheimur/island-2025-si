import { Input } from '../ui/input'
import StoryWrapper from './StoryWrapper'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'The type of the input element',
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text here...',
    label: 'Text',
    name: 'default-text',
  },
}

export const WithLabel: Story = {
  args: {
    type: 'email',
    placeholder: 'name@example.com',
    label: 'Email',
    name: 'email',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    label: 'Password',
    name: 'password',
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
    label: 'Disabled Input',
    name: 'disabled-input',
  },
}

export const WithDefaultValue: Story = {
  args: {
    type: 'text',
    defaultValue: 'Default value',
    label: 'Input with Default Value',
    name: 'default-value-input',
  },
}

export const WithError: Story = {
  args: {
    type: 'email',
    name: 'email-error',
    placeholder: 'name@example.com',
    label: 'Email',
    error: 'Please enter a valid email address.',
  },
}

export const Required: Story = {
  args: {
    type: 'text',
    label: 'Required Field',
    name: 'required-input',
    required: true,
    placeholder: 'This field is required',
  },
}

export const SmallSize: Story = {
  args: {
    type: 'text',
    label: 'Small Input',
    name: 'small-input',
    size: 'sm',
    placeholder: 'Small size input',
  },
}

export const ReadOnly: Story = {
  args: {
    type: 'text',
    label: 'Read Only Input',
    name: 'readonly-input',
    readOnly: true,
    defaultValue: 'Read only value',
    placeholder: 'Read only',
  },
}

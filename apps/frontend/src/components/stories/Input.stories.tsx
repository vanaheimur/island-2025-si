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
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input
        type="email"
        name="email-error"
        placeholder="name@example.com"
        className="border-red-500"
        label="Email"
      />
      <p className="text-sm text-red-500">
        Please enter a valid email address.
      </p>
    </div>
  ),
}

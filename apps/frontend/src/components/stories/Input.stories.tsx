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

export const WithIcon: Story = {
  render: () => (
    <div className="relative w-full max-w-sm">
      <Input
        type="search"
        name="search"
        placeholder="Search..."
        className="pl-8"
        label="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-2.5 top-9 h-4 w-4 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  ),
}

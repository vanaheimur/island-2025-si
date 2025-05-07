import { Button } from '../ui/button'
import StoryWrapper from './StoryWrapper'

import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
        'utility',
      ],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Whether to render the button as a child element',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    size: 'default',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    size: 'default',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'default',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'default',
  },
}

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'default',
  },
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
}

export const Icon: Story = {
  args: {
    children: '→',
    size: 'icon',
    'aria-label': 'Icon button',
  },
}

export const Utility: Story = {
  args: {
    children: 'Utility Button',
    variant: 'utility',
    size: 'default',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Button with Icon
      </>
    ),
    variant: 'default',
    size: 'default',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

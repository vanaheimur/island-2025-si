import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import * as React from 'react'

const buttonVariants = cva(
  "active:ring-inset active:border-mint-400 active:ring-2 active:ring-mint-400 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-[600] transition disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:bg-mint-400 focus-visible:text-dark-400 focus-visible:border-mint-400 focus-visible:[&_svg]:fill-dark-400 focus-visible:[&_svg]:text-dark-400",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-blueberry-400 rounded-[8px] text-white',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'px-4 border rounded-[8px] bg-white border-blue-400 text-blue-400 hover:border-blueberry-400 hover:text-blueberry-400',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        utility: `px-4 border rounded-[8px] border-blue-200 text-dark-400 hover:border-blue-400  bg-white`,
      },
      size: {
        default:
          'md:text-xs text-mobile-xs h-10 md:h-12 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-16 px-6 has-[>svg]:px-4 md:text-md text-mobile-md',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={clsx(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

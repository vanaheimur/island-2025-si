import SvgWarning from '@/icons/Warning'
import clsx from 'clsx'
import * as React from 'react'
import Text, { getTextStyles } from './text'

const Input = React.forwardRef<
  HTMLInputElement,
  Omit<React.ComponentProps<'input'>, 'size'> & {
    label?: string
    size?: 'lg' | 'md' | 'sm'
    error?: string
    disabled?: boolean
  }
>(({ className, type, label, size = 'lg', error, disabled, ...props }, ref) => {
  return (
    <div>
      <div
        className={clsx(
          'flex flex-col gap-2 relative',
          {
            'border border-blue-200  rounded-[8px] p-2 focus-within:border-mint-400 transition focus-within:ring-mint-400 focus-within:ring-[3px] ring-inset':
              size === 'lg' || size === 'md',
            'h-18 md:h-20': size === 'lg',
            'h-14 md:h-16': size === 'md',
            'border-red-600': error && (size === 'lg' || size === 'md'),
            'cursor-not-allowed bg-white':
              disabled && (size === 'lg' || size === 'md'),
            'bg-blue-100': !disabled && (size === 'lg' || size === 'md'),
          },
          className,
        )}
      >
        {label && (
          <label
            htmlFor={props.name}
            className={clsx(
              'text-blue-400 after:absolute after:inset-0',
              error && 'text-red-600',
              getTextStyles({ variant: 'eyebrow' }),
            )}
          >
            {label}
          </label>
        )}
        {size === 'lg' && (
          <input
            id={props.name}
            type={type}
            data-slot="input"
            ref={ref}
            disabled={disabled}
            className={clsx(
              'w-full pl-4 relative z-10 focus:ring-0 focus:ring-offset-0 outline-none',
              getTextStyles({ variant: 'h3' }),
              className,
            )}
            {...props}
          />
        )}
        {size === 'md' && (
          <input
            id={props.name}
            type={type}
            data-slot="input"
            ref={ref}
            disabled={disabled}
            className={clsx(
              'w-full pl-4 relative z-10 focus:ring-0 focus:ring-offset-0 outline-none',
              getTextStyles({ variant: 'h5' }),
              className,
            )}
            {...props}
          />
        )}
        {size === 'sm' && (
          <input
            id={props.name}
            type={type}
            data-slot="input"
            ref={ref}
            disabled={disabled}
            className={clsx(
              'file:text-foreground disabled:bg-white placeholder:text-dark-400 placeholder:font-light selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 md:h-12 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              'focus-visible:border-mint-400 focus-visible:ring-mint-400 focus-visible:ring-[3px]',
              'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
              error && 'border-red-600',
              className,
            )}
            {...props}
          />
        )}
        {error && size === 'lg' && (
          <SvgWarning className="absolute right-6 top-1/2 -translate-y-1/2 size-8 fill-red-600" />
        )}
        {error && size === 'md' && (
          <SvgWarning className="absolute right-4 top-1/2 -translate-y-1/2 size-6 fill-red-600" />
        )}
      </div>
      {error && (
        <Text variant="eyebrow" className="text-red-600 mt-2">
          {error}
        </Text>
      )}
    </div>
  )
})

export { Input }

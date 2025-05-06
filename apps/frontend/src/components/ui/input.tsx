import clsx from 'clsx'
import * as React from 'react'
import { getTextStyles } from './text'

function Input({
  className,
  type,
  label,
  size = 'lg',
  ...props
}: Omit<React.ComponentProps<'input'>, 'size'> & {
  label?: string
  size?: 'lg' | 'md' | 'sm'
}) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2 relative',
        {
          'border border-blue-200 bg-blue-100 rounded-[8px] p-2 focus-within:border-mint-400 transition focus-within:ring-mint-400 focus-within:ring-[3px] ring-inset':
            size === 'lg' || size === 'md',
          'h-20': size === 'lg',
          'h-16': size === 'md',
        },
        className,
      )}
    >
      {label && (
        <label
          htmlFor={props.name}
          className={clsx(
            'text-blue-400 after:absolute after:inset-0',
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
          className={clsx(
            'file:text-foreground placeholder:text-dark-400 placeholder:font-light selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-mint-400 focus-visible:ring-mint-400 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            className,
          )}
          {...props}
        />
      )}
    </div>
  )
}

export { Input }

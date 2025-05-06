import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { createElement, ElementType, ReactNode } from 'react'

const textStyles = cva('', {
  variants: {
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    size: {
      h1: 'text-mobile-h1 md:text-h1',
      h2: 'text-mobile-h2 md:text-h2',
      h3: 'text-mobile-h3 md:text-h3',
      h4: 'text-mobile-h4 md:text-h4',
      h5: 'text-mobile-h5 md:text-h5',
      intro: 'text-mobile-lg md:text-lg',
      eyebrow: 'text-mobile-eyebrow md:text-eyebrow',
      md: 'text-mobile-md md:text-md',
      sm: 'text-mobile-sm md:text-sm',
      xs: 'text-mobile-xs md:text-xs',
    },
    family: {
      sans: 'font-sans',
      mono: 'font-mono',
    },
    lineHeight: {
      compact: 'leading-compact',
      normal: 'leading-normal',
      spacious: 'leading-spacious',
      extraSpacious: 'leading-extra',
    },
  },
})

const variantDefaults = {
  h1: { size: 'h1', weight: 'bold', lineHeight: 'normal', family: 'sans' },
  h2: { size: 'h2', weight: 'bold', lineHeight: 'normal', family: 'sans' },
  h3: { size: 'h3', weight: 'bold', lineHeight: 'normal', family: 'sans' },
  h4: { size: 'h4', weight: 'bold', lineHeight: 'normal', family: 'sans' },
  h5: { size: 'h5', weight: 'bold', lineHeight: 'normal', family: 'sans' },
  intro: {
    size: 'intro',
    weight: 'light',
    lineHeight: 'spacious',
    family: 'sans',
  },
  eyebrow: {
    size: 'eyebrow',
    weight: 'bold',
    lineHeight: 'compact',
    family: 'sans',
  },
  md: { size: 'md', weight: 'light', lineHeight: 'spacious', family: 'sans' },
  sm: { size: 'sm', weight: 'regular', lineHeight: 'normal', family: 'sans' },
  xs: { size: 'xs', weight: 'regular', lineHeight: 'compact', family: 'sans' },
} as const

export const getTextStyles = ({
  variant,
  weight,
  family,
  size,
  lineHeight,
  className,
}: Pick<
  TextProps<ElementType>,
  'variant' | 'weight' | 'family' | 'size' | 'lineHeight' | 'className'
>) => {
  const defaultStyles = variant
    ? variantDefaults[variant]
    : variantDefaults['md']
  return clsx(
    textStyles(),
    textStyles({
      size: size ?? defaultStyles.size,
      family: family ?? defaultStyles.family,
      weight: weight ?? defaultStyles.weight,
      lineHeight: lineHeight ?? defaultStyles.lineHeight,
    }),
    className,
  )
}

interface TextProps<T extends ElementType>
  extends VariantProps<typeof textStyles> {
  as?: T
  children?: ReactNode
  title?: string
  className?: string
  variant?: keyof typeof variantDefaults
  onClick?: () => void
}

export const Text = <T extends ElementType = 'p'>({
  as,
  variant,
  weight,
  family,
  size,
  lineHeight,
  className,
  ...restProps
}: TextProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>) => {
  const ElementType = as || 'p'
  return createElement(ElementType, {
    className: getTextStyles({
      variant,
      weight,
      family,
      size,
      lineHeight,
      className,
    }),
    ...restProps,
  })
}

export default Text

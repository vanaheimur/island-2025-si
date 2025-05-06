import type { SvgProps as SVGRProps } from '../types'

import * as React from 'react'

const SvgFilterOutline = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="filter-outline_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M32 144h448M112 256h288M208 368h96"
      />
    </svg>
  )
}

export default SvgFilterOutline

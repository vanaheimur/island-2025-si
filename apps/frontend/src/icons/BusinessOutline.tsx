import type { SvgProps as SVGRProps } from '../types'

import * as React from 'react'

const SvgBusinessOutline = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="business-outline_svg__ionicon"
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
        d="M176 416v64M80 32h192a32 32 0 0132 32v412a4 4 0 01-4 4H48h0V64a32 32 0 0132-32zm240 160h112a32 32 0 0132 32v256h0-160 0V208a16 16 0 0116-16z"
      />
      <path d="M98.08 431.87a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm80 240a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm80 320a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zm0-80a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79z" />
      <ellipse
        cx={256}
        cy={176}
        rx={15.95}
        ry={16.03}
        transform="rotate(-45 255.99 175.996)"
      />
      <path d="M258.08 111.87a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79zM400 400a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm-64 160a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16zm0-80a16 16 0 1016 16 16 16 0 00-16-16z" />
    </svg>
  )
}

export default SvgBusinessOutline

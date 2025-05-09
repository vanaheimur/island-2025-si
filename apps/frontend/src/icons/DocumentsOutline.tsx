import type { SvgProps as SVGRProps } from '../types'

import * as React from 'react'

const SvgDocumentsOutline = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="documents-outline_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M336 264.13V436c0 24.3-19.05 44-42.95 44H107c-23.95 0-43-19.7-43-44V172a44.26 44.26 0 0144-44h94.12a24.55 24.55 0 0117.49 7.36l109.15 111a25.4 25.4 0 017.24 17.77z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M200 128v108a28.34 28.34 0 0028 28h108"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M176 128V76a44.26 44.26 0 0144-44h94a24.83 24.83 0 0117.61 7.36l109.15 111A25.09 25.09 0 01448 168v172c0 24.3-19.05 44-42.95 44H344"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M312 32v108a28.34 28.34 0 0028 28h108"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  )
}

export default SvgDocumentsOutline

import type { SvgProps as SVGRProps } from '../types'

import * as React from 'react'

const SvgShare = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="share_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M376 176H272v145a16 16 0 01-32 0V176H136a56.06 56.06 0 00-56 56v192a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V232a56.06 56.06 0 00-56-56zM272 86.63l52.69 52.68a16 16 0 0022.62-22.62l-80-80a16 16 0 00-22.62 0l-80 80a16 16 0 0022.62 22.62L240 86.63V176h32z" />
    </svg>
  )
}

export default SvgShare

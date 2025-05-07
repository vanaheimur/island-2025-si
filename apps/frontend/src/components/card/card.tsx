import SvgTimeOutline from '@/icons/TimeOutline'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Text } from '../ui/text'

type CardProps = {
  date?: string
  statusLabel?: string
  heading?: string
  headingImageUrl?: string
  headingImageAlt?: string
  progressText?: string
  buttonLabel?: string
  buttonLink?: string
  progressWidth?: string | number
}

export const Card = ({
  date = '08.05.2024',
  statusLabel = 'Framtal í vinnslu hjá þér',
  heading = 'Skattframtal skil 2025',
  headingImageUrl = 'https://images.ctfassets.net/8k0h54kbe6bj/5y5K2hSSYAk3hzs7ZARe2X/f661c7af2ea66bda32651e3f2986d697/merki-skatturinn.png',
  headingImageAlt = '',
  progressText = 'Þú hefur klárað 2 af 6 skrefum',
  buttonLabel = 'Opna framtal',
  buttonLink = '#',
  progressWidth = '33%',
}: CardProps) => {
  return (
    <div className="rounded-[8px] border-blue-200 border md:py-6 py-4 md:px-8 px-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Text variant="xs" className="flex items-center gap-2">
          <SvgTimeOutline className="size-6 text-blue-600" />
          {date}
        </Text>
        <Text
          variant="xs"
          className="rounded-[8px] bg-blue-100 px-4 py-2 text-blue-400 font-semibold"
        >
          {statusLabel}
        </Text>
      </div>
      <Text variant="h3" className="flex items-center gap-4">
        <Image
          width="34"
          height="34"
          src={headingImageUrl}
          alt={headingImageAlt}
        />
        {heading}
      </Text>
      <div className="flex gap-4 md:gap-20 w-full justify-between">
        <div className="w-full">
          <div className="h-4 rounded-[8px] bg-blue-100 w-full relative overflow-hidden">
            <div
              className="absolute h-full bg-blueberry-400"
              style={{ width: progressWidth }}
            ></div>
          </div>
          <Text variant="xs" className="text-blue-400 mt-2">
            {progressText}
          </Text>
        </div>
        <Button variant="outline" asChild>
          <Link href={buttonLink}>{buttonLabel}</Link>
        </Button>
      </div>
    </div>
  )
}

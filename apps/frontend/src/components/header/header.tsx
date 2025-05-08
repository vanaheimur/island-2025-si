import SvgChevronDown from '@/icons/ChevronDown'
import { Logo } from '../logo'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

import SvgDots from '@/icons/Dots'
import SvgMailOutline from '@/icons/MailOutline'
import SvgMenu from '@/icons/Menu'
import SvgNotificationsOutline from '@/icons/NotificationsOutline'
import SvgPerson from '@/icons/Person'
import SvgSearch from '@/icons/Search'
import Link from 'next/link'
import Text from '../ui/text'
import { Logout } from './logout'

const Header = ({
  type = 'default',
}: {
  type?: 'default' | 'application' | 'my-pages'
}) => {
  return (
    <header className="container py-8">
      <div className="h-12 flex items-center">
        <div className="max-lg:hidden">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="lg:hidden">
          <Link href="/">
            <Logo iconOnly />
          </Link>
        </div>
        {type === 'application' && (
          <div className="border-l border-dark-100 h-full md:pl-7 md:ml-7 pl-4 ml-4 flex justify-center flex-col">
            <Text variant="eyebrow" className="mb-1">
              Ríkisskattstjóri
            </Text>
            <Text>Skattframtal 2025</Text>
          </div>
        )}
        {type === 'default' && <Default />}
        {type === 'application' && <Application />}
        {type === 'my-pages' && <MyPages />}
      </div>
    </header>
  )
}

export default Header

const MyPages = () => {
  return (
    <div className="ml-auto flex gap-4">
      <Button variant="utility" className="max-md:hidden">
        <SvgMailOutline className="size-4 text-blue-400" />
      </Button>
      <Button variant="utility" className="max-md:hidden">
        <SvgNotificationsOutline className="size-4 text-blue-400" />
      </Button>
      <Logout>EN</Logout>
      <Button variant="utility" className="max-md:hidden">
        Yfirlit <SvgDots className="size-4 text-blue-400 " />
      </Button>
      <Button variant="utility" asChild>
        <Link href="/umsokn/framtal/upplysingasofnun">
          Gervimaður útlönd <SvgChevronDown className="size-4 text-blue-400 " />
        </Link>
      </Button>
    </div>
  )
}

const Application = () => {
  return (
    <div className="ml-auto flex gap-4">
      <Logout>EN</Logout>
      <button className="md:hidden rounded-full bg-blue-100 text-blue-400 font-semibold size-10 flex items-center justify-center">
        JJ
      </button>
      <Button variant="utility" className="max-md:hidden" asChild>
        <Link href="/minar-sidur/skattframtal">
          Gervimaður útlönd <SvgChevronDown className="size-4 text-blue-400" />
        </Link>
      </Button>
    </div>
  )
}

const Default = () => {
  return (
    <div className="ml-auto flex gap-4">
      <div className="relative">
        <Input
          placeholder="Leitaðu á Ísland.is"
          size="sm"
          className="max-md:hidden"
        />
        <SvgSearch className="size-4 fill-blue-400 absolute right-4 top-1/2 -translate-y-1/2" />
      </div>
      <Button variant="utility">
        <span className="max-sm:hidden">Mínar síður</span>
        <SvgPerson className="size-4 fill-blue-400" />
      </Button>
      <Button variant="utility" className="max-md:hidden">
        EN
      </Button>
      <Button variant="utility" className="md:hidden fill-blue-400">
        <SvgSearch />
      </Button>
      <Button variant="utility">
        Valmynd <SvgMenu className="size-4 text-blue-400" />
      </Button>
    </div>
  )
}

import { Logo } from '../logo'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

import SvgMenu from '@/icons/Menu'
import SvgPerson from '@/icons/Person'
import SvgSearch from '@/icons/Search'

const Header = () => {
  return (
    <header className="container py-8">
      <div className="h-12 flex items-center">
        <div className="max-lg:hidden">
          <Logo />
        </div>
        <div className="lg:hidden">
          <Logo iconOnly />
        </div>
        <div className="ml-auto flex gap-4">
          <Input placeholder="Leitaðu á Ísland.is" className="max-md:hidden" />
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
      </div>
    </header>
  )
}

export default Header

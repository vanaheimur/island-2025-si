import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import SvgOpenOutline from '@/icons/OpenOutline'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-5 lg:pl-0 md:pl-12 lg:w-7/9 mx-auto">
      <div className="mb-6 max-md:hidden flex items-center gap-2 text-blue-400 font-semibold">
        Ísland.is <div className="bg-blue-400 size-1"></div> Fjármál og skattar{' '}
        <div className="bg-blue-400 size-1"></div>
        Skattframtal einstaklinga
      </div>
      <Text variant="h1" as="h1">
        Skattframtal einstaklinga – upplýsingar og aðstoð
      </Text>
      <div className="flex items-center mb-20">
        <button className="flex items-center gap-2 text-xs font-semibold bg-gray-100 border border-gray-600 px-4 py-1">
          🔈 Hlusta
        </button>
        <button className="flex items-center text-xs font-semibold gap-2 border-l-0 bg-gray-100 border border-gray-600 px-4 py-1 text-green-600">
          ▶︎
        </button>
      </div>

      <CTA />

      <Text variant="h2" as="h2">
        Hvað er skattframtal?
      </Text>
      <Text variant="md">
        Skattframtal einstaklinga er árleg skýrsla til Skattsins þar sem fram
        koma upplýsingar um tekjur, eignir og skuldir fyrir ákveðið tekjuár. Með
        skattframtalinu er reiknuð endanleg álagning opinberra gjalda.
      </Text>

      <Text variant="h3" as="h3" className="mt-12">
        Hvenær skal skila skattframtali?
      </Text>
      <Text variant="md">
        Skilafrestur skattframtals einstaklinga er yfirleitt í mars eða byrjun
        apríl. Skatturinn birtir nákvæma dagsetningu ár hvert á skatturinn.is.
      </Text>

      <Text variant="h3" as="h3" className="mt-12">
        Hverjir þurfa að skila framtali?
      </Text>
      <Text variant="md">
        Allir einstaklingar 16 ára og eldri sem hafa haft tekjur, átt eignir eða
        staðið í rekstri skulu skila framtali. Börn undir 16 ára aldri þurfa
        ekki að skila nema með sérstökum undantekningum (t.d. í tilfelli arfs
        eða skattskyldra eigna).
      </Text>

      <Text variant="h3" as="h3" className="mt-12">
        Hvað þarf að skrá í framtalið?
      </Text>
      <Text variant="md">Þú skráir upplýsingar um:</Text>
      <ul className="space-y-4">
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">
            Tekjur: Laun, atvinnurekstur, lífeyrir, fjármagnstekjur o.fl.
          </Text>
        </li>
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">
            Eignir: Húsnæði, bifreiðar, bankainnistæður, verðbréf o.fl.
          </Text>
        </li>
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">
            Skuldir: Lán, yfirdráttarskuldir, kreditkortaskuldir o.fl.
          </Text>
        </li>
      </ul>
      <Text variant="md">
        Gögnum er safnað úr opinberum kerfum, en þú berð ábyrgð á að yfirfara og
        leiðrétta ef þurfa þykir.
      </Text>

      <Text variant="h3" as="h3" className="mt-12">
        Hvernig skrái ég mig inn?
      </Text>
      <Text variant="md">
        Þú skráir þig inn með rafrænni auðkenningu (t.d. rafrænum skilríkjum).
        Þegar inn er komið færðu aðgang að framtalinu þínu í gegnum kerfi sem er
        hýst á Ísland.is.
      </Text>

      <Text variant="h3" as="h3" className="mt-12">
        Hvað get ég gert í framtalinu mínu?
      </Text>
      <Text variant="md">Þú getur:</Text>
      <ul className="space-y-4">
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">Rýnt í útfyllt gögn</Text>
        </li>
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">Bætt við eða leiðrétt upplýsingar</Text>
        </li>
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">Vistað framtalið og haldið áfram síðar</Text>
        </li>
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">Skoðað eldri framtöl (ef þau eru aðgengileg)</Text>
        </li>
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">
            Sent framtalið inn til Skattsins þegar þú ert tilbúin/n
          </Text>
        </li>
      </ul>

      <Text variant="h3" as="h3" className="mt-12">
        Hvað gerist eftir innsendingu?
      </Text>
      <Text variant="md">
        Eftir að framtal hefur verið sent inn, tekur Skatturinn við því til
        skoðunar og reiknar út álagningu. Útborgun eða greiðsla fer síðan fram
        eftir álagningarskýrslu.
      </Text>

      <Text variant="h3" as="h3" className="mt-12">
        Öryggi og persónuvernd
      </Text>
      <Text variant="md">
        Skattframtal inniheldur viðkvæmar og persónugreinanlegar upplýsingar.
        Ísland.is notar örugga auðkenningu og dulkóðaðar sendingarleiðir til að
        vernda gögn þín.
      </Text>

      <CTA />

      <Text variant="h3" as="h3" className="mt-12">
        Nánari upplýsingar
      </Text>
      <ul className="space-y-4">
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">Framtal og álagning á Skatturinn.is</Text>
        </li>
        <li className="flex items-center">
          <span className="border-red-500 border-4 rounded-full size-1 mr-4 flex-shrink-0"></span>
          <Text variant="md">
            Ríkisskattstjóri – Leiðbeiningar RSK 0801 2024 (PDF)
          </Text>
        </li>
      </ul>

      <Text variant="h3" as="h3" className="mt-12">
        Vantar þig aðstoð?
      </Text>
      <Text variant="md">
        Hafðu samband við þjónustuver Skattsins ef þú þarft frekari upplýsingar
        um skattframtalið þitt eða hefur tæknilegar spurningar.
      </Text>

      <div className="flex items-center bg-purple-100 p-12 max-md:hidden my-20 lg:my-40 rounded-[8px] gap-6">
        <div className="max-lg:hidden">
          <Image
            width="100"
            height="100"
            src="https://images.ctfassets.net/8k0h54kbe6bj/5y5K2hSSYAk3hzs7ZARe2X/f661c7af2ea66bda32651e3f2986d697/merki-skatturinn.png"
            alt=""
          />
        </div>
        <div className="">
          <Text variant="eyebrow" className="text-purple-600">
            Þjónustuaðili
          </Text>
          <Text variant="h4" className="text-purple-600">
            Skatt­urinn
          </Text>
        </div>
      </div>
    </div>
  )
}

const CTA = () => (
  <div className="bg-blue-100 p-8 rounded-[8px] flex gap-4 md:items-center my-12 max-md:flex-col">
    <Text variant="h3" className="text-blue-600">
      Opna skattframtal
    </Text>
    <div className="md:ml-auto">
      <Button size="lg" asChild>
        <Link href="/umsokn/framtal/upplysingasofnun">
          Opna <SvgOpenOutline />
        </Link>
      </Button>
    </div>
  </div>
)

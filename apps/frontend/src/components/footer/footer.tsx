import Text from '../ui/text'

export const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-100 py-12">
        <div className="container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
            className="mb-10"
            style={{ color: 'rgb(255, 255, 255)' }}
            aria-label="island.is logo"
          >
            <path
              fill="url(#paint0_linear_footer_logo)"
              d="M8.22254 16.2332V39.0458C8.22254 39.5763 7.95729 39.8415 7.42681 39.8415H2.01518C1.48469 39.8415 1.21945 39.5763 1.21945 39.0458V16.2332C1.21945 15.7027 1.48469 15.4375 2.01518 15.4375H7.42681C7.95729 15.4375 8.22254 15.7027 8.22254 16.2332ZM20 30.558C17.3492 30.558 15.279 32.6299 15.279 35.279C15.279 37.9298 17.3509 40 20 40C22.6508 40 24.721 37.9281 24.721 35.279C24.721 32.6299 22.6508 30.558 20 30.558ZM35.279 30.558C32.6282 30.558 30.558 32.6299 30.558 35.279C30.558 37.9298 32.6299 40 35.279 40C37.9298 40 40 37.9281 40 35.279C40 32.6299 37.9281 30.558 35.279 30.558ZM20 15.279C17.3492 15.279 15.279 17.3509 15.279 20C15.279 22.6508 17.3509 24.721 20 24.721C22.6508 24.721 24.721 22.6491 24.721 20C24.721 17.3509 22.6508 15.279 20 15.279ZM35.279 15.279C32.6282 15.279 30.558 17.3509 30.558 20C30.558 22.6508 32.6299 24.721 35.279 24.721C37.9298 24.721 40 22.6491 40 20C40 17.3509 37.9281 15.279 35.279 15.279ZM20 0C17.3492 0 15.279 2.0719 15.279 4.72099C15.279 7.37176 17.3509 9.44199 20 9.44199C22.6508 9.44199 24.721 7.37009 24.721 4.72099C24.721 2.0719 22.6508 0 20 0ZM35.279 9.44199C37.9298 9.44199 40 7.37009 40 4.72099C40 2.07023 37.9281 0 35.279 0C32.6282 0 30.558 2.0719 30.558 4.72099C30.558 7.37176 32.6282 9.44199 35.279 9.44199ZM4.72099 0C2.0719 0 0 2.0719 0 4.72099C0 7.37176 2.0719 9.44199 4.72099 9.44199C7.37176 9.44199 9.44199 7.37009 9.44199 4.72099C9.44199 2.0719 7.37176 0 4.72099 0Z"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_footer_logo"
                x1="1.1276"
                y1="1.60629"
                x2="38.3941"
                y2="38.8728"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#0161FD"></stop>
                <stop offset="0.2457" stopColor="#3F46D2"></stop>
                <stop offset="0.5079" stopColor="#812EA4"></stop>
                <stop offset="0.7726" stopColor="#C21578"></stop>
                <stop offset="1" stopColor="#FD0050"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <ul>
                <Text variant="intro" as="li" className="text-blue-600 mb-4">
                  <a href="/s/stafraent-island">Staf­rænt Ísland</a>
                </Text>
                <Text variant="intro" as="li" className="text-blue-600 mb-8">
                  <a href="/s">Opin­berir aðilar</a>
                </Text>
                <Text variant="eyebrow" as="li" className="mb-8">
                  <button className="text-blue-400 flex items-center border-b-blue-400 border-b">
                    Getum við aðstoðað?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                      viewBox="0 0 512 512"
                      data-testid="icon-arrowForward"
                      fill="currentColor"
                      color="currentColor"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M268 112l144 144-144 144m124-144H100"
                      />
                    </svg>
                  </button>
                </Text>
                <li>
                  <Text className="text-blue-600 flex gap-2 items-center">
                    <svg
                      className="information-circle-outline_svg__ionicon"
                      viewBox="0 0 512 512"
                      data-testid="icon-informationCircle"
                      fill="#0061ff"
                      color="#0061ff"
                      width="16px"
                      height="16px"
                    >
                      <path
                        d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M220 220h32v116"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                        d="M208 340h88"
                      />
                      <path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"></path>
                    </svg>
                    <a href="/s/stafraent-island/personuverndarstefna-island-is">
                      Persónuverndarstefna IS
                    </a>
                  </Text>
                </li>
                <li>
                  <Text className="text-blue-600 flex gap-2 items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="document-outline_svg__ionicon"
                      viewBox="0 0 512 512"
                      data-testid="icon-document"
                      fill="#0061ff"
                      color="#0061ff"
                      width="16px"
                      height="16px"
                    >
                      <path
                        d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                      <path
                        d="M256 56v120a32 32 0 0032 32h120"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                      />
                    </svg>
                    <a href="/skilmalar-island-is">Notendaskilmálar</a>
                  </Text>
                </li>
                <li>
                  <Text className="text-blue-600 flex gap-2 items-center mt-2">
                    <svg
                      className="filter_svg__ionicon"
                      viewBox="0 0 16 16"
                      data-testid="icon-globe"
                      fill="#0061ff"
                      color="#0061ff"
                      width="16px"
                      height="16px"
                    >
                      <path d="M7.992.5C3.853.5.5 3.86.5 8c0 4.14 3.353 7.5 7.492 7.5 4.148 0 7.508-3.36 7.508-7.5 0-4.14-3.36-7.5-7.508-7.5zM13.19 5h-2.213a11.737 11.737 0 00-1.034-2.67A6.022 6.022 0 0113.19 5zM8 2.03c.623.9 1.11 1.898 1.432 2.97H6.567C6.89 3.928 7.377 2.93 8 2.03zM2.195 9.5A6.181 6.181 0 012 8c0-.518.075-1.02.195-1.5H4.73c-.06.495-.105.99-.105 1.5s.045 1.005.105 1.5H2.195zM2.81 11h2.212c.24.938.585 1.838 1.035 2.67A5.99 5.99 0 012.81 11zm2.212-6H2.81a5.99 5.99 0 013.248-2.67c-.45.833-.795 1.732-1.035 2.67zM8 13.97c-.622-.9-1.11-1.898-1.433-2.97h2.865A10.565 10.565 0 018 13.97zM9.755 9.5h-3.51c-.067-.495-.12-.99-.12-1.5s.053-1.013.12-1.5h3.51c.067.487.12.99.12 1.5s-.053 1.005-.12 1.5zm.188 4.17c.45-.832.795-1.732 1.034-2.67h2.213a6.022 6.022 0 01-3.247 2.67zM11.27 9.5c.06-.495.105-.99.105-1.5s-.045-1.005-.105-1.5h2.535c.12.48.195.982.195 1.5s-.075 1.02-.195 1.5H11.27z"></path>
                    </svg>
                    <a href="/en">English</a>
                  </Text>
                </li>
                <li>
                  <Text className="text-blue-600 flex gap-2 items-center mt-2">
                    <svg
                      className="facebook_svg__ionicon"
                      viewBox="0 0 512 512"
                      data-testid="icon-facebook"
                      fill="#0061ff"
                      color="#0061ff"
                      width="16px"
                      height="16px"
                    >
                      <path
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                        fillRule="evenodd"
                      />
                    </svg>
                    <a href="https://www.facebook.com/islandid">Facebook</a>
                  </Text>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-9 md:border-l md:border-blue-200 md:pl-5">
              <Text variant="eyebrow" className="text-blue-400 mb-6">
                Þjónustuflokkar
              </Text>
              <Text
                as="ul"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 text-blue-600"
              >
                <li>
                  <a href="/flokkur/akstur-og-bifreidar">Akstur og bifreiðar</a>
                </li>
                <li>
                  <a href="/flokkur/atvinnurekstur-og-sjalfstaett-starfandi">
                    Atvinnurekstur og sjálfstætt starfandi
                  </a>
                </li>
                <li>
                  <a href="/flokkur/domstolar-og-rettarfar">
                    Dómstólar og réttarfar
                  </a>
                </li>
                <li>
                  <a href="/flokkur/fjarmal-og-skattar">Fjármál og skattar</a>
                </li>
                <li>
                  <a href="/flokkur/fjolskylda-og-velferd">
                    Fjölskylda og velferð
                  </a>
                </li>
                <li>
                  <a href="/flokkur/heilbrigdismal">Heilbrigðismál</a>
                </li>
                <li>
                  <a href="/flokkur/husnaedismal">Húsnæðismál</a>
                </li>
                <li>
                  <a href="/flokkur/idnadur">Iðnaður</a>
                </li>
                <li>
                  <a href="/flokkur/innflytjendamal">Innflytjendamál</a>
                </li>
                <li>
                  <a href="/flokkur/launthegi-rettindi-og-lifeyrir">
                    Launþegi, réttindi og lífeyrir
                  </a>
                </li>
                <li>
                  <a href="/flokkur/malefni-fatlads-folks">
                    Málefni fatlaðs fólks
                  </a>
                </li>
                <li>
                  <a href="/flokkur/menntun">Menntun</a>
                </li>
                <li>
                  <a href="/flokkur/neytendamal">Neytendamál</a>
                </li>
                <li>
                  <a href="/flokkur/samfelag-og-rettindi">
                    Samfélag og réttindi
                  </a>
                </li>
                <li>
                  <a href="/flokkur/samgongur">Samgöngur</a>
                </li>
                <li>
                  <a href="/flokkur/umhverfismal">Umhverfismál</a>
                </li>
                <li>
                  <a href="/flokkur/vegabref-ferdalog-og-buseta-erlendis">
                    Vegabréf, ferðalög og búseta erlendis
                  </a>
                </li>
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 container">
        <Text variant="eyebrow" className="text-blue-400 mb-4">
          Aðrir opinberir vefir
        </Text>
        <Text
          variant="xs"
          as="div"
          className="flex flex-wrap gap-4 md:gap-8 text-blue-600"
        >
          <a href="/samradsgatt">Samráðsgátt</a>
          <a href="/undirskriftalistar">Undirskriftalistar</a>
          <a
            href="http://www.opnirreikningar.is/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Opnir reikningar ríkisins
          </a>
          <a
            href="https://tekjusagan.is/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tekjusagan
          </a>
          <a
            href="https://rikisreikningur.is/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ríkisreikningur
          </a>
        </Text>
      </div>
    </footer>
  )
}

import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'

import gray_bag from '../assets/gray_bag.svg'
import logoImg from '../assets/logo.svg'
import { Container, Header } from '@/styles/pages/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <div className="icon_container">
          <Image src={gray_bag} alt="" />
        </div>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

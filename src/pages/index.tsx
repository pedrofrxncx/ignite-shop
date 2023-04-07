import Stripe from 'stripe'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { HomeContainer, Product, ProductsContainer } from "@/styles/pages/home"
import 'keen-slider/keen-slider.min.css'

import { stripe } from '@/lib/stripe'
import bag from '@/assets/bag.png'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const gap = 48
  let origin = 0.5
  if (typeof window !== 'undefined') {
    const viewPortWidth = window.visualViewport!.width
    const paddingLeft = (viewPortWidth - 1180) / 2
    origin = (paddingLeft + gap) / viewPortWidth
  }

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: gap,
      origin,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Head>
        <title>
          Home - Ignite Shop
        </title>
      </Head>

      <ProductsContainer>
        {
          products.map(product => {
            return (
              <Product
                prefetch={false}
                href={`product/${product.id}`}
                key={product.id}
                className="keen-slider__slide"
              >
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt="Camisa"
                />

                <footer>
                  <div className="text_container">
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <div className="icon_container">
                    <Image width={32} height={32} src={bag} alt="" />
                  </div>
                </footer>
              </Product>
            )
          })
        }
      </ProductsContainer>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
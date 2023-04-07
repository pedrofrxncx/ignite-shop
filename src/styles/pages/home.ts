import { styled } from "..";
import Link from "next/link";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  minHeight: 656,
  // marginLeft: 'auto'
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  // marginLeft: 'calc((100vw - 1100px) / 2)',
  maxWidth: 1180
})

export const Product = styled(Link, {
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    inset: '0.25rem',
    top: 'auto',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    '.text_container': {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,

      strong: {
        fontSize: '$lg',
        color: '$gray100'
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300'
      }
    },

    '.icon_container': {
      width: 56,
      height: 56,
      backgroundColor: '$green500',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      borderRadius: 6,
      cursor: 'pointer'
    }
  },


  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})
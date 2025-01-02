import React from 'react'

import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import { Container } from './layoutStyle'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
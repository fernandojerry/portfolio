import React from 'react'
import Header from '../Components/Header'
import Routers from '../Routers/Routers'
import Helmet from '../Components/Helmet'



const Layout = () => {
  return (
    <Helmet title={'portfolio'}>
      <Header />
      <Routers />
    </Helmet>
  )
}

export default Layout

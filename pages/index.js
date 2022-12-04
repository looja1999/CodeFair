import Head from 'next/head'
import Image from 'next/image'
import Header from "../shared/layout-components/header/header"
import SideBar from '../shared/layout-components/sidebar/sidebar'
import TabToTop from '../shared/layout-components/tab-to-top/tab-to-top'
import Footer from '../shared/layout-components/footer/footer'
import Seo from '../shared/layout-components/seo/seo'
import Dashboard from '../components/dashboard'; 

export default function Home() {
  return (
    <div >
      <Seo title={"index"}/>
      <Dashboard />
    </div>
  )
}


Home.layout = "Contentlayout"
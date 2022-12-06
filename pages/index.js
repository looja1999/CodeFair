import LandingPage from '../components/LandingPage/LandingPage'
import Seo from '../shared/layout-components/seo/seo'

export default function Home() {
  return (
    <div >
      <Seo title={"Home"}/>
      <LandingPage />
    </div>
  )
}


import '../styles/globals.scss'
import Contentlayout from '../shared/layout-components/layout/content-layout'
import Authenticationlayout from '../shared/layout-components/layout/authentication-layout'



const layouts = {
  Contentlayout: Contentlayout,
  Authenticationlayout: Authenticationlayout,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((pageProps) => <Component>{pageProps}</Component>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

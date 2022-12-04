import React from 'react'
import Seo from '../shared/layout-components/seo/seo'
import PageHeader from '../shared/layout-components/page-header/page-header'; 

const dashboard = () => {
  return (
    <>
      <Seo title={"Dashboard"}/>
      <div className='main-content'>
        <PageHeader title="Welcome To Dashboard" item="Home" active_item="Project Dashboard"/>
      </div>
    </>
  )
}

dashboard.layout = "Contentlayout"
export default dashboard
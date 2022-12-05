import React from 'react'
import Seo from '../../shared/layout-components/seo/seo'
import PageHeader from '../../shared/layout-components/page-header/page-header'; 
import { Breadcrumb, Card, Col, Row, Button, Table, Dropdown, Pagination } from "react-bootstrap";
import {useState} from 'react'; 
import Link from 'next'; 



const ProjectList = () => {

	

  return (
    <>
      <Seo title = {"Projects List"}/>
      
      <div className='main-content'>
        <PageHeader title="List of all the projects" item="Home" active_item="Project Dashboard"/>
        <Row className='row-sm'>
          <Col sm={12} md={12} xl={12} lg={12} className="grid-margin">
            <Card className="custom-card">
              <Card.Header>
                <label className="main-content-label mb-0 pt-1">Project Table</label>
                  <p className="tx-12 tx-gray-500 mt-0 mb-2">
                    Example of Spruha Simple Table. 
                  </p>
              </Card.Header>

              <Card.Body>
                <div className='table-responsive border userlist-table'>
                  <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th className="wd-lg-20p">
                          <span>Project Id</span>
                        </th>
                        <th className="wd-lg-20p">
                          <span>Project Name</span>
                        </th>

                        <th className="wd-lg-20p">
                          <span>Created</span>
                        </th>
                        <th className="wd-lg-20p">
                          <span>Status</span>
                        </th>
                        
                        <th className="wd-lg-20p">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          Sharing Language Artefacts
                        </td>
                        <td>
                          Cat Kutay
                        </td>
                        <td>
                          Active
                        </td>
                        <td>
                          Approved
                        </td>
                      </tr>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          Sharing Language Artefacts
                        </td>
                        <td>
                          Cat Kutay
                        </td>
                        <td>
                          Active
                        </td>
                        <td>
                          Approved
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

    </>
  )
}

ProjectList.layout = "Contentlayout"

export default ProjectList
import React from 'react'
import Layout from '../page/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="row " style={{backgroundColor:"skyblue"}} >
          <div className="col-md-3  ">
            <h1>C</h1>
          </div>
          <div className="col-md-3" >
            <h1>R</h1>
          </div>

          <div className="col-md-3" >
            <h1>U</h1>
          </div>
          <div className="col-md-3" >
            <h1>D</h1>
          </div>
          <h1>OPRATION</h1>
        </div>
      </div>
    </Layout>
  )
}

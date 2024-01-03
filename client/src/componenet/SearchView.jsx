import React from 'react'
import { useSearch } from './hook/search'
import Layout from '../page/Layout'

export default function SearchView() {
    const [value,setValue] = useSearch()
    return (
      <Layout>
          <div className='container'>
           <h3>search result</h3>
           <h6>
              {
                  value?.result.length<1 ? "no user found" : `found ${value?.result.length}`
              }
           </h6>
           <div className='d-flex flex-wrap mt-4 '>
  
              {
                value.result.map((p) => (
                  <div className='col-md-4 mb-2 '>
                    <div className="card" style={{ width: '18rem'}} key={p._id}>
                      <img src={`http://localhost:1899/app/v1/photo/${p._id}`} className="card-img-top" alt="..."
                        width={"100px"}
                        height={"300px"} />
                      <div className="card-body">
                        <h5 className="card-title">Name: {p.name}</h5>
                        <p className="card-text">Lastname: {p.lastname}</p>
                        <p className="card-text">E-mail: {p.email}</p>
                        <p className="card-text">Phone: {p.phone}</p>
                        <p className="card-text">Address: {p.address}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      </Layout>
    )
}

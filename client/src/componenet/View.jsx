import React, { useEffect, useState } from 'react'
import Layout from '../page/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function View() {
    const {id} = useParams()
    console.log(id)
    const [view,setView] = useState({})

   async function getdetail(){
    
        const {data} = await axios.get(`http://localhost:1899/app/v1/single/${id}`)
        console.log(data)
         setView(data?.user)
         console.log(data?.user)
    }

    useEffect(()=>{
        getdetail()
    },[])

    
  return (
    <Layout>
    <div className='container' >
     <h3>View result</h3>
     <div className='d-flex justify-content-center flex-wrap mt-4 '>
        
            <div className='col-md-4 mb-2 '>
              <div className="card" style={{ width: '18rem'}}>
                <img src={`http://localhost:1899/app/v1/photo/${view._id}`} className="card-img-top" alt="..."
                  width={"100px"}
                  height={"300px"} />
                <div className="card-body">
                  <h5 className="card-title">Name: {view.name}</h5>
                  <p className="card-text"><b>Lastname: </b>{view.lastname}</p>
                  <p className="card-text"><b>E-mail:</b> {view.email}</p>
                  <p className="card-text"><b>Phone:</b> {view.phone}</p>
                  <p className="card-text"><b>Address: </b>{view.address}</p>
                </div>
              </div>
            </div>
      </div>
    </div>
</Layout>
  )
}

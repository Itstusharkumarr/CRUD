import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearch } from './hook/search'
import axios from 'axios'

export default function Search() {
  const [value,setValue] = useSearch()
  const navigate = useNavigate()

 async function handlesearch(e){
    e.preventDefault()
    try {
      const {data} = await axios.get(`http://localhost:1899/app/v1/search/${value.keyboard}`)
      setValue({...value,result:data.result})
      console.log(data)
      navigate('/search')

    } catch (error) {
        console.log(error)
    }
  }
    return (
        <div>
            <form className="d-flex" role="search" onSubmit={handlesearch}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                value={value.keyboard} onChange={(e)=>setValue({...value,keyboard:e.target.value})} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>
    )
}

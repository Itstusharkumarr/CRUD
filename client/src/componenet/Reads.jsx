import React, { useEffect, useState } from 'react'
import Layout from '../page/Layout'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Pagination from 'react-bootstrap/Pagination'
import Spinner from 'react-bootstrap/Spinner'

export default function Reads() {
    const [data, setData] = useState([])
    const [pagedata, setPagedata] = useState([])
    const [page, setPage] = useState(1)
    const [pagecount, setPagecount] = useState(0)
   
    const getdata = async () => {
        const { data } = await axios.get(`http://localhost:1899/app/v1/read`)
        setData(data.user)
        console.log(data.user)
    }

    // handle next
    const handlenext = () => {
        if (page === pagecount) {
            return page
        }
        setPage(page + 1)
    }

    // handle prev
    const handleprev = () => {
        if (page === 1) {
            return page
        }
        setPage(page - 1)
    }

    useEffect(() => {
        getdata()
    }, [page])

    useEffect(() => {
        const pagedatacount = Math.ceil(data.length / 5);
        setPagecount(pagedatacount)

        if (page) {
            const limit = 5
            const skip = limit * page
            const dataskip = data.slice(page === 1 ? 0 : skip-limit, skip)
            setPagedata(dataskip)
        }
    }, [data])

    function localstorage(name, lastname, email, phone, address, id) {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("lastname", lastname)
        localStorage.setItem("email", email)
        localStorage.setItem("phone", phone)
        localStorage.setItem("address", address)
    }

    async function handledelete(_id) {
        try {
            const { data } = await axios.delete(`http://localhost:1899/app/v1/delete/${_id}`)
            if (data.success) {
                toast.success(data.message, { autoClose: 1000 })
                getdata()
            }
        } catch (error) {
            toast.error("something went wrong", { autoClose: 1000 })
        }
    }


    return (
        <Layout>
            <h1>User Information</h1>
            <div className='container overflow-x:auto'>
                <table className="table table-striped table-hover shadow p-3 mb-5 bg-body rounded">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                            <th>phone</th>
                            <th>Address</th>
                            <th>Image</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pagedata.length > 0 ?
                                pagedata.map((p, i) => {
                                    const { name, lastname, phone, email, address, _id } = p
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{i + 1}</th>
                                                <td>{name}</td>
                                                <td>{lastname}</td>
                                                <td>{email}</td>
                                                <td>{phone}</td>
                                                <td>{address}</td>
                                                <td>
                                                    <img src={`http://localhost:1899/app/v1/photo/${_id}`}
                                                        className="card-img-top object-fit-contain" alt="..."
                                                        width={"100px"}
                                                        height={"50px"} />
                                                </td>
                                                <td>
                                                    <Link to={`/view/${_id}`} type="button" class="btn btn-outline-primary">View</Link>
                                                </td>
                                                <td>
                                                    <Link to={`/update/${_id}`} type="button" class="btn btn-outline-info" onClick={() => { localstorage(name, lastname, email, phone, address, _id) }} >Edit</Link>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-danger" onClick={() => window.confirm("are you sure to delete") && handledelete(p._id)}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                }) : <div className='d-flex justify-content-center mt-4'>
                                   Loading... <Spinner animation='border' variant='danger'/>
                                </div>
                        }
                    </tbody>
                </table>
            </div>

            <div className='d-flex justify-content-center'>
                <Pagination>
                    <Pagination.Prev onClick={handleprev} disabled={page === 1} />
                    {
                        Array(pagecount).fill(null).map((e, i) => {
                            return (
                                <>
                                    <Pagination.Item active={page === i + 1 ? true : false} onClick={() => { setPage(i + 1) }}>{i + 1}</Pagination.Item>
                                </>
                            )

                        })
                    }
                    <Pagination.Next onClick={handlenext} disabled={page === pagecount} />
                </Pagination>
            </div>
        </Layout>
    )
}

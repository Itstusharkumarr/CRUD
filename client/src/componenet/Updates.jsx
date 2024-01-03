import React, { useEffect, useState } from 'react'
import Layout from '../page/Layout'
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export default function Updates() {
    const { _id } = useParams()
    const [id, setId] = useState()
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, SetAddress] = useState("")
    const [photo, setPhoto] = useState("")
    const navigate = useNavigate()

    const handleupdate = async (e) => {
        e.preventDefault()
        try {
            const user = new FormData()
            user.append("name", name)
            user.append("lastname", lastname)
            user.append("email", email)
            user.append("phone", phone)
            user.append("address", address)
            user.append("photo", photo)

            const { data } = await axios.put(`http://localhost:1899/app/v1/update/${id}`, user)
            console.log(data)

            if (data?.success) {
                setName("")
                setLastname("")
                setEmail("")
                setPhone("")
                SetAddress("")
                setPhoto("")
                toast.success(data?.message, { autoClose: 1000 })
                setTimeout(() => {
                    navigate('/read')
                }, 2000)
            }

        } catch (error) {
            toast.error('something went wrong', { autoClose: 1000 })
        }

    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setLastname(localStorage.getItem('lastname'))
        setEmail(localStorage.getItem('email'))
        setPhone(localStorage.getItem('phone'))
        SetAddress(localStorage.getItem('address'))
    }, [])
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 shadow p-3 mb-5 bg-body rounded mt-3">
                        <h2>Update Your Infomation</h2>
                        <Form onSubmit={handleupdate}>
                            <FormGroup className='mt-4'>
                                <Input type="file" name="file" accept='image/*' onChange={(e) => { setPhoto(e.target.files[0]) }} />
                                <FormText color="muted">
                                    Please upload image 'Size 1MB'
                                </FormText>
                            </FormGroup>

                            <div className='ps-5 mb-3'>
                                {
                                    photo ? (<img src={URL.createObjectURL(photo)}
                                        alt='product-photo' height={"200px"} width={"300px"} className='img img-responsive' />
                                    ) : (<img src={`http://localhost:1899/app/v1/photo/${id}`}
                                        alt='product-photo' height={"200px"} width={"300px"} className='img img-responsive' />)
                                }

                            </div>

                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter your last name"
                                    value={lastname}
                                    onChange={(e) => { setLastname(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }} />
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type="text"
                                    name="address"
                                    placeholder="Enter your Address"
                                    value={address}
                                    onChange={(e) => { SetAddress(e.target.value) }} />
                            </FormGroup>

                            <Button color='primary'>Update</Button>
                        </Form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </Layout>
    )
}

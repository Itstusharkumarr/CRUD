import React, { useState } from 'react'
import Layout from '../page/Layout'
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function Register() {
    const [name, setName] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, SetAddress] = useState()
    const [photo, setPhoto] = useState()
    const navigate = useNavigate()

    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const user = new FormData()
            user.append("name", name)
            user.append("lastname", lastname)
            user.append("email", email)
            user.append("phone", phone)
            user.append("address", address)
            user.append("photo", photo)
            if (!photo) {
                toast.error("image is required", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            }
            if (!name) {
                toast.error("name is required", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            }
            if (!lastname) {
                toast.error("Lastname is required", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            }
            if (!email) {
                toast.error("email is required", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            }

            if (!phone ) {
                toast.error("phone is required", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            }

            if (!address) {
                toast.error("address is required", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 })
            } else {
                const {data} = await axios.post(`http://localhost:1899/app/v1/create`, user)

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
            }

        } catch (error) {
            console.log(error)
            toast.error("something went wrong...!", { autoClose: 1000 })
        }

    }

    return (

        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 shadow p-3 mb-5 bg-body rounded mt-3">
                        <h2>Fill Your Infomation</h2>
                        <Form onSubmit={handlesubmit}>
                            <FormGroup className='mt-4'>
                                <Input type="file" name="file" accept='image/*' onChange={(e) => { setPhoto(e.target.files[0]) }} />
                                <FormText color="muted">
                                    Please upload image 'Size 1MB'
                                </FormText>
                            </FormGroup>
                            <div>
                                <div className='ps-5 mb-3'>
                                    {
                                        photo && (<img src={URL.createObjectURL(photo)}
                                            alt='product-photo' height={"200px"} width={"300px"} className='img img-responsive' />)
                                    }
                                </div>
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
                                    type="email"
                                    name="email"
                                    placeholder="Enter your E-mail"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="phone"
                                    placeholder="Enter your Mobile"
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

                            <Button color='success'>Submit</Button>
                        </Form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>

        </Layout>
    )
}

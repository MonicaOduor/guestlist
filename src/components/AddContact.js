import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

function AddContact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const contacts = useSelector((state) => state)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !number || !name){
            return toast.warning("Please fill in all fields")
        }

        const checkEmail = contacts.find(contact => contact.email === email && email)

        if (checkEmail){
            return toast.error("Email already exists!")
        }

        const checkNumber = contacts.find(contact => contact.number ===  parseInt(number))

        if (checkNumber){
            return toast.error("Phone Number already exists!")
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }
        dispatch({type: 'ADD_CONTACT', payload:data});
        toast.success('Contact added successfully');
        navigate('/')


    }
  return (
    <div className='container'>
        <div className='row'>
            <h1 className='display-3 text-center my-2'>
                Add Contact
            </h1>
            <div className='col-md-6 shadow mx-auto p-5'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Name'
                            className='form-control'
                            value={name}
                            onChange={(e => setName(e.target.value))}/>
                        <br/>
                    </div>

                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='Email'
                            className='form-control'
                            value={email}
                            onChange={(e => setEmail(e.target.value))}/>
                        <br/>
                    </div>

                    <div className='form-group'>
                        <input
                            type='number'
                            placeholder='Phone Number'
                            className='form-control'
                            value={number}
                            onChange={(e => setNumber(e.target.value))}/>
                        <br/>
                    </div>

                    <div className='form-group'>
                        <input type='submit' value='Add Contact' className='btn btn-block btn-dark'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddContact
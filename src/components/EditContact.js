import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

function EditContact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const {id} = useParams();

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect( () => {
        if (currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !number || !name){
            return toast.warning("Please fill in all fields")
        }

        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email && email)

        if (checkEmail){
            return toast.error("Email already exists!")
        }

        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number ===  parseInt(number))
        console.log(checkNumber);

        if (checkNumber){
            return toast.error("Phone Number already exists!")
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }
        dispatch({type: 'UPDATE_CONTACT', payload:data});
        toast.success('Contact updated successfully');
        navigate('/')


    }



  return (
    <div className='container'>
        {currentContact ? (
            <>

        <div className='row'>
            <h1 className='display-3 text-center my-2'>
                Edit Contact {id}
            </h1>
            <div className='col-md-6  shadow mx-auto p-5'>
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
                        <input type='submit' value='Update Contact' className='btn btn-dark '/>
                        &nbsp;&nbsp;&nbsp;
                        <Link to='/' className='btn btn-danger'>Cancel</Link>

                    </div>
                </form>
            </div>
        </div>
        </>
        ) : (
            <h1 className='display-3 my-3 text-center'>Contact with id {id} does not exist</h1>
            )}
    </div>
  )
}

export default EditContact
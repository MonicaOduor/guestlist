import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';

function Home() {
    const contacts = useSelector(state => state)

    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({type:'DELETE_CONTACT', payload: id})
        toast.success("Contact deleted succesfully");
    }

  return (
    <div className='container'>
        <div className='text-end mr-4'>
                <Link to='/add' className='btn btn-dark rounded-0'>
                    Add Contact
                </Link>
        </div>
        <br/>
        <div className='row'>
            <div className='col-md-9 col-lg-12 mx-auto'>
                <table className='table table-hover'>
                    <thead className='text-white bg-dark text-center'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Number</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.number}</td>
                                    <td>
                                        <Link to = {`/edit/${contact.id}`} className='btn btn-small btn-outline rounded-0 border-dark '>Edit</Link>&nbsp;&nbsp;
                                        <button type='button'onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger rounded-0'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Home
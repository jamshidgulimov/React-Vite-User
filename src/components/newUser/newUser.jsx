import React, { useState } from 'react'
import './newUser.css'
import { v4 as uuidv4 } from 'uuid'

const NewUser = ({addUser}) => {

    const [newUser, setNewUser] = useState({
             id: uuidv4(),
            name: "",
            title: "",
            url: "",
            age: '',
            gender: ''
           
          
    })
    const handlUser = (e) =>{
        e.preventDefault()
        addUser(newUser);
    }

  return (
    <div className='modal-wrapper'>
        <div className="overlay">
            <div className="modal">
                <h2>New User</h2>
                <form onSubmit={handlUser}>
                    <label>
                        <span>Image URL</span>
                        <input onChange={(e) =>{setNewUser((prev) =>{
                            return {...prev, url: e.target.value}
                        })}} type="url" required/>
                    </label>
                    <label>
                        <span>Name</span>
                        <input onChange={(e) =>{setNewUser((prev) =>{
                            return {...prev, name: e.target.value}
                        })}} type="text" required/>
                    </label>
                     <label>
                        <span>Title</span>
                        <input onChange={(e) =>{setNewUser((prev) =>{
                            return {...prev, title: e.target.value}
                        })}} type="text" required/>
                    </label>
                    <label>
                        <span>Age</span>
                        <input onChange={(e) =>{setNewUser((prev) =>{
                            return {...prev, age: e.target.value}
                        })}} type="number" required />
                    </label>
                    <div className="gender">
                        <span>Gender: </span>
                        <label>
                            <small>Male</small>
                            <input onChange={(e) =>{setNewUser((prev) =>{
                            return {...prev, gender: e.target.value}
                        })}} type="radio" name='gender' value="Male" required/>
                        </label>
                        <label>
                            <small>Female</small>
                            <input onChange={(e) =>{setNewUser((prev) =>{
                            return {...prev, gender: e.target.value}
                        })}} type="radio" name='gender' value="Female" required/>
                        </label>
                    </div>

                    <button className='modal-btn'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default NewUser

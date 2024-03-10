import React from 'react'
import './users.css'

const UsersList = ({users, deleteUser}) => {
  return (
    <div className='userList'>
      <div className="userList-container container">
        {users.map((user) =>{
            return (
                <div className="card" key={user.id}>
                    <div className="card-inner">
                        <img src={user.url} alt={user.name} />
                    <h1>{user.name}</h1>
                    <h2>{user.title}/</h2>
                    <h2>{user.age}</h2>
                    <h3>{user.gender}</h3>

                    <button onClick={() =>deleteUser(user.id)}>Delete</button>

                    </div>
                </div>
            )
        })}

        </div>
      </div>
      
    
  )
}

export default UsersList

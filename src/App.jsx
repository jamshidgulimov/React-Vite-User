
import './App.css'
import { useState } from 'react'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import UsersList from './components/users/users'
import NewUser from './components/newUser/newUser'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([
    {
      "name": "Azamat",
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?size=626&ext=jpg&ga=GA1.1.1292351815.1709596800&semt=ais",
      "age": 26,
      "gender": 'male'

    },
    {
      "name": "Baxtiyor",
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg",
      "age": 26,
      "gender": 'male'
    },
    {
      "name": "Anvar",
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://avatars.mds.yandex.net/i?id=c89ac0b7001de56a9360bbb1bd7f048894b7ab15-4381247-images-thumbs&n=13",
      "age": 26,
      "gender": 'male'
    },
    {
      "name": "Axror",
      "id": 4,
      "title": "beatae officiis ut aut",
      "url": "https://klike.net/uploads/posts/2022-09/1662533191_g-1.jpg",
      "age": 26,
      "gender": 'male'
    },
    {
      "name": "Sardor",
      "id": 5,
      "title": "facere non quis fuga fugit vitae",
      "url": "https://avatars.mds.yandex.net/i?id=28d2b475fc40e6c5a7ea00ade204dbdb1d06e638-10836596-images-thumbs&n=13",
      "age": 26,
      "gender": 'male'
    }
  ])
const closeModal = (e) =>{
  if(e.target.className === "overlay") setShowModal(false)
  if(e.key === "Escape") setShowModal(false)
  
}

const addUser = (user) =>{
  setUsers((prev) =>{
    return [...prev, user]
  })
  setShowModal(false)

}

const deleteUser = (id) =>{
setUsers((prev) =>{
  return prev.filter((user) =>{
    return user.id !== id
  })
})
} 

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar userLength={users.length} />

<main>
  <div className="no-users">
  {users.length === 0 && <h1>No User</h1>}
  </div>

  <UsersList users={users} deleteUser={deleteUser}/>

</main>
{showModal && <NewUser addUser={addUser}/>}
<button onClick={() => setShowModal(true)} className='create-user'>Create User</button>

    <Footer/>
    </div>
  )
}

export default App

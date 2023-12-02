import React, { useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book,setBook] = useState ({
    title:"",
    desc:"",
    price:null,
    cover:"",
  });

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

  console.log(location.pathname.split("/")[2])

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/books/"+ bookId, book)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  console.log(book)
  return (
    <div className='form'>
      <h1>Atualizar Livro</h1>
      <input type="text" placeholder='Título' onChange={handleChange} name="title"/>
      <input type="text" placeholder='Descrição' onChange={handleChange} name="desc"/>
      <input type="number" placeholder='Valor' onChange={handleChange} name="price"/>
      <input type="text" placeholder='img' onChange={handleChange} name="cover"/>
      <button className="formButton" onClick={handleClick}>Atualizar Livro</button>
    </div>
  )
}

export default Update;
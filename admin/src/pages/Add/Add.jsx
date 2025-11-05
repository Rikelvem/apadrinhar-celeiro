import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    idade: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("idade", Number(data.idade))
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        idade: ""
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Envie a foto da criança</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='add-image-upload' />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Nome da criança</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Nome aqui' />
        </div>
        <div className="add-product-description flex-col">
          <p>Presente desejado</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Escreva o que ela quer ganhar aqui'></textarea>
        </div>
        <div className="add-idade flex-col">
          <p>Idade da criança</p>
          <input onChange={onChangeHandler} value={data.idade} type="Number" name='idade' placeholder='X anos' />
        </div>
        <button type='submit' className='add-btn'>Adicionar! :)</button>
      </form>
    </div>
  )
}

export default Add

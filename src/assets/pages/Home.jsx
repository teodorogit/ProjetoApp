import React from 'react'
import '../../App.css'
import inovation from '../../assets/inovation.svg';
import unicv_logo from '../../assets/unicv-logo-site.png';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <img src={inovation} alt=""  className='logo'/>
    <form className='formulario'>
      <h2>Login</h2>
      <label htmlFor="Ra">RA</label>
      <input type="text" />
      <label htmlFor="senha">Senha</label>
      <input type="password" />
      <Link to="/primarypage">
        <button className='btn_entrar'>Entrar</button>
      </Link>
    </form>
    <img src={unicv_logo} alt=""  className='unicv_logo'/>
  </div>
  )
}

export default Home

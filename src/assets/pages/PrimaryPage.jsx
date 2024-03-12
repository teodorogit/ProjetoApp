import React from 'react'
import './PrimaryPageStyle.css'
import {Link} from 'react-router-dom'

const PrimaryPage = () => {
  return (
    <div>
        <div className='header'>
            <h2>Aulas de hoje</h2>
            <div>
                <div><p>Aula 1 : sala X</p></div>
                <div><p>Aula 2 : sala Y</p></div>
                
            </div>
        </div>
      <div className='buttons'>
        <button className='btn'>Notas</button>
        <button className='btn'>Materias</button>
        <Link to="/" className='btn'>
          <button className='btn'>Sair</button>
        </Link>
        
      </div>
    </div>
  )
}

export default PrimaryPage;
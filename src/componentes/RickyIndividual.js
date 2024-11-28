import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RickyIndividual.css';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function RickyIndividual() {
    const [individual, setIndividual] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const [ esLoading, setEsLoading] = useState(true)

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())//la respuesta del link/fetch la convierte un un json
      .then((response) => {
        setIndividual(response)//lo guarda en el array individual
        setEsLoading(false)
    })

    if(esLoading){
      Swal.fire({
        title: "cargando datos..."
      })
      Swal.showLoading()
    }
    else Swal.close()
    
  return (
    <div className='contenido'>
        <div className='detalles'>
            <img src={individual.image} alt={individual.image} />
            <h1>Id: {individual.id}</h1>
            <h2>Nombre: {individual.name}</h2>
            <p>Status: {individual.status}</p>
            <p>Genero: {individual.gender}</p>
            <p>Especie: {individual.species}</p>
            <div className='boton'>
                <button onClick={() => navigate("/index")} >Regresar</button>
                <Link to={'/index'}><button>Regresar</button></Link>
            </div>
        </div>
    </div>
  )
}

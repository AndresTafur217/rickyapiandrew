import React from 'react'
import { useState,useEffect } from 'react'
import RickyCard from './RickyCard'
import './ricky.css'
import Swal from 'sweetalert2'

export default function RickyList() {
    const [characters,setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((response) => {
            setCharacters(response.results)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        Swal.fire({
          title: "cargando datos..."
        })
        Swal.showLoading()
      }
      else Swal.close()
      
  return (
    <div>
        <h1>Ricky and Morty</h1>
        <div className='heroes-container'>
            {characters.map(character => {
                return (
                    <RickyCard character={character} />
                )
            })}
        </div>
    </div>
  )
}

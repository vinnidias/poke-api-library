import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'

function getBackgroundFromType(type) {
    if(type === 'grass'){
        const grass = rgba(50, 224, 56, 1)
        return grass
    }
    if(type === 'ghost'){
        const ghost = rgba(177, 111, 218, 1)
        return grass
    }
    if(type === 'ghost'){
        const ghost = rgba(177, 111, 218, 1)
        return grass
    }
}

export default function CardPreView({id}) {
    const [img, setImg] = useState('')
    const [background, setBackGround] = useState('')
    
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            const img = res.data.sprites.front_default
            const type = res.data.types
            setImg(img)
        })
    },[])
    return (
        <div className="card-preview">
            <img src={img} className="poke-img"/>
        </div>
    )
}
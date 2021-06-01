import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'



export default function CardPreView({id}) {
    const [img, setImg] = useState('')
    const [background, setBackGround] = useState('')

    function getBackgroundFromType(type) {
        if(type === 'grass'){
            const grass = 'rgba(50, 224, 56, 1)'
            setBackGround(grass)
        }
        if(type === 'ghost'){
            const ghost = 'rgba(177, 127, 189, 1)'
            setBackGround(ghost)
        }
        if(type === 'bug'){
            const bug = 'rgba(147, 231, 134, 1)'
            setBackGround(bug)
        }
        if(type === 'flying'){
            const flying = 'rgba(143, 216, 232, 1)'
            setBackGround(flying)
        }
        if(type === 'fire'){
            const fire = 'rgba(239, 143, 31, 1)'
            setBackGround(fire)
        }
        if(type === 'water'){
            const fire = 'rgba(87, 166, 224, 1)'
            setBackGround(fire)
        }
        if(type === 'fairy'){
            const fairy = 'rgba(249, 80, 232, 1)'
            setBackGround(fairy)
        }
        if(type === 'poison'){
            const poison = 'rgba(236, 157, 219, 1)'
            setBackGround(poison)
        }
        if(type === 'steel'){
            const steel = 'rgba(182, 192, 190, 1)'
            setBackGround(steel)
        }
        if(type === 'electric'){
            const electric = 'rgba(249, 253, 58, 1)'
            setBackGround(electric) 
        }
        if(type === 'ground'){
            const ground = 'rgba(217, 210, 56, 1)'
            setBackGround(ground)
        }
        if(type === 'dragon'){
            const dragon = 'rgba(171, 194, 227, 1)'
            setBackGround(dragon)
        }
        if(type === 'ice'){
            const ice = 'rgba(119, 252, 244, 1)'
            setBackGround(ice)   
        }
        if(type === 'rock'){
            const rock = 'rgba(212, 154, 100, 1)'
            setBackGround(rock)   
        }
        if(type === 'fighting'){
            const fighting = 'rgba(248, 107, 107, 1)'
            setBackGround(fighting)   
        }
        if(type === 'normal'){
            const normal = 'rgba(226, 219, 219, 1)'
            setBackGround(normal)   
        }
        if(type === 'dark'){
            const dark = 'rgba(79, 65, 65, 1)'
            setBackGround(dark)   
        }
        if(type === 'psychic'){
            const psychic = 'rgba(244, 49, 143, 1)'
            setBackGround(psychic)   
        }   
    }
    
    
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            const img = res.data.sprites.front_default
            const type = res.data.types[0].type.name
            console.log('type: ',type)
            getBackgroundFromType(type)
            setImg(img)
        })
    },[])
    return (
        <div className="card-preview" style={{backgroundColor: background}} >
            <img src={img} className="poke-img"/>
        </div>
    )
}
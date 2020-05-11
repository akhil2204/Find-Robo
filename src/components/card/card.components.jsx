import React from 'react'
import './card.style.css'
export const Card =props=>(
<div  className= "card-container">

    <img  alt = 'robo'  src={`https://robohash.org/${props.collection.id}?set=set2&size=180x180`}/>
    <h1 >
        {props.collection.name}
    </h1>
<p>{props.collection.email}</p>
</div>
)
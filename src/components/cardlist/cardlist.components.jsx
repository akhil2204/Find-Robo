import React from 'react'
import './card.list.style.css'
import {Card} from '../card/card.components'
export const CardList = (props)=>{

    return (<div className="card-list">
         {
         props.collection.map(collection=>(
           <Card key={collection.id} collection = {collection} />
          ))
        }
    </div>)
}
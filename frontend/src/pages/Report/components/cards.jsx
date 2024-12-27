import './cards.css'
import React from 'react'
import Card from './card'
import { CardsData } from '../Data';

const Cards= () =>{
    return(
        <div className="Cards">
            {CardsData.map((card , id)=>{
                return(
                    <div className="parentContainer">
                        <Card
                        title={card.title}
                        color={card.color}
                        value={card.value}
                        series={card.series}

                        />

                    </div>
                )
            
            })}

        </div>
    );
}
export default Cards
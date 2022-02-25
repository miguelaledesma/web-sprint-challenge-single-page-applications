import React from "react";
import { useHistory } from "react-router-dom";

export default function Homepage() {
    const history = useHistory()

    const orderPizza = () => {
        history.push('/pizza')
    }
    
    return (
        <div className = 'home-wrapper'>

            <img 
            className = 'home-image'
            src = 'https://source.unsplash.com/F6-U5fGAOik'
            alt = ''
            />

            <button onClick = {orderPizza} id ='order-pizza' >Click to Start</button>

        </div>
    )
}
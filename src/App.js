import React, { useEffect, useState } from "react";
import axios from "axios";
import PizzaForm from './components/PizzaForm'
import Homepage from './components/Homepage'
import { Switch, Route, Link } from 'react-router-dom'

const initialFormValues = {
  name: '',
  size: '',

  pepperoni: false, 
  ham: false,
  cheese: false, 
  veggies:false,
  special: ''

}

const initialFormErrors = {
  name: '',
  size: '',
  special: ''
}


const initialPizza = []
const initialDisabled = true


const App = () => {

const [pizza, setPizza] = useState(initialPizza)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)



  const postPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(response => {
      // console.log([...pizza, response.data])
      setPizza([...pizza, response.data])
      
    })
    .catch(error => {
      console.error(error)
    })
    
  }

  //validate here 

  const inputChange = (name, value) => {
    //validate here
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size:formValues.size.trim(),
      special:formValues.special.trim(),
      toppings: ['pepperoni', 'ham', 'cheese','veggies'].filter(topping => !!formValues[topping])
    }
    postPizza(newPizza)
  }



  return (
    <div>
    <nav>
      <header className='header'>
    <div className="title">  
    <h1>BloomTech Pizza</h1>
    </div>  
      <div className="buttons">
      <Link to= '/'><button className= 'home-btn'>Home</button></Link>
      </div>


      <div className='button2'>
      <Link  to= '/pizza'>
          <button className= 'order-pizza'>Place Pizza Order</button>
      </Link>
      </div>
      </header>
      </nav>

      <Switch>
      <Route exact path ='/'>
        <Homepage />
      </Route>
      <Route path= '/pizza'>
        <PizzaForm
        values= {formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        // errors={formError}
        />
      </Route>
    </Switch>

  </div>
  );
};
export default App;

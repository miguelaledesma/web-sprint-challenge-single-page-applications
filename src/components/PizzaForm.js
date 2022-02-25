import React from "react";

function PizzaForm(props) {

   const {values, submit, change, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value; 
        change(name, valueToUse)
    }


   
   return(
            // <body className = 'form-container'>
        <form id = 'pizza-form' onSubmit={onSubmit}>
            <div>
            <h1>Start Building Your Pizza!</h1>
            </div>
            
            <div>
            <h4>Enter your name</h4>
            <label>
                <input 
                id = 'name-input'
                value = {values.name}
                onChange = {onChange}
                name = 'name'
                type = 'text'
                placeholder = 'Your Name'
                
                /> 
            </label>
            </div>

            <div>
                <h4> Pick your Pizza!</h4>
                <label>
                    <select onChange ={onChange} value = {values.size} name = 'size' id = 'size-dropdown'>
                        <option value =''>--Select Option--</option>
                        <option value ='small'>Small</option>
                        <option value ='medium'>Medium</option>
                        <option value ='large'>Large</option>
                    </select>
                    
                </label>
                </div>

                <div className ='toppings'>
                    <h4>Add Some Toppings!</h4>  

        <label>Pepperoni 
          <input 
          type = 'checkbox'
          name = 'pepperoni'
          checked = {values.pepperoni}
          onChange = {onChange}
          
          /> 
        </label>

        <label>Ham
        <input 
        type = 'checkbox'
        name= 'ham'
        checked = {values.ham}
        onChange = {onChange}
        
        /> 
        </label>

        <label>Veggies
          <input 
          type = 'checkbox'
          name = 'veggies'
          checked = {values.veggies}
          onChange = {onChange}
          
          /> 
        </label>

        <label> Cheese
          <input 
          type = 'checkbox'
          name = 'cheese'
          checked = {values.cheese}
          onChange = {onChange}
          
          /> 
        </label>

        </div>

    <div> 
        <label>
            <input 
            id='special-text'
            name ='special'
            placeholder = 'Special Instructions'
            checked = {values.special}
            onChange = {onChange}
            /> 
        </label>
    </div>
    <div className ='orderBtn'>
        <button id ='order-button'>Place Order</button>
    </div>
    
    <div className='errors'>
                <p>{errors.name}</p>
            </div>
    
        </form>

            //  </body>



            
    )
}

export default PizzaForm
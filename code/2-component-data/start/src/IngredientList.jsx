import './IngredientList.css'
import React from 'react';

function IngredientList (props) {
    const ingredientListItems = props.ingredients.map((item, index) => {
        return (
            <li key={index} className={item.prepared ? 'prepared' : ''}>{item.name}</li>
        )
    })
    return (
        <ul>
            {ingredientListItems}
        </ul>
    )
};

export default IngredientList;
import React from 'react';

function RecipeSteps (props) {
    const recipeStepsList = props.steps.map(x => {
        return (
            <li>{x}</li>
        )
    })

    return (<>
        <h4>Pasos a seguir</h4>
        <ol>
            {recipeStepsList}
        </ol>
    </>
    )
};

export default RecipeSteps
import {IRecipe} from "./IRecipe";

const RecipeComponent = (props: { recipe: IRecipe }) => {
    const {recipe} = props;
    return (
        <div className="recipe">
            <div className="title">
                <img src={recipe.thumbnail || 'http://localhost:3000/placeholder.jpeg'} alt={recipe.title}/>
                <p>{recipe.title}</p>
            </div>

            {recipe.ingredients &&
                <ul>
                    {recipe.ingredients.split(',').map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                </ul>
            }
            <a href={recipe.href} target="_blank" rel="noreferrer">View Recipe</a>
        </div>
    );
}

export default RecipeComponent
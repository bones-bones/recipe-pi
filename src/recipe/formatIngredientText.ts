import { Ingredient } from '../shared/types';

export const formatIngredientText = (ingredient: Ingredient) => {
    return `${ingredient.amount.amount}${
        ingredient.amount.type ? ' ' + ingredient.amount.type : ''
    }${ingredient.prepMethod ? ' ' + ingredient.prepMethod : ''} ${
        ingredient.ingredient
    }`;
};

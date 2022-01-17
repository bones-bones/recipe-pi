import { Ingredient, Step } from '../shared/types';

export const getIngredientsFromSteps = (steps: Step[]) => {
    const allIngredients = steps.map(({ ingredients }) => ingredients);
    const filtered = allIngredients.filter(
        (entry) => entry !== undefined
    ) as Ingredient[][];

    const flattenIngredients = filtered.flat();

    const ingredientMapping = flattenIngredients.reduce(
        (previousValue, currentValue) => {
            const existing = previousValue.find(
                ({ type }) => type === currentValue.ingredient
            );

            if (existing) {
                existing.ingredients.push(currentValue);
            } else {
                previousValue.push({
                    type: currentValue.ingredient,
                    ingredients: [currentValue],
                });
            }

            return previousValue;
        },
        [] as { type: string; ingredients: Ingredient[] }[]
    );
    return ingredientMapping;
};

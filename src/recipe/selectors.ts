import { RootState } from '../store';

export const selectSteps = (root: RootState) => {
    return root.recipe.recipe?.steps;
};
export const selectRecipe = (root: RootState) => {
    return root.recipe.recipe;
};

export const selectActiveStep = (root: RootState) => {
    return root.recipe.activeStep;
};

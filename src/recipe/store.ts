import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../shared/types';

export const name = 'recipe';

interface State {
    activeStep: number;
    recipe?: Recipe;
}

const initialState: State = { activeStep: 0 };

export const recipeSlice = createSlice({
    name,
    initialState,
    reducers: {
        loadRecipe: (state, { payload }: PayloadAction<Recipe>) => {
            state.activeStep = 0;
            state.recipe = payload;
        },
        nextStep: (state) => {
            state.activeStep++;
        },
        previousStep: (state) => {
            state.activeStep = Math.max(0, state.activeStep - 1);
        },
    },
});

export const { loadRecipe, nextStep, previousStep } = recipeSlice.actions;

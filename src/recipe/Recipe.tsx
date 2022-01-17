import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipes } from '../shared/sampleRecipes';
import { formatIngredientText } from './formatIngredientText';
import { getIngredientsFromSteps } from './getIngredientsFromSteps';
import { selectRecipe } from './selectors';
import { Steps } from './Steps';
import { loadRecipe } from './store';
export const Recipe = () => {
    const dispatch = useDispatch();
    const recipe = useSelector(selectRecipe);

    useEffect(() => {
        dispatch(loadRecipe(recipes[0]));
    }, []);

    return (
        <>
            {recipe && (
                <Container>
                    <Title>{recipe.title}</Title>
                    <Description>{recipe.description}</Description>
                    <Ingredients>
                        <h4>Ingredients</h4>
                        {getIngredientsFromSteps(recipe.steps).map((entry) => {
                            return (
                                <ul key={entry.type}>
                                    {entry.ingredients.map(
                                        (ingredientEntry) => {
                                            return (
                                                <li
                                                    key={
                                                        ingredientEntry.prepMethod
                                                    }
                                                >
                                                    {formatIngredientText(
                                                        ingredientEntry
                                                    )}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            );
                        })}
                    </Ingredients>
                    <h4>Steps</h4>
                    <Steps />
                </Container>
            )}
        </>
    );
};

const Container = styled.div();

const Title = styled.h2();

const Description = styled.div();

const Ingredients = styled.div();

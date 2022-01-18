import { Step } from '../shared/types';
import { formatIngredientText } from './formatIngredientText';

export const getStepInstructions = (step: Step) => {
    return `${step.instructions} ${
        step.ingredients
            ? step.ingredients
                  .map((entry) => formatIngredientText(entry))
                  .join(', ')
            : ''
    }${
        step.duration
            ? `for ${step.duration.value} ${step.duration.type}(s)`
            : ''
    }${step.temperature ? `to ${step.temperature}` : ''}`;
};

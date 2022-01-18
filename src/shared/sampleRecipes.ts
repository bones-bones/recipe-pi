import { Recipe } from './types';

export const recipes: Recipe[] = [
    {
        title: 'Homemade Rice-a-Roni',
        description: 'Somehow cheaper than the boxed kind.',
        steps: [
            {
                instructions: 'Heat pan',
                temperature: 'Medium - High',
            },
            {
                instructions: 'Melt',
                ingredients: [
                    {
                        // Maybe use descriptor as a common attribute. Or title.
                        type: 'Butter',
                        // TODO: Wordy words and the words that word them
                        amount: { value: 2, type: 'Tablespoon' },
                    },
                    {
                        type: 'Olive Oil',
                        amount: { value: 2, type: 'Tablespoon' },
                    },
                ],
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        type: 'Rice',
                        amount: { value: 1, type: 'Cup' },
                    },
                    {
                        type: 'Spaghetti',
                        amount: { value: 0.5, type: 'Cup' },
                    },
                    {
                        type: 'Walnuts',
                        amount: { value: 3, type: 'Tablespoon' },
                        prepMethod: 'chopped',
                    },
                ],
            },
            {
                instructions: 'Cook until browned while stirring',
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        type: 'Small Onion',
                        amount: { value: 1 },
                        prepMethod: 'chopped',
                    },
                ],
            },
            {
                instructions: 'Cook',
                duration: { value: 2, type: 'Minute' },
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        type: 'Broth',
                        amount: { value: 3, type: 'Cup' },
                    },
                    {
                        type: 'Parsley',
                        amount: { value: 1, type: 'Teaspoon' },
                    },
                    {
                        type: 'Rosemary',
                        amount: { value: 0.3, type: 'Teaspoon' },
                    },
                ],
            },
            {
                instructions: 'Bring to a boil',
            },
            {
                instructions: 'Cover and turn heat to',
                temperature: 'Low',
            },
            {
                instructions: 'Cook',
                duration: { value: 17, type: 'Minute' },
            },
        ],
    },
    {
        title: 'Low effort elotes',
        description:
            "When you want elotes but don't want to actually grill corn",
        steps: [
            {
                instructions: 'Add',
                ingredients: [
                    {
                        type: 'Olive Oil',
                        amount: { value: 2, type: 'Tablespoon' },
                    },
                ],
            },
            {
                instructions: 'Heat until shimmering',
                temperature: 'High',
            },
            {
                instructions: 'Add',
                ingredients: [
                    { type: 'Corn', amount: { value: 3, type: 'Cup' } },
                ],
            },
        ],
    },
    {
        title: 'Thai Yellow Chicken Curry',
        description:
            "If I'm being honest the Mae Ploy Curry paste carries this recipe. Yukon taters are probably the best taters to use in any situation but like, don't not make it if you only got russets",
        steps: [
            {
                instructions: 'Heat a pot',
                temperature: 'Meduim-Low',
                ingredients: [
                    {
                        type: 'Olive Oil',
                        amount: { value: 2, type: 'Tablespoon' },
                    },
                ],
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        type: 'Yellow or White Onion',
                        amount: { value: 1 },
                        prepMethod: 'Chopped',
                    },
                ],
            },
            { instructions: 'Cook until onions soften' },
            {
                instructions: 'Stir in',
                ingredients: [
                    {
                        type: 'Chicken',
                        prepMethod: 'Chopped into 3/4 inch chunks',
                        amount: { value: 1, type: 'Pound' },
                    },
                    {
                        type: 'Yellow Curry Paste',
                        amount: { value: 0.3, type: 'Cup' },
                    },
                ],
            },
            {
                instructions: 'Cook',
                duration: { value: 4, type: 'Minute' },
            },
            {
                instructions: 'Stir in',
                ingredients: [
                    {
                        type: 'Potato',
                        prepMethod: 'Chopped into bitesize chunks',
                        amount: { value: 2, type: 'Cup' },
                    },
                    {
                        type: 'Red Bell pepper',
                        prepMethod: 'Chopped into small strips',
                        amount: { value: 0.5 },
                    },
                ],
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        type: 'Coconut Milk',
                        amount: { value: 2, type: '14 oz Can' },
                    },
                    {
                        type: 'Water',
                        amount: { value: 0.5, type: 'Cup' },
                    },
                ],
            },
            {
                instructions: 'Simmer',
                duration: { value: 30, type: 'Minute' },
            },
            { instructions: 'Remove from heat' },
            {
                instructions: 'Stir in',
                ingredients: [
                    {
                        type: 'Fish sauce',
                        amount: { value: 2, type: 'Teaspoon' },
                    },
                    {
                        type: 'Brown sugar',
                        amount: { value: 1.5, type: 'Tablespoon' },
                    },
                ],
            },
            {
                instructions: 'Serve and top with',
                ingredients: [
                    {
                        type: 'Cilantro',
                        amount: { value: 2, type: 'Tablespoon' },
                        prepMethod: 'Chopped',
                    },
                ],
            },
        ],
    },
];

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
                        ingredient: 'Butter',
                        // TODO: Wordy words and the words that word them
                        amount: { amount: 2, type: 'Tablespoon' },
                    },
                    {
                        ingredient: 'Olive Oil',
                        amount: { amount: 2, type: 'Tablespoon' },
                    },
                ],
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        ingredient: 'Rice',
                        amount: { amount: 1, type: 'Cup' },
                    },
                    {
                        ingredient: 'Spaghetti',
                        amount: { amount: 0.5, type: 'Cup' },
                    },
                    {
                        ingredient: 'Walnuts',
                        amount: { amount: 3, type: 'Tablespoon' },
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
                        ingredient: 'Small Onion',
                        amount: { amount: 1 },
                        prepMethod: 'chopped',
                    },
                ],
            },
            {
                instructions: 'Cook',
                duration: { amount: 2, interval: 'Minute' },
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        ingredient: 'Broth',
                        amount: { amount: 3, type: 'Cup' },
                    },
                    {
                        ingredient: 'Parsley',
                        amount: { amount: 1, type: 'Teaspoon' },
                    },
                    {
                        ingredient: 'Rosemary',
                        amount: { amount: 0.3, type: 'Teaspoon' },
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
                duration: { amount: 17, interval: 'Minute' },
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
                        ingredient: 'Olive Oil',
                        amount: { amount: 2, type: 'Tablespoon' },
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
                    { ingredient: 'Corn', amount: { amount: 3, type: 'Cup' } },
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
                        ingredient: 'Olive Oil',
                        amount: { amount: 2, type: 'Tablespoon' },
                    },
                ],
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        ingredient: 'Yellow or White Onion',
                        amount: { amount: 1 },
                        prepMethod: 'Chopped',
                    },
                ],
            },
            { instructions: 'Cook until onions soften' },
            {
                instructions: 'Stir in',
                ingredients: [
                    {
                        ingredient: 'Chicken',
                        prepMethod: 'Chopped into 3/4 inch chunks',
                        amount: { amount: 1, type: 'Pound' },
                    },
                    {
                        ingredient: 'Yellow Curry Paste',
                        amount: { amount: 0.3, type: 'Cup' },
                    },
                ],
            },
            {
                instructions: 'Cook',
                duration: { amount: 4, interval: 'Minute' },
            },
            {
                instructions: 'Stir in',
                ingredients: [
                    {
                        ingredient: 'Potato',
                        prepMethod: 'Chopped into bitesize chunks',
                        amount: { amount: 2, type: 'Cup' },
                    },
                    {
                        ingredient: 'Red Bell pepper',
                        prepMethod: 'Chopped into small strips',
                        amount: { amount: 0.5 },
                    },
                ],
            },
            {
                instructions: 'Add',
                ingredients: [
                    {
                        ingredient: 'Coconut Milk',
                        amount: { amount: 2, type: '14 oz Can' },
                    },
                    {
                        ingredient: 'Water',
                        amount: { amount: 0.5, type: 'Cup' },
                    },
                ],
            },
            {
                instructions: 'Simmer',
                duration: { amount: 30, interval: 'Minute' },
            },
            { instructions: 'Remove from heat' },
            {
                instructions: 'Stir in',
                ingredients: [
                    {
                        ingredient: 'Fish sauce',
                        amount: { amount: 2, type: 'Teaspoon' },
                    },
                    {
                        ingredient: 'Brown sugar',
                        amount: { amount: 1.5, type: 'Tablespoon' },
                    },
                ],
            },
            {
                instructions: 'Serve and top with',
                ingredients: [
                    {
                        ingredient: 'Cilantro',
                        amount: { amount: 2, type: 'Tablespoon' },
                        prepMethod: 'Chopped',
                    },
                ],
            },
        ],
    },
];

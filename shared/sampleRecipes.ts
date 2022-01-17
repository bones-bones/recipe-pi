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
                        ingredient: 'Chopped Walnuts',
                        amount: { amount: 3, type: 'Tablespoon' },
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
                        ingredient: 'Small Chopped Onion',
                        amount: { amount: 1 },
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
                instructions: 'Reduce heat and cover',
                temperature: 'Low',
            },
            {
                instructions: 'Cook',
                duration: { amount: 17, interval: 'Minute' },
            },
        ],
    },
];

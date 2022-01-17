export interface Recipe {
    title: string;
    description: string;
    steps: Step[];
}

// This is garbage, introduce superclass for heating vs ingredients
export interface Step {
    duration?: Duration;
    ingredients?: Ingredient[];
    instructions?: string;
    temperature?: number | string;
}

export interface Ingredient {
    ingredient: string;
    prepMethod?: string;
    amount: Amount;
}

export interface Amount {
    type?: 'Tablespoon' | 'Teaspoon' | 'Cup';
    amount: number;
}

export interface Duration {
    amount?: number;
    interval?: 'Minute' | 'Hour';
}

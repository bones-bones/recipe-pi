export interface Recipe {
    title: string;
    description: string;
    steps: Step[];
}

// This is garbage, introduce superclass for heating vs ingredients
export interface Step {
    duration?: Duration;
    ingredients?: Ingredient[];
    instructions: string;
    temperature?: number | string;
}

export interface Ingredient {
    type: string;
    prepMethod?: string;
    amount: Amount;
}

export interface Amount {
    type?: 'Tablespoon' | 'Teaspoon' | 'Cup' | 'Pound' | '14 oz Can';
    value: number;
}

export interface Duration {
    value?: number;
    type?: 'Minute' | 'Hour';
}

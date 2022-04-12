# Recipe-pi

## Goals

# Functional Goals

I want a way to display recipes on a monitor in the kitchen while I cook. This provides needs: the ability to store and search recipes, operate in a messy environment, clear directions, and the ability to set multiple timers.

### Development Goals

Although I want to use a raspberry pi for the core instance, I want to be able to develop in the easiest way possible. The best way to do this is going to be to chunk out the project in a way that allows for relative platform agnosticisity. For the input I'm planning to use some arcade buttons. Hopefully just a Next button to advance through the steps.

## Architecture

### Server

A node server interfacing with a mongoDB instance that can search a recipe's title, ingredients, time, and description. It also must serve the Recipe and Search Clients

### Recipe Client

An interface to display the ingredients, steps, and active step of a recipe. Needs to accept commands from outside sources as to which recipe to display and the active step

### Search Client

A mobile interface for searching and selecting a recipe. The recipe here will need to be pushed to the Recipe Client

### Raspberry Pi Interface Layer

A way to wire up inputs on the Pi that updates the active step of the Recipe Client

## What is a Recipe?

The real answer is to go look at the types files. The less real answer is this: A recipe has a name, description, ingredients, and an ordered list of steps. The steps themselves are tricker; they can include portions of ingredients, timing instructions, different appliances. Obviously this project won't be able to handle all recipes because there isn't really a standard format. Well there is, on https://schema.org/Recipe, but it feels like an attempt to define a recipe, rather than a useful definition (insert joke about everyone having standards here).

### Sample Recipe

This isn't the best recipe but I've made it enough times to be familiar with it.

Homemade Rice-a-Roni
Ingredients

-   2 Tb Olive Oil
-   2 Tb Butter
-   1 Cup Rice
-   0.5 Cup Spaghetti broken into short lengths
-   3 Tb Chopped walnuts
-   1 Small Onion, chopped
-   3 Cups broth
-   1 Tsp Parsley
-   0.3 Tsp Rosemary

Steps

-   Heat pan to Medium-High
-   Add Olive Oil and Butter
-   Add Rice, Spaghetti, Chopped Nuts
-   Cook until lightly browned
-   Add onion, cook for 2 mins
-   Add Broth, Rosemary, Parsley
-   Bring to a boil
-   Reduce heat to low, cook for 17 minutes

# Decision Points

-   Prep instructions belong with the ingredient (ie chopped tomatoes vs chop the tomatoes). This seems to be the common pattern and allows you to do some things ahead of time

https://cafedelites.com/garlic-lemon-herb-mediterranean-chicken-potatoes/

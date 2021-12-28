let recipes = {

    vegetables: {
        salad: {
            name: 'salad',
            text: 'For this recipe we’ll be chopping up a few colorful veggies and tossing them with a zesty garlic dressing.',
            list: [
                {name: 'cucumber', color: '#62bb69'},
                {name: 'pepper', color: '#62bb69'},
                {name: 'tomato', color: '#62bb69'},
                {name: 'onion', color: '#62bb69'},
                {name: 'garlic', color: '#62bb69'},
                {name: 'lemon', color: '#FFD658'},
                {name: 'mustard', color: '#E86515'},
                {name: 'olive oil', color: '#dbcf5c'},
                {name: 'salt', color: '#4b4848'},
                {name: 'black pepper', color: '#4b4848'},
            ]
        },
        fried: {
            text: ''
        },
        fries: {
            text: ''
        },
        baked: {
            text: 'Preheat oven to 425F/220C degrees.\n Lightly oil a baking sheet or coat.\n' +
                'Place vegetables in a single layer onto the prepared baking sheet. Add olive oil, balsamic vinegar, garlic and thyme. Season with salt and pepper, to taste. Gently toss to combine.\n' +
                'Place into oven and bake for 12-15 minutes, or until tender.\n' +
                'Serve immediately.',
            list: [
                {name: 'broccoli', color: '#62bb69'},
                {name: 'pumpkin', color: '#62bb69'},

                {name: 'zucchini', color: '#62bb69'},
                {name: 'yellow squash', color: '#62bb69'},

                {name: 'pepper', color: '#62bb69'},
                {name: 'onion', color: '#62bb69'},
                {name: 'garlic', color: '#62bb69'},

                {name: 'champi gnon', color: '#B3AA9A'},

                {name: 'balsamic vinegar', color: '#dbcf5c'},
                {name: 'olive oil', color: '#dbcf5c'},

                {name: 'salt', color: '#4b4848'},
                {name: 'black pepper', color: '#4b4848'},
                {name: 'thyme', color: '#4b4848'},

            ]
        },
        broth: {
            text: ''
        },
        relish: {
            text: ''
        },
    },

    exampleGroup: {
        exampleRecipe: {
            name: 'name',
            text: 'Big text here.',
            list: []
        }
    }
}

module.exports = recipes
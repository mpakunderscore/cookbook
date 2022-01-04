let colors = {
    cookbook: '#361F1F',
    meat: '#A42E2F',
    fish: '#FA8072',
    vegetables: '#62bb69',
    chicken: '#ffdbd7',
    drinks: 'rgba(75, 160, 210, 1)',
    soup: '#E6B43C',
    fruits: '#FFD658',
    sauce: '#E86515',
    bread: '#FAD69E',
    rice: '#FFF',
    spice: '#4b4848',
    herbs: 'rgba(80, 140, 50, 1)',
    equipment: '#bdbdbd',
    pickling: 'rgba(100, 60, 100, 1)',
    milk: 'rgba(255, 255, 255, 1)',
    dessert: 'rgba(255, 55, 116, 1)',
    eggs: '#fff',
    coffee: '#6F4E37',
    pasta: '#EECB7B',
    mushrooms: '#B3AA9A',
    oil: '#dbcf5c',
    awards: '#ffd7b7',
}

let recipes = {

    vegetables: {
        salad: {
            name: 'salad',
            text: 'Grind dry seasonings and sesame seeds in a mortar, mix with liquid ingredients for dressing. The bottom and sides of the salad bowl are lined with arugula leaves, you can leave them intact, or you can tear them into several parts with your hands, then lay out the onion cut into rings, cucumber slices and thin tomato slices. Top with dressing, sprinkle with pine nuts.',
            list: [
                {name: 'cucumber', color: colors.vegetables},
                {name: 'pepper', color: colors.vegetables},
                {name: 'tomato', color: colors.vegetables},
                {name: 'onion', color: colors.vegetables},
                {name: 'garlic', color: colors.vegetables},
                {name: 'lemon', color: colors.fruits},
                {name: 'mustard', color: colors.sauce},
                {name: 'olive oil', color: colors.oil},
                {name: 'salt', color: colors.spice},
                {name: 'black pepper', color: colors.spice},
            ]
        },
        fried: {
            text: ''
        },
        fries: {
            text: 'Peel and wash vegetables. Cut the potatoes and carrots into 1 cm thick strips. Place vegetables in a deep bowl.\n' +
                'Let\'s prepare a herbal dressing. In a shallow bowl, mix together salt and sunflower oil. Add dried basil. Grind the peppercorns in a mortar, add to the overall mixture. Then add thyme. Mix well until smooth. Then, pour the resulting mixture over the vegetables. Mix well. Cover a baking sheet with baking paper, put vegetables. Oven, heat to 200 degrees, put a baking sheet in the oven and bake vegetables until tender. We take out ready-made vegetables and serve hot.\n',
            list: [
                {name: 'potato', color: colors.vegetables},
                {name: 'carrot', color: colors.vegetables},
                {name: 'sunflower oil', color: colors.vegetables},
                {name: 'thyme', color: colors.vegetables},
                {name: 'basil', color: colors.vegetables},
                {name: 'salt', color: colors.vegetables},
                {name: 'black pepper', color: colors.vegetables},
            ]
        },
        baked: {
            text: 'Preheat oven to 425F/220C degrees.\n Lightly oil a baking sheet or coat.\n' +
                'Place vegetables in a single layer onto the prepared baking sheet. Add olive oil, balsamic vinegar, garlic and thyme. Season with salt and pepper, to taste. Gently toss to combine.\n' +
                'Place into oven and bake for 12-15 minutes, or until tender.\n' +
                'Serve immediately.',
            list: [
                {name: 'broccoli', color: colors.vegetables},
                {name: 'pumpkin', color: colors.vegetables},

                {name: 'zucchini', color: colors.vegetables},
                {name: 'yellow squash', color: colors.vegetables},

                {name: 'pepper', color: colors.vegetables},
                {name: 'onion', color: colors.vegetables},
                {name: 'garlic', color: colors.vegetables},

                {name: 'champi gnon', color: colors.mushrooms},

                {name: 'balsamic vinegar', color: colors.oil},
                {name: 'olive oil', color: colors.oil},

                {name: 'salt', color: colors.spice},
                {name: 'black pepper', color: colors.spice},
                {name: 'thyme', color: colors.spice},

            ]
        },
        broth: {
            text: ''
        },
        soup: {
            text: 'Wash and peel vegetables. Boil the water. Season with salt to taste. Remove the peel from the tomato. Chop the onions, carrots and potatoes into small pieces. Put them first in boiling water, cook for 15 minutes. Disassemble the cauliflower into small inflorescences. Cut the peeled tomato into cubes, chop the dill. After 15 minutes, add cauliflower, peas and tomato to the soup. Boil for another 10 minutes. Season the soup with herbs, and then turn it off. Let it brew for 10-15 minutes - and serve with butter.\n',
            list: [
                {name: 'cucumbers', color: colors.spice},
                {name: 'tomatoes', color: colors.spice},
                {name: 'pepper', color: colors.spice},
                {name: 'grapes', color: colors.spice},
                {name: 'red onion', color: colors.spice},
                {name: 'apple', color: colors.spice},
                {name: 'horseradish', color: colors.spice},
                {name: 'carnations', color: colors.spice},
                {name: 'peppers', color: colors.spice},
                {name: 'bay leaves', color: colors.spice},
                {name: 'garlic', color: colors.spice},
                {name: 'sahara', color: colors.spice},
            ]

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
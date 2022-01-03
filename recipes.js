let recipes = {

    vegetables: {
        salad: {
            name: 'salad',
            text: 'Grind dry seasonings and sesame seeds in a mortar, mix with liquid ingredients for dressing. The bottom and sides of the salad bowl are lined with arugula leaves, you can leave them intact, or you can tear them into several parts with your hands, then lay out the onion cut into rings, cucumber slices and thin tomato slices. Top with dressing, sprinkle with pine nuts.',
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
            text: 'Peel and wash vegetables. Cut the potatoes and carrots into 1 cm thick strips. Place vegetables in a deep bowl.\n' +
                'Let\'s prepare a herbal dressing. In a shallow bowl, mix together salt and sunflower oil. Add dried basil. Grind the peppercorns in a mortar, add to the overall mixture. Then add thyme. Mix well until smooth. Then, pour the resulting mixture over the vegetables. Mix well. Cover a baking sheet with baking paper, put vegetables. Oven, heat to 200 degrees, put a baking sheet in the oven and bake vegetables until tender. We take out ready-made vegetables and serve hot.\n',
            list: [
                {name: 'potato', color: '#62bb69'},
                {name: 'carrot', color: '#62bb69'},
                {name: 'sunflower oil', color: '#62bb69'},
                {name: 'thyme', color: '#62bb69'},
                {name: 'basil', color: '#62bb69'},
                {name: 'salt', color: '#62bb69'},
                {name: 'black pepper', color: '#62bb69'},
            ]
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
        soup: {
            text: 'Wash and peel vegetables. Boil the water. Season with salt to taste. Remove the peel from the tomato. Chop the onions, carrots and potatoes into small pieces. Put them first in boiling water, cook for 15 minutes. Disassemble the cauliflower into small inflorescences. Cut the peeled tomato into cubes, chop the dill. After 15 minutes, add cauliflower, peas and tomato to the soup. Boil for another 10 minutes. Season the soup with herbs, and then turn it off. Let it brew for 10-15 minutes - and serve with butter.\n',
            list: [
                {name: 'cucumbers', color: '#4b4848'},
                {name: 'tomatoes', color: '#4b4848'},
                {name: 'pepper', color: '#4b4848'},
                {name: 'grapes', color: '#4b4848'},
                {name: 'red onion', color: '#4b4848'},
                {name: 'apple', color: '#4b4848'},
                {name: 'horseradish', color: '#4b4848'},
                {name: 'carnations', color: '#4b4848'},
                {name: 'peppers', color: '#4b4848'},
                {name: 'bay leaves', color: '#4b4848'},
                {name: 'garlic', color: '#4b4848'},
                {name: 'sahara', color: '#4b4848'},
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
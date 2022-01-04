let core = {
    name: 'cookbook',
    title: 'COOKBOOK',
    text: 'Learn to cook. Unlock new cards with tasty recipes and unique groceries. Use fridge function for shopping and recipe generation. Compete with others, get rewards and find helpful tips.',
    color: '#361F1F',
    unlocked: true,

    list: [
        {name: 'sync', index: 0},
        // {name: 'about', index: 0},
        {name: 'feedback', index: 0},
        {name: 'install', index: 0},
        {name: 'unlocked', index: 0},
        {name: 'settings', index: 0},
        // {name: '🏆', index: 0},
        {name: 'fridge', index: 0},

        // {name: '', index: 0},
        // {name: 'fridge 🧊', index: 0},

        // {name: 'what', index: 0},
        // {name: 'restart', index: 0},
    ]
}

let meat = {
    name: 'meat',
    title: 'Meat',
    text: 'Humans have hunted animals for meat since prehistoric times. Meat is mainly composed of water, protein, and fat. It is edible raw, but is normally eaten after it has been cooked and seasoned or processed in a variety of ways.',
    color: '#A42E2F',
    unlocked: true,

    list: [
        {name: 'steak', index: 394, recipe: true},
        {name: 'beef stew', index: 126, recipe: true},
        {name: 'stew', index: 126, recipe: true},


        {name: 'slow', index: 600, recipe: true},

        {name: 'beef'},
        {name: 'pork'},
        {name: 'chicken', page: true, item: false},

        {name: 'pate', index: 0, recipe: true},
        {name: 'burger', index: 0, recipe: true},
        {name: 'shawarma', index: 0, recipe: true, page: 'bread'},

        {name: 'grill', index: 300, recipe: true},
        {name: 'bonfire', index: 0, recipe: true},
        {name: 'baked', index: 385, recipe: true},

        {name: 'ribeye'},
        {name: 'rabbit'},
        {name: 'mutton'},

        {name: 'ground', index: 0, recipe: true},
        {name: 'bolognese', index: 0, recipe: true},
        {name: 'kebab', index: 0, recipe: true},

        {name: 'meatballs', index: 0, recipe: true},
        {name: 'smoked', index: 0, recipe: true},
        {name: 'sausages', index: 0, recipe: true},

        {name: 'dumplings', index: 0, recipe: true},
        {name: 'chili', index: 0, recipe: true},
        {name: 'bacon', index: 0, recipe: true},

        {name: 'wellington', index: 0, recipe: true},


    ]
}

// wellington

let fish = {
    name: 'fish',
    title: 'Fish',
    text: 'Many species of fish are consumed as food in virtually all regions around the world. Fish has been an important source of protein and other nutrients for humans throughout history.',
    color: '#FA8072',
    unlocked: true,

    list: [
        {name: 'raw', recipe: true},
        {name: 'fried', recipe: true},
        {name: 'baked', recipe: true},
        {name: 'grill', recipe: true},
        {name: 'fries', recipe: true},
        {name: 'sushi', recipe: true},
        {name: 'shrimps'},
        {name: 'octopus'},
        {name: 'mussels'},
        {name: 'pickled', recipe: true},
        {name: 'smoked', recipe: true},
        {name: 'salmon'},
        {name: 'tuna'},
    ]
}

let chicken = {
    name: 'chicken',
    title: 'Chicken',
    text: 'More than 50 billion chickens are reared annually as a source of meat and eggs. In the United States alone, more than 8 billion chickens are slaughtered each year for meat, and more than 300 million chickens are reared for egg production.',
    color: '#ffdbd7',
    highlight: true,

    list: [
        {name: 'fried', recipe: true},
        {name: 'fries', recipe: true},
        {name: 'soup', recipe: true},

        // {name: 'eggs', page: true, item: false},
        {name: 'chicken'},
        {name: 'turkey'},
        {name: 'duck'},

        {name: 'broth', recipe: true},
        {name: 'pate', index: 0, recipe: true},

    ]
}

let vegetables = {
    name: 'vegetables',
    title: 'Vegetables',
    text: 'Vegetables are parts of plants that are consumed by humans or other animals as food. Bell peppers are usually sold green, but they can also be red, purple or yellow.\n' +
        'Tomatoes are very high in the carotenoid, and can lower your risk of cancer.\n' +
        'Other vegetables high in carotenoids are carrots, spinach, sweet potatoes, and collard greens.\n',
    color: '#62bb69',
    unlocked: true,

    list: [
        {name: 'salad', recipe: true},
        {name: 'baked', recipe: true},
        {name: 'boom', recipe: true},
        {name: 'broth', recipe: true},
        {name: 'french fries', recipe: true},
        {name: 'fries', recipe: true},
        {name: 'fried', recipe: true},
        {name: 'relish', recipe: true},
        {name: 'soup', recipe: true, page: true},
        {name: 'pickled', recipe: true, page: 'pickling'},
        {name: 'coleslaw', recipe: true, page: true},
        {name: 'assorted', recipe: true, page: true},

        {name: 'ratatouille', recipe: true},

        {name: 'onion'},
        {name: 'potato'},
        {name: 'garlic'},
        {name: 'tomato'},
        {name: 'cucumber'},
        {name: 'avocado'},
        {name: 'carrot'},
        {name: 'pepper'},
        {name: 'lettuce'},
        {name: 'spinach'},
        {name: 'cabbage'},
        {name: 'eggplant'},
        {name: 'broccoli'},
        {name: 'ginger'},
        {name: 'pumpkin'},
        {name: 'corn'},
        {name: 'beetroot'},
        {name: 'radish'},
        {name: 'asparagus'},
        {name: 'cauli flower'},
        {name: 'peas'},
        {name: 'leek'},
        {name: 'zucchini'},
        {name: 'celery'},
        {name: 'chilli'},
        {name: 'sweet potato'},

    ]
}

let drinks = {
    name: 'drinks',
    title: 'Drinks',
    text: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture.',
    color: 'rgba(75, 160, 210, 1)',
    unlocked: true,

    list: [
        {name: 'water'},
        {name: 'coffee', recipe: true, page: true, item: true},
        {name: 'tea', recipe: true, item: true},
        {name: 'lemonade', recipe: true},
        {name: 'juice'},
        {name: 'smoothie', recipe: true},
        {name: 'chocolate', recipe: true},
        {name: 'mulled', recipe: true},
        {name: 'cocktail', recipe: true},
        {name: 'cider', recipe: true, item: true},
        {name: 'wine', recipe: true, item: true},
        {name: 'mors', recipe: true},
    ]
}

let soup = {
    name: 'soup',
    title: 'Soup',
    text: 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, milk, or water.',
    color: '#E6B43C',

    list: [
        {name: 'broth', recipe: true},
        {name: 'stew', recipe: true},
        {name: 'cream', recipe: true},
        {name: 'tom yum', recipe: true},
        {name: 'fish', recipe: true},
        {name: 'chicken', recipe: true},
        {name: 'onion', recipe: true},
        {name: 'gazpacho', recipe: true},
        {name: 'pho', recipe: true},
        {name: 'ramen', recipe: true},
        {name: 'borsch', recipe: true},

    ]
}

let fruits = {
    name: 'fruits',
    title: 'Fruits',
    text: 'Fruits',
    color: '#FFD658',
    highlight: true,

    list: [
        {name: 'apple'},
        {name: 'blue berries'},
        {name: 'banana'},
        {name: 'orange'},
        {name: 'lemon'},
        {name: 'lime'},
        {name: 'dragon'},
        {name: 'mango'},
        {name: 'avocado'},
        {name: 'lychee'},
        {name: 'pineapple'},
        {name: 'straw berries'},
        {name: 'durian'},
        {name: 'cherries'},
        {name: 'olive'},
        {name: 'water melon'},
        {name: 'kiwi'},
        {name: 'peach'},
        {name: 'guava'},
        {name: 'grape'},
        {name: 'pome granate'},
        {name: 'grapefruit'},
    ],
}

let sauce = {
    name: 'sauce',
    title: 'Sauce',
    text: 'In cooking, a sauce is a liquid, cream, or semi-solid food, served on or used in preparing other foods. Most sauces are not normally consumed by themselves, they add flavor, moisture, and visual appeal to a dish.',
    color: '#E86515',

    list: [
        {name: 'guacamole', recipe: true},
        {name: 'salsa', recipe: true},
        {name: 'mayo nnaise', recipe: true},
        {name: 'teriyaki', recipe: true},
        {name: 'creamy', recipe: true},
        {name: 'bolognese', recipe: true},
        {name: 'pesto', recipe: true},
        {name: 'holland aise', recipe: true},
        {name: 'mustard', recipe: true},
    ]
}

let bread = {
    name: 'bread',
    title: 'Bread',
    text: 'Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures\' diet.',
    color: '#FAD69E',
    highlight: true,

    list: [
        {name: 'loaf', recipe: true, item: true},
        {name: 'rye bread', recipe: true, item: true},
        {name: 'pancakes', recipe: true},
        {name: 'flour'},
        {name: 'yeast'},
        {name: 'pizza', recipe: true},
        {name: 'pie', recipe: true},
        {name: 'dumplings', recipe: true},
        {name: 'pasta', recipe: true, page: true, item: true},
        {name: 'egg rolls', recipe: true},
    ]
}

let rice = {
    name: 'rice',
    title: 'Rice',
    text: 'As a cereal grain, domesticated rice is the most widely consumed staple food for over half of the world\'s human population, especially in Asia and Africa. It is the agricultural commodity with the third-highest worldwide production, after sugarcane and maize.',
    color: '#FFF',
    highlight: true,

    list: [
        {name: 'rice'},
        {name: 'plant', recipe: true},
        {name: 'sushi', recipe: true},
        {name: 'onigiri', recipe: true},
    ]
}

let spice = {
    name: 'spice',
    title: 'Spice',
    text: 'Spice',
    color: '#4b4848',

    list: [
        {name: 'salt'},
        {name: 'black pepper'},
        {name: 'paprika'},
        {name: 'chili powder'},
        {name: 'ginger'},
        {name: 'turmeric'},
        {name: 'garlic'},
        {name: 'curry'},
        {name: 'cinnamon'},
        {name: 'coriander'},
        {name: 'cumin'},
        {name: 'star anise'},
        {name: 'sugar'},
        {name: 'lime'},
        {name: 'mustard'},
        {name: 'mint'},
        {name: 'oregano'},
        {name: 'thyme'},
        // {name: ''},
        // {name: ''},
        // {name: ''},
    ]
}

let herbs = {
    name: 'herbs',
    title: 'Herbs',
    text: 'Herbs',
    color: 'rgba(80, 140, 50, 1)',

    list: [
        {name: 'dill'},
        {name: 'parsley'},
        {name: 'mint'},
        {name: 'cilantro'},
        {name: 'basil'},
        {name: 'rosemary'},


        // {name: 'anise'},
        // {name: 'caraway'},
        // {name: 'coriander'},
        // {name: 'chamomile'},
        // {name: 'daikon'},
        // {name: 'fennel'},
        // {name: 'lavender'},
        // {name: 'lemongrass'},
        // {name: 'marjoram'},
        // {name: 'oregano'},
        // {name: 'rosemary'},
        // {name: 'thyme'},

    ]
}

let equipment = {
    name: 'equipment',
    title: 'Equipment',
    text: 'Equipment',
    color: '#bdbdbd',

    list: [
        {name: 'knife'},
        {name: 'pan'},
        {name: 'oven'},
        {name: 'board'},
        {name: 'sharpener'},
        {name: 'electric grill'},
        {name: 'gas grill'},
        {name: 'mixer'},
        {name: 'thermo meter'},
        {name: 'fridge'},
        {name: 'towel'},
        {name: 'blender'}

    ]
}

let pickling = {
    name: 'pickling',
    title: 'Pickling',
    text: 'Pickling is the process of preserving or extending the shelf life of food by either anaerobic fermentation in brine or immersion in vinegar. The pickling procedure typically affects the food\'s texture and flavor. The resulting food is called a pickle, or, to prevent ambiguity, prefaced with pickled.',
    color: 'rgba(100, 60, 100, 1)',

    list: []
}

let bento = {
    name: 'bento',
    title: 'Bento',
    text: 'bento',
    color: '#000',

    list: []
}

let milk = {
    name: 'milk',
    title: 'Milk',
    text: 'Milk',
    color: 'rgba(255, 255, 255, 1)',
    highlight: true,

    list: [
        {name: 'milk'},
        {name: 'butter', recipe: true, item: true},
        {name: 'cream', recipe: true, item: true},
        {name: 'sour cream', recipe: true, item: true},
        {name: 'yogurt', recipe: true, item: true},
        {name: 'ice cream', recipe: true, item: true},
    ]
}

let dessert = {
    name: 'dessert',
    title: 'Dessert',
    text: 'Dessert',
    color: 'rgba(255, 55, 116, 1)',

    list: [
        {name: 'cake', recipe: true},
        {name: 'waffles', recipe: true},
        {name: 'muffins', recipe: true},
    ]
}

let eggs = {
    name: 'eggs',
    title: 'Eggs',
    text: 'Eggs',
    color: '#fff',
    highlight: true,

    list: [
        {name: 'chicken eggs'},
    ]
}

let coffee = {
    name: 'coffee',
    title: 'Coffee',
    text: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.',
    color: '#6F4E37',

    list: [
        {name: 'cappuccino'},
        {name: 'latte'},
        {name: 'americano'},
    ]
}

let pasta = {
    name: 'pasta',
    title: 'Pasta',
    text: 'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. ',
    color: '#EECB7B',
    highlight: true,

    list: [
        {name: 'puttanesca', recipe: true},
        {name: 'bolognese', recipe: true},
        {name: 'carbonara', recipe: true},
        {name: 'lasagne', recipe: true},
        {name: 'amatri ciana', recipe: true},
    ]
}

let mushrooms = {
    name: 'mushrooms',
    title: 'Mushrooms',
    text: '🍄',
    color: '#B3AA9A',
    highlight: true,

    list: [
        {name: 'champi gnon'},
        {name: 'shiitake'},
        {name: 'chante relles'},
    ]
}

let oil = {
    name: 'oil vinegar',
    title: 'Oil Vinegar',
    text: 'Oil and Vinegar',
    color: '#dbcf5c',
    highlight: true,

    list: [
        {name: 'olive oil'},
        {name: 'vegetable oil'},
        {name: 'canola oil'},
        {name: 'balsamic vinegar'},
        {name: 'vinegar'},
    ]
}

let fridge = {
    name: 'fridge',
    title: 'Fridge',
    text: 'You have to store your food in the fridge and it will advise you what else to put there',
    color: '#fff8e6',
    color2: '#2d2d2d',
    highlight: true,
    unlocked: true,

    list: []
}

let awards = {
    name: 'awards',
    title: 'Awards',
    text: 'You can get different rewards for completing recipes and discovering ingredients. And for something else',
    color: '#ffd7b7',
    highlight: true,
    unlocked: true,

    list: [
        {name: 'postal', index: 0},
        {name: 'elder', index: 0},

        {name: 'hunter', index: 0},
        {name: 'fisherman', index: 0},
        {name: 'gardener', index: 0},

        {name: 'chef', index: 0},
        {name: 'druid', index: 0},
        {name: 'grandma', index: 0},

        {name: 'monkey', index: 0},
        {name: 'grandpa', index: 0},
        {name: 'salt bae', index: 0},

        {name: 'king', index: 0},
        {name: 'sommelier', index: 0},
        {name: 'craftsman', index: 0},

        {name: 'healthy', index: 0},
        {name: 'vegan', index: 0},
        {name: 'cheater', index: 0},

        {name: 'contributor', index: 0},
        {name: 'lazy', index: 0},
        {name: 'top', index: 0},

    ]
}

module.exports = [
    core,
    vegetables,
    meat,
    fish,
    drinks,
    soup,
    chicken,
    sauce,
    bread,
    spice,
    herbs,
    fruits,
    rice,
    pickling,
    eggs,
    mushrooms,
    pasta,
    coffee,
    dessert,
    milk,
    oil,
    equipment,
    // fridge,
    awards,
]
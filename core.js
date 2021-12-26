let core = {
    name: 'cookbook',
    title: 'COOKBOOK',
    text: 'This App is a collection of simple recipes at 20 categories. A fridge with a lot of items. And the basket where you can craft a recipe.',
    color: '#361F1F',

    list: [
        {name: 'login', index: 0},
        // {name: 'about', index: 0},
        {name: 'feedback', index: 0},
        {name: 'install', index: 0},
        {name: 'unlocked', index: 0},
        {name: 'settings', index: 0},
        {name: 'basket', index: 0},

        // {name: 'what', index: 0},
        // {name: 'restart', index: 0},
    ]
}

let meat = {
    name: 'meat',
    title: 'Meat',
    text: 'Humans have hunted animals for meat since prehistoric times. Meat is mainly composed of water, protein, and fat. It is edible raw, but is normally eaten after it has been cooked and seasoned or processed in a variety of ways.',
    color: '#A42E2F',

    list: [
        {name: 'steak', index: 394, recipe: true},
        {name: 'stew', index: 126, recipe: true},
        {name: 'slow', index: 600, recipe: true},

        {name: 'beef'},
        {name: 'pork'},
        {name: 'chicken', page: true},

        {name: 'grill', index: 300, recipe: true},
        {name: 'bonfire', index: 0, recipe: true},
        {name: 'baked', index: 385, recipe: true},

        {name: 'ribeye'},
        {name: 'rabbit'},
        {name: 'mutton'},

        {name: 'ground', index: 0, recipe: true},
        {name: 'bolognese', index: 0, recipe: true},
        {name: 'kebab', index: 0, recipe: true},

        {name: 'meatball', index: 0, recipe: true},
        {name: 'smoked', index: 0, recipe: true},
        {name: 'sausages', index: 0, recipe: true},

        {name: 'dumplings', index: 0, recipe: true},

        {name: 'chili', index: 0, recipe: true},
        {name: 'wellington', index: 0, recipe: true},
        {name: 'bacon', index: 0, recipe: true},


    ]
}

// wellington

let fish = {
    name: 'fish',
    title: 'Fish',
    text: 'Many species of fish are consumed as food in virtually all regions around the world. Fish has been an important source of protein and other nutrients for humans throughout history.',
    color: '#FA8072',

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
        {name: 'fried'},
        {name: 'fries'},
        {name: 'soup'},
        {name: 'eggs'},
        {name: 'turkey'},
        {name: 'duck'},

    ]
}

let vegetables = {
    name: 'vegetables',
    title: 'Vegetables',
    text: 'Vegetables are parts of plants that are consumed by humans or other animals as food.',
    color: '#62bb69',

    list: [
        {name: 'salad', recipe: true},
        {name: 'fried', recipe: true},
        {name: 'fries', recipe: true},
        {name: 'baked', recipe: true},
        {name: 'broth', recipe: true},
        {name: 'relish', recipe: true},
        {name: 'soup', recipe: true, page: true},
        {name: 'pickling', recipe: true, page: true},




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

        {name: 'rata touille', recipe: true},

    ]
}

let drinks = {
    name: 'drinks',
    title: 'Drinks',
    text: 'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture.',
    color: 'rgba(75, 160, 210, 0.8)',

    list: [
        {name: 'water'},
        {name: 'coffee', recipe: true, page: true},
        {name: 'tea', recipe: true},
        {name: 'lemonade', recipe: true},
        {name: 'juice'},
        {name: 'smoothie', recipe: true},
        {name: 'chocolate'},
        {name: 'mulled'},
        {name: 'cocktail', recipe: true},
        {name: 'cider'},
        {name: 'wine'},
        {name: 'mors'},
    ]
}

let soup = {
    name: 'soup',
    title: 'Soup',
    text: 'Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, milk, or water.',
    color: '#E6B43C',

    list: [
        {name: 'broth'},
        {name: 'stew'},
        {name: 'cream'},
        {name: 'tom yum'},
        {name: 'fish'},
        {name: 'chicken'},
        {name: 'onion'},
        {name: 'gazpacho'},
        {name: 'pho'},

    ]
}

let fruits = {
    name: 'fruits',
    title: 'Fruits',
    text: 'Fruits',
    color: '#ffd658',
    highlight: true,

    list: [
        {name: 'apple'},
        {name: 'blue berries'},
        {name: 'banana'},
        {name: 'orange'},
        {name: 'lemon'},
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
        {name: 'guacamole'},
        {name: 'salsa'},
        {name: 'mayonnaise'},
        {name: 'teriyaki'},
        {name: 'creamy'},
        {name: 'bolognese'},
        {name: 'pesto'},
        {name: 'hollandaise'},
    ]
}

let bread = {
    name: 'bread',
    title: 'Bread',
    text: 'Bread',
    color: '#FAD69E',
    highlight: true,

    list: [
        {name: 'white', recipe: true},
        {name: 'brown', recipe: true},
        {name: 'pancakes', recipe: true},
        {name: 'flour'},
        {name: 'yeast'},
        {name: 'pizza', recipe: true},
        {name: 'pie, recipe: true'},
        {name: 'dumplings', recipe: true},
        {name: 'pasta', recipe: true, page: true},
        {name: 'cake', recipe: true},
    ]
}

let rice = {
    name: 'rice',
    title: 'Rice',
    text: 'As a cereal grain, domesticated rice is the most widely consumed staple food for over half of the world\'s human population, especially in Asia and Africa. It is the agricultural commodity with the third-highest worldwide production, after sugarcane and maize.',
    color: '#FFF',
    highlight: true,

    list: [
        {name: 'plant'},
        {name: 'sushi'},
        {name: 'onigiri'},
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
        {name: 'ginger'},
        {name: 'garlic'},
        {name: 'curry'},
        {name: 'cinnamon'},
        {name: 'sugar'},
    ]
}

let herbs = {
    name: 'herbs',
    title: 'Herbs',
    text: 'Herbs',
    color: 'rgba(80, 140, 50, 0.8)',

    list: [
        {name: 'dill'},
        {name: 'parsley'},
        {name: 'mint'},
        {name: 'cilantro'},
        {name: 'basil'},


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
    text: 'Pickling',
    color: 'rgba(100, 60, 100, 0.8)',

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
    color: 'rgba(255, 255, 255, 0.8)',
    highlight: true,

    list: []
}

let dessert = {
    name: 'dessert',
    title: 'Dessert',
    text: 'Dessert',
    color: 'rgba(255,55,116,0.8)',

    list: []
}

let eggs = {
    name: 'eggs',
    title: 'Eggs',
    text: 'Eggs',
    color: '#fff',
    highlight: true,

    list: []
}

let coffee = {
    name: 'coffee',
    title: 'Coffee',
    text: 'Coffee',
    color: '#6F4E37',

    list: []
}

let pasta = {
    name: 'pasta',
    title: 'Pasta',
    text: 'Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. ',
    color: '#EECB7B',
    highlight: true,

    list: [
        {name: 'puttanesca'},
        {name: 'bolognese'},
        {name: 'carbonara'},
        {name: 'lasagne'},
        {name: 'amatriciana'},
    ]
}

let fridge = {
    name: 'fridge',
    title: 'Fridge',
    text: 'You have to store your food in the fridge and it will advise you what else to put there',
    color: '#1c5ad5',

    list: []
}

let awards = {
    name: 'awards',
    title: 'Awards',
    text: 'You can get different rewards for completing recipes and discovering ingredients. And for something else',
    color: '#ffd7b7',
    highlight: true,

    list: [
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

let chain = {
    name: 'chain',
    title: 'Chain',
    text: 'Chain',
    color: '#707070',
    highlight: true,

    list: []
}

let space = {
    name: 'space',
    title: 'Space',
    text: 'Space',
    color: '#181818',
    highlight: false,

    list: []
}

module.exports = [
    core,
    vegetables,
    meat,
    fish,
    drinks,
    awards,
    fridge,
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
    pasta,
    coffee,
    dessert,
    milk,
    equipment,
]
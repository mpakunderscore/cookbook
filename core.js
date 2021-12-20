let core = {
    name: 'food',
    title: 'Food',
    color: '#361F1F',

    list: []
}

let meat = {
    name: 'meat',
    title: 'Meat',
    color: '#A42E2F',

    list: [
        {name: 'steak', index: 394},
        {name: 'stew', index: 126},
        {name: 'slow', index: 600},
        {name: 'grill', index: 300},
        {name: 'bonfire', index: 0},
        {name: 'baked', index: 385},
        {name: 'chicken', index: 0},
        {name: 'ground', index: 0},
        {name: 'bolognese', index: 0},
        {name: 'kebab', index: 0},
        {name: 'meatball', index: 0},
        {name: 'smoked', index: 0}
    ]
}

// wellington

let fish = {
    name: 'fish',
    title: 'Fish',
    color: '#FA8072',

    list: [
        {name: 'raw'},
        {name: 'baked'},
        {name: 'fries'},
        {name: 'sushi'}
    ]
}

let chicken = {
    name: 'chicken',
    title: 'Chicken',
    color: '#e79087',

    list: [
        {name: 'fries'},
        {name: 'soup'}
    ]
}

let vegetables = {
    name: 'vegetables',
    title: 'Vegetables',
    color: '#62bb69',

    list: [
        {name: 'salad'},
        {name: 'pickled'},
        {name: 'baked'},
        {name: 'soup'}
    ]
}

let drinks = {
    name: 'drinks',
    title: 'Drinks',
    color: '#4BA0D2FF',

    list: [
        {name: 'coffee'},
        {name: 'tea'},
        {name: 'lemonade'},
        {name: 'smoothie'},
    ]
}

let soup = {
    name: 'soup',
    title: 'Soup',
    color: '#E6B43C',

    list: [
        {name: 'bouillon'},
        {name: 'stew'},
        {name: 'puree'}
    ]
}

let sauce = {
    name: 'sauce',
    title: 'Sauce',
    color: '#E86515',

    list: []
}

let bread = {
    name: 'bread',
    title: 'Bread',
    color: '#FAD69E',

    list: []
}

let rice = {
    name: 'rice',
    title: 'Rice',
    color: '#FFF',

    list: []
}

let spice = {
    name: 'spice',
    title: 'Spice',
    color: '#4b4848',

    list: []
}

let equipment = {
    name: 'equipment',
    title: 'Equipment',
    color: '#bdbdbd',

    list: [
        {name: 'knife'},
        {name: 'pan'},
        {name: 'oven'},
        {name: 'board'},
        {name: 'sharpener'}

    ]
}

module.exports = [
    core,
    meat,
    fish,
    vegetables,
    drinks,
    soup,
    sauce,
    bread,
    spice,
    rice,
    equipment,
]
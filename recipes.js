const colors = require("./colors")

let recipes = {

    vegetables: {
        salad: {
            name: 'salad 1',
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
        baked: {
            name: 'baked 2',
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
        boom: {
            name: 'boom 3',
            text: 'Wash and peel onions, carrots. Wash greens, stalks of celery and leeks and let the water drain. Cut the onions in half, cut the carrots in half lengthwise. Cut the celery and leek stalks into large pieces.\n' +
                'Put the pan on high heat and fry the onions and carrots without oil until dark brown.\n' +
                'Put a saucepan with 1.5 liters of water over medium heat and put the fried vegetables, celery, leek and parsley there. Bring broth to a boil, reduce heat to low and cook for another 30 minutes.\n' +
                'Finally add thyme, bay leaf, salt and peppercorns. Cover with a lid, remove from the stove and let it brew for 1-2 hours. Strain the broth through cheesecloth or a fine sieve.',
            list: []
        },
        'french fries': {
            name: 'french fries 4',
            text: 'Peel and wash vegetables. Cut the potatoes and carrots into 1 cm thick strips. Place vegetables in a deep bowl.\n' +
                'Let\'s prepare a herbal dressing. In a shallow bowl, mix together salt and sunflower oil. Add dried basil. Grind the peppercorns in a mortar, add to the overall mixture. Then add thyme. Mix well until smooth. Then, pour the resulting mixture over the vegetables. Mix well. Cover a baking sheet with baking paper, put vegetables. Oven, heat to 200 degrees, put a baking sheet in the oven and bake vegetables until tender. We take out ready-made vegetables and serve hot.',
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
        soup: {
            name: 'soup 5',
            text: 'Wash and peel vegetables. Boil the water. Season with salt to taste. Remove the peel from the tomato. Chop the onions, carrots and potatoes into small pieces. Put them first in boiling water, cook for 15 minutes. Disassemble the cauliflower into small inflorescences. Cut the peeled tomato into cubes, chop the dill. After 15 minutes, add cauliflower, peas and tomato to the soup. Boil for another 10 minutes. Season the soup with herbs, and then turn it off. Let it brew for 10-15 minutes - and serve with butter.',
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
        assorted: {
            name: 'assorted 6',
            text: 'Wash the vegetables, chop the tomatoes with a toothpick at the stalks. Remove the stalk with seeds from the pepper, cut into 4 parts. Peel the onion and cut into a couple of rings. Cut the apple into wedges, cut the garlic into cloves and peel. Chop the horseradish into small pieces. Put all the vegetables in a jar, pour boiling water over. Leave for 10 minutes. Drain and cook the brine, boil. Pour the vegetables over and roll up.',
            list: [
                {name: 'cucumber', color: colors.vegetables},
                {name: 'tomato', color: colors.vegetables},
                {name: 'pepper', color: colors.vegetables},
                {name: 'grape', color: colors.vegetables},
                {name: 'red onion', color: colors.vegetables},
                {name: 'apple', color: colors.vegetables},
                {name: 'horseradish', color: colors.vegetables},
                {name: 'carnations', color: colors.vegetables},
                {name: 'bay leave', color: colors.vegetables},
                {name: 'garlic', color: colors.vegetables},
                {name: 'sahara', color: colors.vegetables},
                {name: 'salt', color: colors.vegetables},
                {name: 'water', color: colors.vegetables},
                {name: 'citric acid', color: colors.vegetables}
            ]
        },

        pickled: {
            name: 'pickled 7',
            text: 'We cut all the vegetables. We cook the marinade. Bring our marinade to a boil and pour the prepared vegetables with it. Let it brew. The salad is ready in 12 hours, but it is better to wait a day.\n' +
                'For those who like spicy vegetables, you can reduce the amount of sugar and add adjika.\n' +
                'Bon Appetit!',
            list: [
                {name: 'cucumber', color: colors.vegetables},
                {name: 'tomato', color: colors.vegetables},
                {name: 'pepper', color: colors.vegetables},
                {name: 'grape', color: colors.vegetables},
                {name: 'red onion', color: colors.vegetables},
                {name: 'apple', color: colors.vegetables},
                {name: 'horseradish', color: colors.vegetables},
                {name: 'carnations', color: colors.vegetables},
                {name: 'bay leave', color: colors.vegetables},
                {name: 'garlic', color: colors.vegetables},
                {name: 'sahara', color: colors.vegetables},
                {name: 'salt', color: colors.vegetables},
                {name: 'water', color: colors.vegetables},
                {name: 'citric acid', color: colors.vegetables}
            ]
        },

        ratatouille: {
            name: 'ratatouille 8',
            text: 'Wash one zucchini and cut into thin slices. Wash one zucchini and cut into thin slices. Cut seven ripe tomatoes in the same way. For a sauce in a little vegetable oil, about two tablespoons, simmer one pepper and three tomatoes, previously cut into small cubes. Season with salt and pepper to taste. Grind the vegetables with an immersion blender until they become a thick sauce. Then pour the sauce into a baking dish and spread evenly over the bottom.\n' +
                'Place slices of vegetables on top of the sauce so that they alternate with each other. Cover the dish with parchment paper or foil and place in an oven preheated to 180 degrees for 30-35 minutes. The vegetables should be slightly firm.',
            list: []
        },

        relish: {
            name: 'relish 9',
            text: 'Wash vegetables, dry, peel onions and peppers. Remove tips from cucumbers and grate. Finely chop the rest of the vegetables. Add salt and mix well. It is advisable to leave the vegetable mixture salted in this form overnight. Then squeeze the vegetables well from the moisture released. Pour water into a bowl, add mustard seeds and sugar, bring to a boil. Transfer prepared vegetables and stir. Simmer the mixture over medium heat, stirring occasionally, for 10 minutes. Add vinegar and stir. Arrange the hot relish in prepared sterile jars and tighten the lids. Store the seasoning like any other preservation.\n'
        },

        broth: {
            text: ''
        },
        fries: {
            text: ''
        },
        fried: {
            text: ''
        },


        // ratatouille: {
        //     name: '',
        //     text: '',
        //     list: []
        // },
        // ratatouille: {
        //     name: '',
        //     text: '',
        //     list: []
        // },
        // ratatouille: {
        //     name: '',
        //     text: '',
        //     list: []
        // },
    },

    meat: {



        'beef stew': {
            name: 'beef stew 10',
            text: 'Cut the beef into random pieces.\n' +
                'Use a heavy-bottomed saucepan or deep skillet. Put pieces of beef there, pour a glass of boiling water. Put allspice, bay leaf, bring to a boil. Simmer over low heat, covered for about 30-40 minutes. Peel the onion, cut into large half rings, then half the rings. Peel the carrots, cut into cubes. When almost all the liquid in the saucepan has evaporated, pour vegetable oil into it. Add onion. Add carrots. Stir well, increase heat and fry vegetables and meat for about 5-10 minutes. Pour in another glass of boiling water, salt and pepper. Continue simmering the beef over low heat, covered for about 1-1.5 hours. The beef stew turns out to be soft, aromatic and very tasty!',
            list: []
        },

        steak: {
            name: 'steak 11',
            text: 'Pass the garlic through a press. Grind with salt and other spices. Dilute the mixture with olive oil.\n' +
                'Make shallow cuts on each steak on both sides. Grate each piece of meat with the prepared mixture and leave for 2 hours.\n' +
                'Preheat a grill pan and fry the steak on both sides for 2-3 minutes. Serve hot.'
        },

        stew: {
            name: 'stew 12',
            text: 'Peel the onion, wash and chop. Fry the prepared onion in a cauldron until transparent. Peel the carrots, wash and grate on a coarse grater. Add the prepared carrots to the cauldron to the onion and fry everything together for another five minutes.\n' +
                'First, the meat must be cleaned of excess fat and films, then washed well, dried with a towel and cut into small pieces. Add the prepared meat to the cauldron to the fried vegetables. Season the dish with pepper and salt to taste.\n' +
                'Mix the contents thoroughly. Fry the meat for 10-13 minutes. Pour the required amount of water into the fried meat. Bring the contents of the cauldron to boiling point. Simmer the meat covered for 35-40 minutes over the lowest heat. The dish is ready.\n'
        },

        slow: {
            name: 'slow 13',
            text: 'Wash the meat, dry it with a paper towel. Rub with salt, pepper, paprika, garlic and 2 tbsp. vegetable oil.Over medium heat, heat a large skillet, add the rest of the oil and place the meat in the skillet. Fry for 4 minutes on each side. Turn meat every 4 minutes !! \n' +
                'A nice crust should form. Preheat the oven to 120˚ С. Put the meat on a wire rack inserted into a heat-resistant dish. Insert the meat into the oven, turning from time to time, for 3-4 hours, until the temperature inside the meat rises to 60Cᵒ, or 70C, for full readiness, according to world standards, overexposed meat. Take out the meat, put it on a wire rack, placed on a clean plate or dish and LET\'S RELAX! Remove the culinary thread and DO NOT TOUCH the meat 15-20 minutes after removing it!',
        },

        grill: {
            name: 'grill 14',
            text: 'The cuts of meat should be cut in the direction of the fibers, contain layers of fat. The thickness of the meat pieces can be up to 4 cm in order for the meat to roast well. The weight of one piece of meat is 250-300 grams. Collect the pieces of the collar from the bits of bits that remain after the cleaning of the carcass, wash and dry with paper towels. Place the cooked meat on a plate. sprinkle the pork on both sides with young coriander and black pepper - it is even better to grind a few peas, and grind with a pinch of large salt. Leave the meat for "dry" marinating in a cold place for up to 1 hour. heat the electric grill at maximum power. Grease the meat with a small amount of vegetable oil. Place the pieces of meat on the grill, making sure that it will cook well. The total roasting time for pork can be 20-40 minutes. So that the meat on the grill is evenly roasted, it is necessary to turn the pieces of the neck every 5 minutes.\n' +
                'Fry the meat on the grill for over half a day. Place the cooked meat on the grill on the hot plates until it still sizzles.'
        },

        bonfire: {
            name: 'bonfire 15',
            text: 'You can make a great shish kebab from the meat of ungulates. For these purposes, take the pulp of the hind leg, wash it, cut it into small pieces, put it in a bowl, sprinkle with salt and pepper. Finely chopped onions, vinegar or 1 teaspoon of lemon juice are also added here. All this is mixed. The dishes are covered with a lid and placed in a cool place for 2-3 hours. Before frying, pickled pieces of game are strung on a skewer or wooden sticks, interspersed with onions, bacon, tomatoes. After 20-30 minutes, the kebab is ready.'
        },

        baked: {
            name: 'baked 16',
            text: 'We need a piece of meat, I have pork. We will wash it and dry it. Cut the pork across the grain, 1 cm wide. Do not beat off the meat. Place the sliced meat in a cup. Salt, add mayonnaise, any spices you have at home. Mix everything well and close the lid, remove for 5 hours. I put it in the refrigerator if it\'s warm at home, or on the floor. Making a side dish. Wash the potatoes, don\'t peel them. Cut into 4 pieces. Put in a cup and again salt, pepper, and pour in a little oil. And we put everything on the sheet. We bake everything in a preheated oven at 200 degrees, 45 minutes.\n' +
                'Well, that\'s all, a delicious dinner is ready!'
        },

        burger: {
            name: 'burger 17',
            text: 'Strip the tenderloin from films and tendons. Rinse the meat and lard and chop coarsely.\n' +
                'Grind the meat along with the fat through a meat grinder. Peel the onion and chop very finely. Heat the olive oil in a saucepan, add the onions and simmer over low heat until light brown and give off natural sugar.\n' +
                'Add the stewed onion, very finely chopped parsley leaves, yolks, mustard, Worcestershire sauce, salt and pepper to the minced meat. Knead the minced meat well with your hands.\n' +
                'Take a flat baking sheet or tray and brush it with olive oil. Use your hands soaked in water to mold the burger patties. Send the patties to the freezer for 2-3 hours without covering them with anything.\n' +
                'Heat some olive oil in a grill pan. Place the patties and fry for 3-4 minutes on each side until golden brown. Then put it in an oven preheated to 180 ˚C for 3-4 minutes.'
        },

        bolognese: {
            name: 'bolognese 18',
            text: 'Preparation:\n' +
                'Heat olive oil in a large skillet and add chopped garlic, onions, carrots and celery. Simmer over low heat for 5 minutes until vegetables are soft.\n' +
                'Increase heat and add meat. Stir with a wooden spatula to break up the lumps. Add broth, wine, tomatoes, sugar and parsley. Bring to a boil, reduce heat, and simmer for 1.5 hours, stirring occasionally. Season with salt and spices.\n' +
                'Cook the spaghetti before serving, drain and serve with the sauce and parmesan.\n'
        },

        kebab: {
            name: 'kebab 19',
            text: 'Cut the meat into 4 × 5cm pieces.\n' +
                'Cut the onion into washers 2-3 mm thick.\n' +
                'Put the meat in a bowl, salt (2 tsp without top, pepper (0.5 tsp freshly ground pepper), pour water (0.3 l) and add 2 tbsp vinegar.\n' +
                'Transfer the meat to the onion. We put the meat under the press.\n' +
                'Cover the bowl with foil, put a plate of a smaller diameter than the diameter of the bowl on the meat and place the load on top.\n' +
                'Marinate the meat for at least an hour. We string the meat on skewers along the fibers, alternating with onion washers. We fry the kebab, often turning it over and moistening with the remnants of the marinade or plain water. Ready!'
        },

        meatballs: {
            name: 'meatballs 20',
            text: 'Peel the onion and chop finely or chop with a blender.\n' +
                'Use a pork tenderloin grinder to mince. Skip it twice for a softer mince.\n' +
                'Beat the egg with a fork and add to the minced meat.\n' +
                'Squeeze the garlic into the minced meat, add the onion, salt, pepper and stir with your hands.\n' +
                'Form future meatballs with wet hands and place them on a board.\n' +
                'Send some to the soup, and freeze the rest.'
        },
        smoked: {
            name: 'smoked 21',
            text: 'Prepare the required ingredients. Place clean and dry chicken fillet in a deep bowl. Sprinkle with salt, black pepper and paprika. Rub each part with your hands. Tighten the bowl with plastic wrap and refrigerate for 8 to 12 hours. Prepare the smoker before smoking. We will smoke hot. Pour fruit or alder sawdust into the bottom of the smoker. Sprinkle lightly with water. Place the chicken fillets a short distance from each other on the grill of the smoker. Place the wire rack in the smoker, cover and put on fire. From now on, timed 30 minutes. After the time has passed, carefully remove the grill with the smoked fillets. Chill the fillet. Refrigerate for at least two hours. After the appetizer can be served.'
        }
    }
}

module.exports = recipes
var pizza_info = [
    {
        id:1,
        icon:'assets/images/sushi-1.jpg',
        title: "Дасай",
        type: 'зелений рай',
        content: {
            vegetable: ['огурец', 'помидоры'],
            avocado: ['авокадо'],
            mushroom: ['шампиньйоны'],
            greenery: ['лист салата', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true,
        is_bought: false

    },
    {
        id:2,
        icon:'assets/images/sushi-2.jpg',
        title: "Пазл",
        type: 'овочевий',
        content: {
            vegetable: ['огурец', 'помидоры'],
            mushroom: [ 'шиитаке'],
            greenery: ['лист салата', 'петрушка'],
            additional: ['имбир', 'соевий соус', 'васабі']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/sushi-3.jpg',
        title: "Жовте сонце",
        type: 'ніжний',
        content: {
            vegetable: ['огурец', 'помидоры', 'морква'],
            greenery: ['лист салата', 'петрушка'],
            additional: ['имбир', 'соевий соус', 'васабі']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        },

    },
    {
        id:4,
        icon:'assets/images/sushi-7.jpg',
        title: "Дайкири",
        type: 'оригінальні',
        content: {
            vegetable: ['огурец', ],
            avocado: ['авокадо'],
            mushroom: ['шампиньйоны', 'шиитаке'],
            greenery: ['лист салата', 'петрушка'],
            additional: ['чука','имбир', 'соевий соус', 'васабі']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }

    },
    {
        id:5,
        icon:'assets/images/sushi-5.jpg',
        title: "Захід сонця",
        type: 'сонячні',
        content: {
            vegetable: ['огурец','помидори' , 'болгарский перец' ],
            avocado: ['авокадо'],
            greenery: ['лист салата', 'петрушка'],
            additional: ['кухня','имбир', 'соевий соус', 'васабі']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        },
        is_popular:true
    },
    {
        id:43,
        icon:'assets/images/sushi-6.jpg',
        title: "Ролл-сет",
        type: 'усе разом',
        content: {
            vegetable: ['огурец', 'помидоры','болгарский перець', 'морква'],
            avocado: ['авокадо'],
            mushroom: ['шампиньйоны', 'шиитаке'],
            greenery: ['лист салата', 'петрушка']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },

];

module.exports = pizza_info;
import onDisplay from "../utils/onDisplay";
import render from "../utils/render";





const menuItems = [
    {
        id: "chocolate-nuts",
        title: 'Nutty Chocolate Dream',
        description: 'Macaroon oat cake shortbread topping jelly sugar plum jelly beans chocolate cake brownie. Topping cookie biscuit chocolate cake pie. Marzipan caramels shortbread croissant donut ice cream sweet.',
        imageUrl: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        srcUrl: 'https://unsplash.com/photos/90HdOlGbjck',
        price: '10.99$',
        allergens: {
            lactose: true,
            nuts: true,
            gluten: true,
            egg: true,
        }
    },
    {
        id: "sprinkles",
        title: 'Sprinkley',
        description: 'Fruitcake cake oat cake gummies cheesecake shortbread. Dragée tiramisu bonbon powder powder topping sweet roll. Cupcake biscuit gummies cheesecake dragée marzipan.',
        imageUrl: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        srcUrl: 'https://unsplash.com/photos/zEwgRzJJIvk',
        price: '10.99$',
        allergens: {
            lactose: true,
            nuts: false,
            gluten: true,
            egg: true,
        }
    },
    {
        id: "non-allergenic",
        title: 'Non allergenic supercake',
        description: 'Halvah chocolate soufflé pudding jelly-o jelly beans sweet roll. Croissant jelly sweet roll apple pie donut dragée fruitcake carrot cake dragée. Bear claw cake pastry donut bear claw gummies. Muffin chupa chups marshmallow gummi bears pudding pastry powder jelly wafer.',
        imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        srcUrl: 'https://unsplash.com/photos/S2jw81lfrG0',
        price: '11.99$',
        allergens: {
            lactose: false,
            nuts: false,
            gluten: false,
            egg: false,
        }
    },
    {
        id: "gluten-free-cherry-cake",
        title: 'Gluten Free Cherry Cake',
        description: 'Chocolate cake liquorice marzipan apple pie gummies soufflé apple pie sweet roll. Jelly beans sweet dessert chocolate sweet roll sesame snaps marzipan. Cupcake gingerbread sweet chocolate cake marzipan sugar plum sweet roll icing. Cake biscuit pie gingerbread chupa chups halvah.',
        imageUrl: 'https://images.unsplash.com/photo-1596223575327-99a5be4faf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        srcUrl: 'https://unsplash.com/photos/zyMJwFBg8u8',
        price: '8.99$',
        allergens: {
            lactose: true,
            nuts: false,
            gluten: false,
            egg: true,
        }
    },
    {
        id: "chocolate-cream",
        title: 'Chocolate Cream',
        description: 'Ice cream muffin candy carrot cake gummi bears. Cake pie cookie oat cake croissant cupcake sweet roll. Tootsie roll muffin jelly cookie soufflé cookie biscuit cake.',
        imageUrl: 'https://images.unsplash.com/photo-1634586130269-a2defb4da4de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        srcUrl: 'https://unsplash.com/photos/zALugo2vI8c',
        price: '9.99$',
        allergens: {
            lactose: true,
            nuts: true,
            gluten: true,
            egg: true,
        }
    },
    {
        id: "belgian-waffles",
        title: 'Belgian waffles',
        description: 'Topping sugar plum marzipan donut jujubes gummi bears tootsie roll dessert sugar plum. Pastry candy tart jelly-o muffin. Jelly shortbread chupa chups gingerbread chocolate bear claw macaroon. Cotton candy candy pie gingerbread sweet roll.',
        imageUrl: 'https://images.unsplash.com/photo-1623246123320-0d6636755796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        srcUrl: 'https://unsplash.com/photos/FIxdY7jOBus',
        price: '11.99$',
        allergens: {
            lactose: true,
            nuts: false,
            gluten: true,
            egg: true,
        }
    },
]

export default menuItems
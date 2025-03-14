const burgerData = {
    categories: [
        // Burgers
        {
            id: 1,
            name: "Classic Supermac's Burger",
            description: "Our signature beef patty with fresh lettuce, tomato, and special sauce",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 6.99,
            mealOptions: [
                { type: "Single Burger", price: 6.99, includes: "Burger only" },
                { type: "Meal Deal", price: 9.99, includes: "Fries and Drink" },
                { type: "Large Meal", price: 11.99, includes: "Large Fries, Large Drink, and Dip" }
            ]
        },
        {
            id: 2,
            name: "Double Cheese Supreme",
            description: "Double beef patties with melted cheese, bacon, and caramelized onions",
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 8.99,
            mealOptions: [
                { type: "Single Burger", price: 8.99, includes: "Burger only" },
                { type: "Meal Deal", price: 11.99, includes: "Fries and Drink" },
                { type: "Large Meal", price: 13.99, includes: "Large Fries, Large Drink, and Dip" }
            ]
        },
        {
            id: 3,
            name: "Spicy BBQ Ranch",
            description: "Spicy beef patty with BBQ sauce, ranch dressing, and crispy onion rings",
            image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 7.99,
            mealOptions: [
                { type: "Single Burger", price: 7.99, includes: "Burger only" },
                { type: "Meal Deal", price: 10.99, includes: "Fries and Drink" },
                { type: "Large Meal", price: 12.99, includes: "Large Fries, Large Drink, and Dip" }
            ]
        },
        // Chicken Items
        {
            id: 4,
            name: "Crispy Chicken Supreme",
            description: "Crispy breaded chicken fillet with lettuce and mayo",
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 6.49,
            mealOptions: [
                { type: "Single Sandwich", price: 6.49, includes: "Sandwich only" },
                { type: "Meal Deal", price: 9.49, includes: "Fries and Drink" },
                { type: "Large Meal", price: 11.49, includes: "Large Fries, Large Drink, and Dip" }
            ]
        },
        {
            id: 5,
            name: "Spicy Chicken Wings",
            description: "8 pieces of spicy wings with your choice of sauce",
            image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 7.99,
            mealOptions: [
                { type: "Wings Only", price: 7.99, includes: "8 Wings and Sauce" },
                { type: "Wings Meal", price: 10.99, includes: "8 Wings, Fries, Drink, and Extra Sauce" },
                { type: "Family Pack", price: 15.99, includes: "12 Wings, 2 Large Fries, and 3 Sauces" }
            ]
        },
        {
            id: 6,
            name: "Chicken Tenders Box",
            description: "Premium chicken tenders with choice of dipping sauce",
            image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 6.99,
            mealOptions: [
                { type: "3 Pieces", price: 6.99, includes: "3 Tenders and Sauce" },
                { type: "5 Pieces", price: 9.99, includes: "5 Tenders and 2 Sauces" },
                { type: "Family Box", price: 16.99, includes: "10 Tenders, 2 Large Fries, and 3 Sauces" }
            ]
        },
        // Sides
        {
            id: 7,
            name: "Golden Fries",
            description: "Crispy golden fries seasoned to perfection",
            image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 2.99,
            mealOptions: [
                { type: "Regular", price: 2.99, includes: "Regular portion" },
                { type: "Large", price: 3.99, includes: "Large portion" },
                { type: "Family Size", price: 5.99, includes: "Extra large portion" }
            ]
        },
        {
            id: 8,
            name: "Onion Rings",
            description: "Crispy battered onion rings",
            image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 3.49,
            mealOptions: [
                { type: "Regular", price: 3.49, includes: "Regular portion" },
                { type: "Large", price: 4.49, includes: "Large portion" },
                { type: "Family Size", price: 6.49, includes: "Extra large portion" }
            ]
        },
        // Drinks
        {
            id: 9,
            name: "Soft Drinks",
            description: "Choice of Coca-Cola, Sprite, Fanta, or Diet Coke",
            image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 1.99,
            mealOptions: [
                { type: "Regular", price: 1.99, includes: "Regular size" },
                { type: "Large", price: 2.49, includes: "Large size" },
                { type: "Extra Large", price: 2.99, includes: "Extra large size" }
            ]
        },
        {
            id: 10,
            name: "Milkshakes",
            description: "Creamy milkshakes in vanilla, chocolate, or strawberry",
            image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 3.99,
            mealOptions: [
                { type: "Regular", price: 3.99, includes: "Regular size" },
                { type: "Large", price: 4.99, includes: "Large size" },
                { type: "Premium", price: 5.99, includes: "Large size with toppings" }
            ]
        },
        // Desserts
        {
            id: 11,
            name: "Ice Cream Sundae",
            description: "Vanilla ice cream with choice of toppings",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 3.99,
            mealOptions: [
                { type: "Classic", price: 3.99, includes: "1 topping" },
                { type: "Deluxe", price: 4.99, includes: "2 toppings and whipped cream" },
                { type: "Supreme", price: 5.99, includes: "3 toppings, whipped cream, and cherry" }
            ]
        },
        {
            id: 12,
            name: "Apple Pie",
            description: "Warm apple pie with cinnamon",
            image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600",
            startingPrice: 2.99,
            mealOptions: [
                { type: "Single Pie", price: 2.99, includes: "1 piece" },
                { type: "Pie with Ice Cream", price: 4.49, includes: "Pie and vanilla ice cream" },
                { type: "Family Pack", price: 9.99, includes: "4 pieces" }
            ]
        }
    ]
};

// Menu data with prices and detailed descriptions
const menuItems = [
    {
        id: 1,
        name: "Classic Burger",
        price: 8.99,
        description: "Our signature beef patty with fresh lettuce, tomato, onions, pickles, and our special sauce, served on a toasted brioche bun.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        category: "Burgers"
    },
    {
        id: 2,
        name: "Cheese Burger",
        price: 9.99,
        description: "Our classic burger topped with melted cheddar cheese, fresh vegetables, and house sauce. A timeless favorite for cheese lovers.",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        category: "Burgers"
    },
    {
        id: 3,
        name: "Bacon Burger",
        price: 10.99,
        description: "Juicy beef patty topped with crispy bacon strips, melted cheese, lettuce, tomato, and our signature sauce. A meat lover's dream.",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        category: "Burgers"
    },
    {
        id: 4,
        name: "Veggie Burger",
        price: 9.49,
        description: "Plant-based patty with fresh avocado, lettuce, tomato, red onion, and vegan mayo. Perfect for vegetarians and veggie lovers.",
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        category: "Burgers"
    },
    {
        id: 5,
        name: "French Fries",
        price: 3.99,
        description: "Crispy golden fries, perfectly seasoned with our special blend of herbs and spices. The ideal side for any burger.",
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        category: "Sides"
    },
    {
        id: 6,
        name: "Onion Rings",
        price: 4.49,
        description: "Thick-cut onion rings in a crispy beer batter, fried to golden perfection. Served with our tangy dipping sauce.",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        category: "Sides"
    },
    {
        id: 7,
        name: "Chocolate Milkshake",
        price: 4.99,
        description: "Rich and creamy chocolate milkshake made with premium ice cream and topped with whipped cream and chocolate syrup.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        category: "Drinks"
    },
    {
        id: 8,
        name: "Strawberry Milkshake",
        price: 4.99,
        description: "Sweet and refreshing strawberry milkshake made with real strawberries and premium ice cream, topped with whipped cream.",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400",
        category: "Drinks"
    }
];
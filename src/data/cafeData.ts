export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  isVeg: boolean;
  image: string;
  ingredients?: string[];
  tag?: 'Bestseller' | 'Chillax Special' | 'Must Try' | 'Popular' | 'Chef Choice';
  calories?: string;
  portion?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  itemCount: number;
  highlightItem: string;
}

export const CAFE_INFO = {
  name: "Chillax Cafe",
  tagline: "Where Flavour Meets Chill",
  address: "Perumpillichira - Paara Rd, Kumaramangalam, Thodupuzha, Kerala 685608, India",
  locality: "Kumaramangalam, Thodupuzha",
  phones: [
    { display: "89430 79187", raw: "918943079187" },
    { display: "94465 13393", raw: "919446513393" }
  ],
  instagramUrl: "https://www.instagram.com/chillaaxx_/",
  instagramHandle: "@chillaaxx_",
  googleMapsUrl: "https://maps.google.com/?q=Chillax+Cafe+Perumpillichira+-+Paara+Rd+Kumaramangalam+Thodupuzha+Kerala+685608",
  googleMapsEmbedQuery: "Chillax+Cafe+Kumaramangalam+Thodupuzha",
  deliveryNote: "Delivery available across Kumaramangalam, Perumpillichira, Vengallur & surrounding Thodupuzha areas. Direct WhatsApp & Call orders welcome. Delivery time may vary depending on location and order volume.",
  rating: 4.8,
  reviewCount: 122
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "milkshakes",
    name: "Milkshakes",
    iconName: "Milk",
    description: "Thick, creamy blends made with premium ice cream and rich toppings",
    itemCount: 10,
    highlightItem: "Sharjah Shake & Oreo Crush"
  },
  {
    id: "avil-milks",
    name: "Avil Milks",
    iconName: "CupSoda",
    description: "Authentic Kerala specialty with roasted flattened rice, bananas & nuts",
    itemCount: 7,
    highlightItem: "Special Royal Avil Milk"
  },
  {
    id: "fresh-juices",
    name: "Fresh Juices",
    iconName: "Citrus",
    description: "100% natural freshly squeezed tropical fruits without artificial syrup",
    itemCount: 9,
    highlightItem: "Mint Lime & Watermelon"
  },
  {
    id: "mojitos",
    name: "Mojitos",
    iconName: "GlassWater",
    description: "Sparkling crushed ice mocktails infused with garden mint and fresh lime",
    itemCount: 7,
    highlightItem: "Blue Curacao & Virgin Mint"
  },
  {
    id: "burgers",
    name: "Burgers",
    iconName: "Sandwich",
    description: "Juicy toasted brioche burgers loaded with melted cheese and house sauces",
    itemCount: 7,
    highlightItem: "Chillax Special Double Patty"
  },
  {
    id: "french-fries",
    name: "French Fries",
    iconName: "Flame",
    description: "Golden crispy potato cut fries tossed in signature house seasonings",
    itemCount: 5,
    highlightItem: "Loaded Chicken Peri Peri Fries"
  },
  {
    id: "momos",
    name: "Momos",
    iconName: "Utensils",
    description: "Steaming hot handmade dumplings with fiery Himalayan red chutney",
    itemCount: 7,
    highlightItem: "Chicken Fried & Peri Peri Momos"
  },
  {
    id: "faloodas",
    name: "Faloodas",
    iconName: "IceCream",
    description: "Rich layered dessert glasses with vermicelli, basil seeds, jelly & scoops",
    itemCount: 5,
    highlightItem: "Chillax Royal Falooda"
  },
  {
    id: "tea-coffee",
    name: "Tea & Coffee",
    iconName: "Coffee",
    description: "Traditional Malabar Sulaimani, brewed filter coffees and cold brews",
    itemCount: 8,
    highlightItem: "Malabar Sulaimani & Cold Coffee"
  },
  {
    id: "appetizers",
    name: "Appetizers",
    iconName: "Sparkles",
    description: "Crispy bites, chicken popcorn, nuggets, and cheesy finger foods",
    itemCount: 7,
    highlightItem: "Crispy Chicken Popcorn"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. Milkshakes
  {
    id: "ms-1",
    name: "Sharjah Shake",
    category: "milkshakes",
    price: 80,
    description: "The classic Kerala favorite made with sweet bananas, chilled milk, Horlicks and vanilla scoop.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Sweet Bananas", "Chilled Full Cream Milk", "Horlicks Malt", "Vanilla Ice Cream Scoop"],
    tag: "Bestseller"
  },
  {
    id: "ms-2",
    name: "Chocolate Delight Shake",
    category: "milkshakes",
    price: 90,
    description: "Rich blended chocolate ice cream topped with chocolate drizzle and chocochips.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Chocolate Ice Cream", "Fresh Milk", "Rich Chocolate Drizzle", "Choco Chips"],
    tag: "Popular"
  },
  {
    id: "ms-3",
    name: "Oreo Overload Shake",
    category: "milkshakes",
    price: 100,
    description: "Thick vanilla milkshake blended with crunchy Oreo cookies and dark chocolate sauce.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1588775402772-7a8e7cf6b499?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Vanilla Ice Cream", "Oreo Biscuits", "Chilled Milk", "Dark Chocolate Sauce"],
    tag: "Must Try"
  },
  {
    id: "ms-4",
    name: "KitKat Crunch Shake",
    category: "milkshakes",
    price: 110,
    description: "Crispy wafer KitKat chocolate bars blended smooth with vanilla ice cream and whipped top.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
    ingredients: ["KitKat Wafer Chocolate", "Vanilla Ice Cream", "Whipped Cream", "Milk"],
    tag: "Popular"
  },
  {
    id: "ms-5",
    name: "Snickers Peanut Butter Shake",
    category: "milkshakes",
    price: 120,
    description: "Decadent caramel, nougat, peanuts and chocolate blended into an irresistible shake.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Snickers Bar", "Caramel Sauce", "Roasted Peanuts", "Ice Cream", "Nougat Blend"],
    tag: "Chillax Special"
  },
  {
    id: "ms-6",
    name: "Mango Magic Shake",
    category: "milkshakes",
    price: 90,
    description: "Sun-ripened Alphonso mango pulp blended with creamy ice cream.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Alphonso Mango Pulp", "Vanilla Ice Cream", "Chilled Milk"]
  },
  {
    id: "ms-7",
    name: "Strawberry Bliss Shake",
    category: "milkshakes",
    price: 90,
    description: "Luscious strawberry puree combined with chilled fresh milk and strawberry ice cream.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Strawberry Puree", "Chilled Fresh Milk", "Strawberry Ice Cream"]
  },
  {
    id: "ms-8",
    name: "Butterscotch Crunch Shake",
    category: "milkshakes",
    price: 95,
    description: "Golden butterscotch shake loaded with crunchy praline nuts.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Butterscotch Sauce", "Praline Caramel Nuts", "Vanilla Cream", "Milk"]
  },
  {
    id: "ms-9",
    name: "Cold Coffee Shake",
    category: "milkshakes",
    price: 100,
    description: "Strong espresso roast whipped with rich milk and sweet vanilla ice cream.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Roasted Espresso", "Creamy Milk", "Vanilla Ice Cream", "Sugar"],
    tag: "Bestseller"
  },
  {
    id: "ms-10",
    name: "Tender Coconut Special",
    category: "milkshakes",
    price: 110,
    description: "Fresh coastal Elaneer tender coconut flesh pureed with chilled milk and honey.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Tender Coconut (Elaneer)", "Pure Honey", "Chilled Milk"],
    tag: "Chillax Special"
  },

  // 2. Avil Milks
  {
    id: "am-1",
    name: "Classic Malabar Avil Milk",
    category: "avil-milks",
    price: 60,
    description: "Crispy roasted rice flakes (avil), mashed sweet bananas, roasted peanuts and chilled milk.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Roasted Beaten Rice Flakes (Avil)", "Mashed Sweet Bananas", "Roasted Peanuts", "Chilled Milk"],
    tag: "Bestseller"
  },
  {
    id: "am-2",
    name: "Special Dry Fruit Avil Milk",
    category: "avil-milks",
    price: 80,
    description: "Crunchy avil, bananas, roasted cashews, badam, raisins and cardamom-infused milk.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Toasted Avil", "Ripe Bananas", "Roasted Cashews", "Sliced Badam (Almonds)", "Raisins", "Cardamom Milk"],
    tag: "Must Try"
  },
  {
    id: "am-3",
    name: "Royal Avil Milk with Ice Cream",
    category: "avil-milks",
    price: 100,
    description: "The ultimate indulgence: layered dry fruit avil milk crowned with a generous scoop of ice cream.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Layered Avil", "Mashed Bananas", "Rich Dry Fruits", "Vanilla Ice Cream Scoop", "Chilled Milk"],
    tag: "Chillax Special"
  },
  {
    id: "am-4",
    name: "Chocolate Avil Milk",
    category: "avil-milks",
    price: 90,
    description: "Layered roasted avil and bananas stirred with rich chocolate syrup and cocoa.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Roasted Avil", "Fresh Bananas", "Chocolate Syrup", "Pure Cocoa", "Chilled Milk"]
  },
  {
    id: "am-5",
    name: "Boost Avil Milk",
    category: "avil-milks",
    price: 80,
    description: "Power-packed Kerala student favorite with malt Boost powder and roasted nuts.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Boost Malt Powder", "Roasted Avil", "Mashed Bananas", "Roasted Peanuts", "Chilled Milk"],
    tag: "Popular"
  },
  {
    id: "am-6",
    name: "Horlicks Avil Milk",
    category: "avil-milks",
    price: 80,
    description: "Malted grain comfort with crunchy toasted beaten rice and sliced banana.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Horlicks Malt", "Toasted Avil Flakes", "Sweet Bananas", "Chilled Fresh Milk"]
  },
  {
    id: "am-7",
    name: "Mango Avil Milk",
    category: "avil-milks",
    price: 90,
    description: "Seasonal mango pulp layered with crispy avil and cold milk.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Mango Pulp", "Crispy Avil", "Sliced Bananas", "Cold Milk"]
  },

  // 3. Fresh Juices
  {
    id: "fj-1",
    name: "Fresh Lime Juice",
    category: "fresh-juices",
    price: 30,
    description: "Freshly squeezed Kerala lime with choice of sweet or salt.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Freshly Squeezed Lime", "Purified Water", "Sugar or Rock Salt", "Ice"]
  },
  {
    id: "fj-2",
    name: "Mint Lime Cooler",
    category: "fresh-juices",
    price: 40,
    description: "Zesty freshly pressed lime juice blended with fragrant garden mint leaves.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Mint Leaves", "Fresh Lime Juice", "Chilled Water", "Cane Sugar"],
    tag: "Bestseller"
  },
  {
    id: "fj-3",
    name: "Ginger Lime Punch",
    category: "fresh-juices",
    price: 40,
    description: "Invigorating kick of crushed fresh ginger with fresh lime and ice.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Crushed Fresh Ginger Root", "Fresh Lime Juice", "Chilled Water", "Ice"]
  },
  {
    id: "fj-4",
    name: "Fresh Watermelon Juice",
    category: "fresh-juices",
    price: 60,
    description: "Pure chilled watermelon juice, naturally sweet and ultra hydrating.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=600&q=80",
    ingredients: ["100% Fresh Seedless Watermelon", "Crushed Ice"],
    tag: "Popular"
  },
  {
    id: "fj-5",
    name: "Fresh Orange Juice",
    category: "fresh-juices",
    price: 70,
    description: "Sweet citrus orange juice pressed fresh to order, packed with Vitamin C.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Pressed Citrus Oranges", "Light Ice"]
  },
  {
    id: "fj-6",
    name: "Mosambi (Sweet Lime) Juice",
    category: "fresh-juices",
    price: 70,
    description: "Naturally sweet and refreshing mosambi juice.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Sweet Lime (Mosambi)", "Pinch of Black Salt", "Ice"]
  },
  {
    id: "fj-7",
    name: "Pineapple Juice",
    category: "fresh-juices",
    price: 70,
    description: "Tangy sweet tropical pineapple nectar served over crushed ice.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Ripe Tropical Pineapples", "Chilled Water", "Crushed Ice"]
  },
  {
    id: "fj-8",
    name: "Fresh Grape Juice",
    category: "fresh-juices",
    price: 70,
    description: "Crushed sweet black seedless grapes with a hint of natural tang.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1596333561100-2d6129239999?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Sweet Black Grapes", "Chilled Water", "Light Sugar"]
  },
  {
    id: "fj-9",
    name: "Anar (Pomegranate) Juice",
    category: "fresh-juices",
    price: 90,
    description: "Pure antioxidant-rich ruby red pomegranate seeds cold-pressed.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Ruby Pomegranate Seeds", "Cold Press Extraction"],
    tag: "Must Try"
  },

  // 4. Mojitos
  {
    id: "mj-1",
    name: "Virgin Mint Mojito",
    category: "mojitos",
    price: 80,
    description: "Crushed fresh mint leaves, lime wedges, simple cane syrup and effervescent soda.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Mint Leaves", "Fresh Lime Wedges", "Cane Sugar Syrup", "Sparkling Club Soda", "Crushed Ice"],
    tag: "Bestseller"
  },
  {
    id: "mj-2",
    name: "Blue Curacao Mojito",
    category: "mojitos",
    price: 90,
    description: "Vibrant ocean-blue citrus mocktail with bubbly soda and crisp mint.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Blue Curacao Citrus Syrup", "Fresh Mint", "Lime Juice", "Effervescent Soda", "Crushed Ice"],
    tag: "Popular"
  },
  {
    id: "mj-3",
    name: "Green Apple Mojito",
    category: "mojitos",
    price: 90,
    description: "Crisp tart green apple syrup muddled with fresh mint sprigs and lime.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Green Apple Essence", "Muddled Mint Sprigs", "Lime Wedges", "Bubbly Soda"],
    tag: "Must Try"
  },
  {
    id: "mj-4",
    name: "Passion Fruit Mojito",
    category: "mojitos",
    price: 90,
    description: "Exotic tropical passion fruit puree with refreshing mint and citrus soda.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Tropical Passion Fruit Pulp", "Fresh Mint Leaves", "Citrus Lime", "Sparkling Soda"],
    tag: "Chillax Special"
  },
  {
    id: "mj-5",
    name: "Watermelon Mojito",
    category: "mojitos",
    price: 90,
    description: "Crushed juicy watermelon chunks with mint, lime and sparkling soda.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Watermelon Chunks", "Muddled Mint", "Lime Juice", "Club Soda"]
  },
  {
    id: "mj-6",
    name: "Blackcurrant Mojito",
    category: "mojitos",
    price: 90,
    description: "Deep berry sweetness of ripe blackcurrant balanced with tart lime.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Blackcurrant Syrup", "Fresh Mint", "Lime Wedges", "Soda", "Crushed Ice"]
  },
  {
    id: "mj-7",
    name: "Lemon Iced Tea",
    category: "mojitos",
    price: 70,
    description: "Slow-brewed Nilgiri black tea infused with fresh lemon and mint on the rocks.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Slow-Brewed Nilgiri Black Tea", "Fresh Squeezed Lemon", "Mint Sprigs", "Honey", "Ice Cubes"]
  },

  // 5. Burgers
  {
    id: "bg-1",
    name: "Classic Veg Burger",
    category: "burgers",
    price: 90,
    description: "Crispy seasoned vegetable patty, crunchy iceberg lettuce, tomato, onions and garlic mayo.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Seasoned Vegetable Patty", "Iceberg Lettuce", "Fresh Tomato", "Onions", "Garlic Mayo", "Toasted Bun"]
  },
  {
    id: "bg-2",
    name: "Crispy Veg Cheese Burger",
    category: "burgers",
    price: 110,
    description: "Crispy herb vegetable patty topped with melted cheddar slice and spicy burger sauce.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Crispy Herb Veg Patty", "Melted Cheddar Cheese Slice", "Spicy Burger Relish", "Lettuce", "Toasted Bun"],
    tag: "Popular"
  },
  {
    id: "bg-3",
    name: "Crispy Chicken Burger",
    category: "burgers",
    price: 130,
    description: "Golden fried juicy chicken fillet, crisp lettuce, house mayo on a toasted sesame bun.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Golden Fried Chicken Fillet", "Crisp Iceberg Lettuce", "Signature House Mayo", "Toasted Sesame Bun"],
    tag: "Bestseller"
  },
  {
    id: "bg-4",
    name: "Spicy Peri Peri Chicken Burger",
    category: "burgers",
    price: 145,
    description: "Crispy chicken tossed in fiery African bird's eye peri-peri seasoning and creamy slaw.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Spicy Battered Chicken", "Peri-Peri Seasoning", "Creamy Slaw", "Jalapenos", "Brioche Bun"],
    tag: "Must Try"
  },
  {
    id: "bg-5",
    name: "Zinger Chicken Crunch",
    category: "burgers",
    price: 150,
    description: "Extra crunchy battered chicken breast with secret spices, melted cheese and jalapeños.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Crunchy Battered Chicken Breast", "Secret Blend Spices", "Melted Cheese Slice", "Pickled Jalapeños"],
    tag: "Popular"
  },
  {
    id: "bg-6",
    name: "Chillax Double Patty Loaded Burger",
    category: "burgers",
    price: 180,
    description: "Our signature monster: two succulent chicken patties, double cheese, caramelized onions and house relish.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Two Chicken Patties", "Double Melted Cheese", "Caramelized Onions", "House Relish", "Brioche Bun"],
    tag: "Chillax Special"
  },
  {
    id: "bg-7",
    name: "Chicken Cheese Blast Burger",
    category: "burgers",
    price: 160,
    description: "Crispy chicken patty with molten cheese sauce core that bursts with every bite.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Crispy Chicken Patty", "Molten Cheddar Cheese Lava", "Crispy Lettuce", "House Herb Mayo"],
    tag: "Chef Choice"
  },

  // 6. French Fries
  {
    id: "ff-1",
    name: "Classic Salted French Fries",
    category: "french-fries",
    price: 80,
    description: "Crispy golden shoestring potatoes tossed with pure sea salt. Served with tomato dip.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Golden Shoestring Potatoes", "Sea Salt", "Classic Tomato Dip"]
  },
  {
    id: "ff-2",
    name: "Peri Peri French Fries",
    category: "french-fries",
    price: 100,
    description: "Hot crisp fries dusted generously with zesty spicy peri-peri seasoning.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Crisp French Fries", "Zesty Peri-Peri Spice Dust", "Garlic Mayo"],
    tag: "Bestseller"
  },
  {
    id: "ff-3",
    name: "Cheesy Fries Deluxe",
    category: "french-fries",
    price: 120,
    description: "Golden fries smothered in warm molten cheddar cheese sauce and herbs.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Golden Fries", "Warm Cheddar Cheese Sauce", "Dried Italian Herbs"],
    tag: "Popular"
  },
  {
    id: "ff-4",
    name: "Spicy Masala Fries",
    category: "french-fries",
    price: 95,
    description: "Desi style fries tossed with chaat masala, red chilli flakes and lemon zest.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Crispy Fries", "Chaat Masala", "Red Chilli Flakes", "Fresh Lemon Zest"]
  },
  {
    id: "ff-5",
    name: "Loaded Chicken Fries",
    category: "french-fries",
    price: 150,
    description: "Crispy fries layered with grilled shredded chicken, melted cheese, mayo and spring onions.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Crispy Fries", "Grilled Shredded Chicken", "Melted Cheese", "Creamy Mayo", "Spring Onions"],
    tag: "Chillax Special"
  },

  // 7. Momos
  {
    id: "mm-1",
    name: "Veg Steamed Momos (6 Pcs)",
    category: "momos",
    price: 90,
    description: "Delicate steamed dumplings stuffed with cabbage, carrot, ginger and spring onions.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Finely Shredded Cabbage", "Carrot", "Fresh Ginger", "Spring Onions", "Steamed Wheat Wrappers", "Red Chilli Chutney"]
  },
  {
    id: "mm-2",
    name: "Veg Fried Momos (6 Pcs)",
    category: "momos",
    price: 100,
    description: "Crispy golden fried veg dumplings served with spicy garlic tomato dip.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Vegetable Stuffed Dumplings", "Crispy Deep-Fried Shell", "Garlic Tomato Dip"],
    tag: "Popular"
  },
  {
    id: "mm-3",
    name: "Chicken Steamed Momos (6 Pcs)",
    category: "momos",
    price: 120,
    description: "Juicy minced chicken and fresh herbs wrapped in thin dough, steamed to perfection.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Juicy Minced Chicken", "Fresh Coriander & Herbs", "Steamed Dumpling Skin", "Fiery Red Dip"],
    tag: "Bestseller"
  },
  {
    id: "mm-4",
    name: "Chicken Fried Momos (6 Pcs)",
    category: "momos",
    price: 130,
    description: "Deep-fried crunchy chicken momos served with fiery red chilli chutney and mayo.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Tender Minced Chicken", "Deep-Fried Crispy Shell", "Fiery Red Chutney", "Creamy Mayo"],
    tag: "Popular"
  },
  {
    id: "mm-5",
    name: "Chicken Peri Peri Momos (6 Pcs)",
    category: "momos",
    price: 140,
    description: "Crispy fried chicken momos tossed in spicy, tangy peri-peri seasoning.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fried Chicken Momos", "Peri-Peri Seasoning Dust", "House Garlic Dip"],
    tag: "Must Try"
  },
  {
    id: "mm-6",
    name: "Schezwan Chicken Momos (6 Pcs)",
    category: "momos",
    price: 150,
    description: "Fried chicken momos pan-tossed in pungent wok Schezwan sauce and bell peppers.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Chicken Momos", "Spicy Schezwan Sauce", "Crisp Bell Peppers", "Spring Onions"],
    tag: "Chillax Special"
  },
  {
    id: "mm-7",
    name: "Cheese Chicken Momos (6 Pcs)",
    category: "momos",
    price: 160,
    description: "Steamed chicken dumplings topped with gooey melted mozzarella cheese.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Chicken Dumplings", "Gratinated Mozzarella Cheese", "Red Dipping Sauce"]
  },

  // 8. Faloodas
  {
    id: "fl-1",
    name: "Mini Falooda",
    category: "faloodas",
    price: 90,
    description: "A compact sweet treat with vermicelli, basil seeds, rose milk and a scoop of vanilla.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Sweet Vermicelli (Sev)", "Basil Seeds (Sabja)", "Rose Flavored Milk", "Vanilla Ice Cream Scoop"]
  },
  {
    id: "fl-2",
    name: "Classic Rose Falooda",
    category: "faloodas",
    price: 120,
    description: "Fragrant rose syrup, sabja seeds, silky sev, chopped fruits and vanilla ice cream.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Rose Syrup", "Basil Seeds", "Silky Sev", "Fresh Chopped Fruits", "Vanilla Ice Cream"],
    tag: "Bestseller"
  },
  {
    id: "fl-3",
    name: "Chillax Royal Falooda",
    category: "faloodas",
    price: 150,
    description: "Layered luxury with dry fruits, tutty-fruity, jelly cubes, kulfi and double ice cream scoops.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Assorted Dry Fruits", "Tutty Fruity", "Strawberry Jelly Cubes", "Rich Kulfi Slice", "Double Ice Cream Scoops"],
    tag: "Chillax Special"
  },
  {
    id: "fl-4",
    name: "Mango Falooda",
    category: "faloodas",
    price: 140,
    description: "Sweet mango pulp, sabja seeds, vermicelli, mango chunks and rich mango ice cream.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Alphonso Mango Pulp", "Basil Seeds", "Vermicelli", "Mango Chunks", "Mango Ice Cream"],
    tag: "Popular"
  },
  {
    id: "fl-5",
    name: "Dry Fruit Kulfi Falooda",
    category: "faloodas",
    price: 170,
    description: "Authentic Malai Kulfi chunks topped with almonds, pistachios, cashews and rabdi.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Authentic Malai Kulfi", "Roasted Almonds", "Pistachios", "Cashews", "Sweet Rabdi", "Falooda Sev"],
    tag: "Must Try"
  },

  // 9. Tea & Coffee
  {
    id: "tc-1",
    name: "Malabar Sulaimani",
    category: "tea-coffee",
    price: 15,
    description: "Traditional Kerala spiced black tea brewed with fresh cardamom, cinnamon and lemon.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Nilgiri Black Tea", "Green Cardamom", "Cinnamon", "Fresh Lemon Squeeze", "Sugar"],
    tag: "Bestseller"
  },
  {
    id: "tc-2",
    name: "Cardamom Milk Tea (Chai)",
    category: "tea-coffee",
    price: 20,
    description: "Rich, aromatic piped Kerala tea with crushed green cardamom.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Fresh Steamed Milk", "Strong Tea Dust", "Crushed Green Cardamom", "Sugar"]
  },
  {
    id: "tc-3",
    name: "Fresh Ginger Tea",
    category: "tea-coffee",
    price: 20,
    description: "Soothing hot tea brewed with freshly grated pungent ginger.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Freshly Grated Ginger", "Brewed Tea", "Milk", "Sugar"]
  },
  {
    id: "tc-4",
    name: "Green Tea",
    category: "tea-coffee",
    price: 25,
    description: "Light, refreshing organic green tea with honey and lemon.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Organic Green Tea Leaves", "Pure Honey", "Lemon Slice"]
  },
  {
    id: "tc-5",
    name: "Hot Bru Coffee",
    category: "tea-coffee",
    price: 25,
    description: "Classic creamy South Indian roasted coffee served piping hot.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Roasted Bru Coffee", "Full Cream Hot Milk", "Sugar"]
  },
  {
    id: "tc-6",
    name: "Strong Filter Coffee",
    category: "tea-coffee",
    price: 30,
    description: "Authentic chicory filter decoction frothed high with full cream milk.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Traditional Filter Coffee Decoction", "Chicory Blend", "Frothy Full Cream Milk"],
    tag: "Popular"
  },
  {
    id: "tc-7",
    name: "Iced Cold Coffee",
    category: "tea-coffee",
    price: 80,
    description: "Blended espresso roast with cold milk and ice cubes, lightly sweetened.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Espresso Coffee Roast", "Chilled Milk", "Ice Cubes", "Brown Sugar"],
    tag: "Must Try"
  },
  {
    id: "tc-8",
    name: "Hot Chocolate",
    category: "tea-coffee",
    price: 60,
    description: "Steaming Belgian cocoa stirred with warm milk and chocolate drizzle.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Belgian Cocoa", "Warm Steamed Milk", "Chocolate Syrup Drizzle"]
  },

  // 10. Appetizers
  {
    id: "ap-1",
    name: "Chicken Popcorn",
    category: "appetizers",
    price: 120,
    description: "Bite-sized tender chicken cubes coated in spicy crispy crust. Served with garlic dip.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Tender Chicken Cubes", "Crispy Spiced Batter", "Garlic Mayo Dip"],
    tag: "Bestseller"
  },
  {
    id: "ap-2",
    name: "Crispy Chicken Nuggets (6 Pcs)",
    category: "appetizers",
    price: 110,
    description: "Tender chicken nuggets deep-fried to golden perfection.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Ground Chicken Meat", "Golden Breadcrumb Coating", "Tomato Relish"],
    tag: "Popular"
  },
  {
    id: "ap-3",
    name: "Spicy Chicken Wings (4 Pcs)",
    category: "appetizers",
    price: 140,
    description: "Juicy chicken wings coated in smoky BBQ glaze or spicy crisp batter.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Chicken Wings", "Smoky BBQ Glaze", "Chilli Flakes", "Herb Seasoning"],
    tag: "Chillax Special"
  },
  {
    id: "ap-4",
    name: "Golden Cheese Balls (6 Pcs)",
    category: "appetizers",
    price: 110,
    description: "Crispy crumbed potato balls filled with gooey melting mozzarella.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Mashed Seasoned Potatoes", "Mozzarella Cheese Center", "Panko Breadcrumbs"],
    tag: "Must Try"
  },
  {
    id: "ap-5",
    name: "Crispy Chicken Strips (4 Pcs)",
    category: "appetizers",
    price: 130,
    description: "Whole chicken breast tenders seasoned with house spices and panko crunch.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Chicken Breast Tenders", "Panko Coating", "House Spices", "Sweet Chilli Dip"]
  },
  {
    id: "ap-6",
    name: "Garlic Bread with Melted Cheese",
    category: "appetizers",
    price: 90,
    description: "Toasted baguette slices rubbed with garlic butter and gratinated mozzarella.",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=600&q=80",
    ingredients: ["French Baguette Slices", "Crushed Garlic Butter", "Melted Mozzarella", "Oregano"]
  },
  {
    id: "ap-7",
    name: "Kerala Chicken Cutlet (2 Pcs)",
    category: "appetizers",
    price: 70,
    description: "Spiced minced chicken and potato patties crumb-fried in traditional Kerala style.",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    ingredients: ["Minced Spiced Chicken", "Mashed Potatoes", "Fennel & Curry Leaves", "Toasted Breadcrumb Crust"]
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Ambiance' | 'Sips & Shakes' | 'Quick Bites' | 'Hangout';
  description: string;
  badge: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Chillax Hangout Lounge",
    category: "Ambiance",
    description: "Warm glow, comfortable seating, and the perfect music for relaxing with friends in Kumaramangalam.",
    badge: "Cafe Vibes",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-2",
    title: "Signature Malabar Avil Milk",
    category: "Sips & Shakes",
    description: "Layered with roasted beaten rice, fresh sweet bananas, crunchy nuts, and rich vanilla ice cream.",
    badge: "Local Legend",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-3",
    title: "Crispy Chicken Burger & Peri Peri Fries",
    category: "Quick Bites",
    description: "Freshly grilled juicy patties, toasted sesame brioche, and freshly shaken hot peri-peri fries.",
    badge: "Crowd Favorite",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-4",
    title: "Steaming Chicken Momos with Red Chutney",
    category: "Quick Bites",
    description: "Handcrafted savory dumplings paired with fiery Himalayan dipping sauce.",
    badge: "Fresh & Steamy",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-5",
    title: "Sparkling Virgin Mojito & Cold Shakes",
    category: "Sips & Shakes",
    description: "Crushed mint leaves, fresh lime zest, and thick blended shakes to beat the Kerala afternoon heat.",
    badge: "Chill Refreshment",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-6",
    title: "Evening Lights & Chillax Memories",
    category: "Hangout",
    description: "Where conversations flow freely over cups of hot Sulaimani and crunchy snacks.",
    badge: "Night Ambiance",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS = [
  {
    name: "Arjun Nair",
    locality: "Thodupuzha Town",
    comment: "Best Avil Milk and burgers in Kumaramangalam! The vibe is super chill, perfect for spending an evening with friends. Quick service and reasonable prices.",
    rating: 5,
    tag: "Regular Customer"
  },
  {
    name: "Sneha Kurian",
    locality: "Vengallur",
    comment: "Their Sharjah shake and Chicken Peri Peri Momos are unmatched! WhatsApp ordering is so convenient for quick takeaway on the way home.",
    rating: 5,
    tag: "Foodie"
  },
  {
    name: "Muhammed Fayis",
    locality: "Perumpillichira",
    comment: "Chillax Cafe is our daily hangout spot. Authentic taste, super friendly staff, and the burgers are always freshly toasted and loaded with cheese.",
    rating: 5,
    tag: "Local Guide"
  }
];

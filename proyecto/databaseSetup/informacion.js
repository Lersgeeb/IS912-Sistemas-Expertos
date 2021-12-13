var client_id1 = ObjectId()
var client_id2 = ObjectId()
var client_id3 = ObjectId()
var client_id4 = ObjectId()
var client_id5 = ObjectId()

var delivery_man_id1 = ObjectId()
var delivery_man_id2 = ObjectId()
var delivery_man_id3 = ObjectId()

var business_id1 = ObjectId()
var business_id2 = ObjectId()
var business_id3 = ObjectId()
var business_id4 = ObjectId()
var business_id5 = ObjectId()
var business_id6 = ObjectId()
var business_id7 = ObjectId()
var business_id8 = ObjectId()
var business_id9 = ObjectId()
var business_id10 = ObjectId()
var business_id11 = ObjectId()

var product_id1 = ObjectId()
var product_id2 = ObjectId()
var product_id3 = ObjectId()
var product_id4 = ObjectId()
var product_id5 = ObjectId()
var product_id6 = ObjectId()
var product_id7 = ObjectId()
var product_id8 = ObjectId()
var product_id9 = ObjectId()


db.clients.insertMany([{
        "_id": client_id1,
        "fullname": "Pedro Martinez",
        "email": "pedro.martinez@gmail.com",
        "password": "12341234",
        "cart": []
    },
    {
        "_id": client_id2,
        "fullname": "Juan Perez",
        "email": "juan.perez@gmail.com",
        "password": "12341234",
        "cart": []
    },
    {
        "_id": client_id3,
        "fullname": "Maria Rodriguez",
        "email": "maria.rodriguez@gmail.com",
        "password": "12341234",
        "cart": []
    },
    {
        "_id": client_id4,
        "fullname": "Gabriel Banegas",
        "email": "banegas.gabriel@gmail.com",
        "password": "12341234",
        "cart": [{
            "_id": ObjectId(),
            "product_id": product_id4,
            "amount": 2
        }, ]
    },
    {
        "_id": client_id5,
        "fullname": "Eduardo Lopez",
        "email": "eduardo.lopez@gmail.com",
        "password": "12341234",
        "cart": []
    },
]);

db.delivery_men.insertMany([{
        "_id": delivery_man_id1,
        "admitted": false,
        "fullname": "Jose García",
        "email": "jose.garcia@gmail.com",
        "password": "12341234",
    },
    {
        "_id": delivery_man_id2,
        "admitted": true,
        "fullname": "Gabriel Escobar",
        "email": "escobar.gabriel@gmail.com",
        "password": "12341234",
    },
    {
        "_id": delivery_man_id3,
        "admitted": true,
        "fullname": "Eduardo Lopez",
        "email": "eduardo.lopez@gmail.com",
        "password": "12341234",
    },
]);

db.admins.insertMany([{
    "_id": ObjectId(),
    "email": "orex.admin@gmail.com",
    "password": "12341234",
}, ]);

db.categories.insertMany(
    [{
            "_id": ObjectId(),
            "name": "Restaurante",
            "logo": "restaurant",
            "business_list": [{
                    "_id": business_id1,
                    "name": "Pizza Hut",
                    "logo": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112014/pizza_hut_new_logo_2014.png?itok=KyOtuVpI",
                    "banner": "https://logozila.com/blog/wp-content/uploads/2021/09/Pizzahut_logo.jpg",
                    "description": "Descripción de Pizza hut",
                    "rating": 4,
                    "phone_number": "32323232",
                    "email": "pizzahut@gmail.com",
                    "products": [{
                            "_id": product_id1,
                            "name": "Pizza mia",
                            "price": 99.99,
                            "image": "https://bloximages.newyork1.vip.townnews.com/cbs46.com/content/tncms/assets/v3/editorial/0/7f/07f7b3e0-9722-5f4f-ba8e-28c5347ca796/5f3aaa540809b.image.jpg?crop=720%2C720%2C280%2C0&resize=1200%2C1200&order=crop%2Cresize",
                        },
                        {
                            "_id": product_id2,
                            "name": "Lays Crunchy",
                            "price": 389.00,
                            "image": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/LAYSCRUNCH.png",
                        },
                        {
                            "_id": product_id3,
                            "name": "4 Estaciones",
                            "price": 318.00,
                            "image": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/001.jpg",
                        },
                    ]
                },
                {
                    "_id": business_id2,
                    "name": "Burger King",
                    "logo": "https://static.dezeen.com/uploads/2021/01/burger-king-logo-rebrand-bk-jkr_logo_dezeen_2364_col_0-213x213.jpg",
                    "banner": "https://www.lilla.com/assets/imgs/tiendas/db/P0/P0%20L29%20BURGUER%20KING/Banner%20illa%20diagonal%20burger%20king.png",
                    "description": "Descripción de Burger King",
                    "rating": 4,
                    "phone_number": "32323233",
                    "email": "burgerking@gmail.com",
                    "products": [{
                            "_id": product_id4,
                            "name": "TriPack",
                            "price": 299.99,
                            "image": "https://www.marketing91.com/wp-content/uploads/2017/10/whopper.jpg",
                        },
                        {
                            "_id": product_id5,
                            "name": "Whopper",
                            "price": 157.00,
                            "image": "https://thefoodtech.com/wp-content/uploads/2021/05/burguer-king.jpg",
                        },
                        {
                            "_id": product_id6,
                            "name": "Philly Cheese King",
                            "price": 178.00,
                            "image": "https://mms.businesswire.com/media/20181025005134/en/686510/5/03307-4_Philly_King_PR_Images_CR.jpg",
                        },
                    ]
                },
                {
                    "_id": business_id3,
                    "name": "Church's Chicken",
                    "logo": "https://lh5.googleusercontent.com/proxy/QL4yvylbT1IEW1sRDekOv2Bv4T0pHnhvtQ8uNSXY91sqye99Acy44N82R-nV0-tRAkNEq6gUzpL4hsFH1Z1Vb1h3bIKbPLxVB_VI=w1200-h630-p-k-no-nu",
                    "banner": "https://www.churchs.com.mx/images/uploads/banner-ribbon.png",
                    "description": "Descripción de Church's Chicken",
                    "rating": 4,
                    "phone_number": "32323234",
                    "email": "churchschiken@gmail.com",
                    "products": [{
                            "_id": product_id7,
                            "name": "Glazed Herb & Garlic",
                            "price": 143.00,
                            "image": "https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/PECHU_SW2_4274853.jpg",
                        },
                        {
                            "_id": product_id8,
                            "name": "Pechu Sandwich",
                            "price": 129.00,
                            "image": "https://www.pizzahutonline.hn/Imagenes/CATEGORIAS/PIZZAS/LAYSCRUNCH.png",
                        },
                        {
                            "_id": product_id9,
                            "name": "Pancho Jr",
                            "price": 109.00,
                            "image": "https://inturfiles.s3.us-east-2.amazonaws.com/folder/products/500X500/VNP-1024x1024-PX-CC-PANCHO-JR-a3_1611878452596.jpg",
                        },
                    ]
                },
            ]
        },
        {
            "_id": ObjectId(),
            "name": "Supermercado",
            "logo": "market",
            "business_list": [{
                "_id": business_id4,
                "name": "Price Smart",
                "logo": "https://seeklogo.com/images/P/PriceSmart-logo-4EB4CE7D59-seeklogo.com.png",
                "banner": "https://static.seekingalpha.com/uploads/2019/12/5847171_15771871736700_rId4.png",
                "description": "Descripción de Price Smart",
                "rating": 4,
                "phone_number": "32323235",
                "email": "pricesmart@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Farmacia",
            "logo": "drugStore",
            "business_list": [{
                "_id": business_id5,
                "name": "Farmacias Kielsa",
                "logo": "https://lh3.googleusercontent.com/p/AF1QipMREH8PQzkt5CDvRqvwy0bMK-73qM6xeYLBAv0R=s1600-w289",
                "banner": "https://www.kielsaclinica.com/static/media/KCL.d0d5da62.png",
                "description": "Descripción de Farmacias Kielsa",
                "rating": 4,
                "phone_number": "32323236",
                "email": "kielsa@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Fiesta",
            "logo": "party",
            "business_list": [{
                    "_id": business_id6,
                    "name": "Smirnoff ",
                    "logo": "https://illyanalondon.com/wp-content/uploads/2019/12/untitled-1_99.png",
                    "banner": "https://www.jonnyballer.com/images/pg-Smirnoff.jpg",
                    "description": "Descripción de Smirnoff ",
                    "rating": 4,
                    "phone_number": "32323237",
                    "email": "smirnoff@gmail.com",
                    "products": []
                },
                {
                    "_id": business_id7,
                    "name": "Coca-Cola",
                    "logo": "https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg",
                    "banner": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8936a423930933.56048f9fd2ac8.png",
                    "description": "Descripción de Coca-Cola",
                    "rating": 4,
                    "phone_number": "32323238",
                    "email": "cocacola@gmail.com",
                    "products": []
                },
            ]
        },
        {
            "_id": ObjectId(),
            "name": "Ferretería",
            "logo": "tool",
            "business_list": [{
                "_id": business_id8,
                "name": "Larach",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToowtgXA4rpmRnkpzzXXixwLVVusCUEBzj9w&usqp=CAU",
                "banner": "https://images.squarespace-cdn.com/content/v1/593b0c089f74564db153cf93/1499294251716-4V2IU7N1NA7UCB9K6HRD/Banner_Larach-min+%281%29.jpg?format=1500w",
                "description": "Descripción de Larach",
                "rating": 4,
                "phone_number": "32323239",
                "email": "larach@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Joyería",
            "logo": "jewel",
            "business_list": [{
                "_id": business_id9,
                "name": "Glamira",
                "logo": "https://p.calameoassets.com/171009053836-9cea4355cabc4e22fd20ffd4418df282/p1.jpg",
                "banner": "https://t3.ftcdn.net/jpg/01/29/67/64/360_F_129676401_6YsI2H7WZqXqZUW54kBGAVzMkPPIFEKC.jpg",
                "description": "Descripción de Glamira",
                "rating": 4,
                "phone_number": "32323240",
                "email": "glamira@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Café",
            "logo": "coffe",
            "business_list": [{
                "_id": business_id10,
                "name": "Dunkin Donuts",
                "logo": "https://unifiedcenters.com/wp-content/uploads/2016/05/dunkin-donuts-logo-1150x1031.jpg",
                "banner": "https://emilycontois.files.wordpress.com/2012/12/americanrunsondunkin.jpg?w=840",
                "description": "Descripción de Dunkin Donuts",
                "rating": 4,
                "phone_number": "32323241",
                "email": "dunkindonuts@gmail.com",
                "products": []
            }, ]
        },
        {
            "_id": ObjectId(),
            "name": "Fitness",
            "logo": "exercise",
            "business_list": [{
                "_id": business_id11,
                "name": "Gym Hero",
                "logo": "https://www.48hourslogo.com/48hourslogo_data/2019/10/04/89466_1570119651.png",
                "banner": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOrdMqPosibGBv7XXRCa5oxlIpXovZS9HZA&usqp=CAU",
                "description": "Gym Hero",
                "rating": 4,
                "phone_number": "32323242",
                "email": "gymhero@gmail.com",
                "products": []
            }, ]
        },
    ]
);


db.orders.insertMany([{
        "_id": ObjectId(),
        "business_id": business_id3,
        "client_id": client_id4,
        "delivery_man_id": null,
        "delivery_state": '',
        "location": {
            "latitude": 14.08091304279178,
            "longitude": -87.18844413757326,
        },
        "payment_info": {
            "card_number": 1234123412341234,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [{
                "product_id": product_id7,
                "amount": 2
            },
            {
                "product_id": product_id8,
                "amount": 1
            },
        ],
    },
    {
        "_id": ObjectId(),
        "business_id": business_id1,
        "client_id": client_id2,
        "delivery_man_id": delivery_man_id2,
        "delivery_state": 'En destino',
        "location": {
            "latitude": 14.084133821922677,
            "longitude": -87.19985961914062,
        },
        "payment_info": {
            "card_number": 1234123412341234,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [{
                "product_id": product_id1,
                "amount": 2
            },
            {
                "product_id": product_id3,
                "amount": 1
            },
        ],
    },
    {
        "_id": ObjectId(),
        "business_id": business_id1,
        "client_id": client_id2,
        "delivery_man_id": delivery_man_id2,
        "delivery_state": 'Tomada',
        "location": {
            "latitude": 14.084133821922677,
            "longitude": -87.19985961914062,
        },
        "payment_info": {
            "card_number": 1234123412341234,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [{
                "product_id": product_id1,
                "amount": 2
            },
            {
                "product_id": product_id3,
                "amount": 1
            },
        ],
    },
    {
        "_id": ObjectId(),
        "business_id": business_id2,
        "client_id": client_id5,
        "delivery_man_id": delivery_man_id2,
        "delivery_state": 'Tomada',
        "location": {
            "latitude": 14.067176092157112,
            "longitude": -87.18342304229736,
        },
        "payment_info": {
            "card_number": 1234123412341234,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [{
                "product_id": product_id4,
                "amount": 2
            },
            {
                "product_id": product_id5,
                "amount": 1
            },
        ],
    },
]);
db.orders.insertMany([
    {
        "_id":ObjectId(),
        "business_id":'61a91bd3faaa8c16a24d5013',
        "client_id": '61a91bd2faaa8c16a24d5009',
        "delivery_man_id": '',
        "delivery_state": '',
        "location": {         
            "latitude": 1,
            "longitude": 1,
        },
        "payment_info":  {         
            "card_number": 1111,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [
            {
                "product_id": '61a91bd3faaa8c16a24d5014',
                "amount": 2           
            },
            {
                "product_id": '61a91bd3faaa8c16a24d5015',
                "amount": 1
            },
        ], 
    },
    {
        "_id":ObjectId(),
        "business_id":'61a91bd3faaa8c16a24d501b',
        "client_id": '61a91bd2faaa8c16a24d500a',
        "delivery_man_id": '61a91bd2faaa8c16a24d500f',
        "delivery_state": 'Tomada',
        "location": {         
            "latitude": 1,
            "longitude": 1,
        },
        "payment_info":  {         
            "card_number": 1111,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [
            {
                "product_id": '61a91bd3faaa8c16a24d501c',
                "amount": 2           
            },
            {
                "product_id": '61a91bd3faaa8c16a24d501d',
                "amount": 1
            },
        ], 
    },
    {
        "_id":ObjectId(),
        "business_id":'61a91bd3faaa8c16a24d501b',
        "client_id": '61a91bd2faaa8c16a24d500a',
        "delivery_man_id": '61a91bd2faaa8c16a24d500e',
        "delivery_state": 'Tomada',
        "location": {         
            "latitude": 1,
            "longitude": 1,
        },
        "payment_info":  {         
            "card_number": 1111,
            "cvv": 123,
            "expired_date": "24/12/24",
        },
        "order_products": [
            {
                "product_id": '61a91bd3faaa8c16a24d501c',
                "amount": 2           
            },
            {
                "product_id": '61a91bd3faaa8c16a24d501d',
                "amount": 1
            },
        ], 
    },
 ]);
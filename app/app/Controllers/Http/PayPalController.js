'use strict'
const Database = use('Database')
const Hash = use('Hash')
var paypal = require('paypal-rest-sdk');

class PayPalController {
    constructor(){
        paypal.configure({
                             'mode': 'sandbox', //sandbox or live
                             'client_id': 'Ab7nQUcd6drmpxRDb1_wm8nojLLB4vkO-p57c-bRVpzzpr3XFA0JbnUUAK3TlsVJGlA7vZwt_EEzFtg6',
                             'client_secret': 'EP_y68wDQ-82-6y61JwZ1owp_Y9ynpU_Q44yEUIe4CxREAUDJSdJj8lOUZAUlx2nQecCYhmV7w7vEqR6'
        });
    }
    charge(object){
        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://return.url",
                "cancel_url": "http://cancel.url"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "1.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };


        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                console.log(payment);
            }
        });
    }
}

module.exports = PayPalController

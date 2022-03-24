const ProductModel = require('../models/productschema');
var readline = require('readline-sync');

exports.findAll = (req, res) => {
    ProductModel.find(function(err, data) {
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send(data);
                        console.log(data);
                    }
                });  
            };

exports.purchase = (req,res) =>{
    console.log("Enter number of items do you want: ")
    var number = readline.question();
    var total_amount = 0;
    var purchased_items = [];

    for (let i=0;i<number;i++){
    console.log("Enter product name : ");
    var item = readline.question();
    console.log("Enter quantity of product: ");
    var Quantity = readline.question();

    ProductModel.findOne({ProductName:item},
        function (err, data) {
            if (err) {                
                console.log(err);
            }
            else {                               
              // console.log("Product Name: "+data.ProductName+'\n'+"Quantity of product: "+Quantity+'\n'+"Price of product: "+Quantity*data.Price);
                 purchased_items.push( {
                name : data.ProductName,
                quantity : Quantity,
                price : Quantity*data.Price
               })   
               total_amount +=Quantity*data.Price
               console.log("Purchased items: "+purchased_items);
               console.log("Total amount:"+total_amount);     

               // console.log(data.ProductName);
            }            
        });
    }   
   
}

const { Router} = require('express');
const router = Router();
const _ = require('underscore');

const products = require('../products.json');

//GetAll
router.get('/',( req, res ) =>{
    res.json(products['products'])
});


//SearchbyName
router.get('/search', (req, res) => {
    const search = req.query.title.toLowerCase(); // Access the 'title' query parameter in lowercase
    const matchingProducts = _.filter(products['products'], (product) =>
        product.title.toLowerCase().includes(search)
    );
    if(matchingProducts.length == 0){
        res.send('No se encontraron coincidencias');
        console.log(res);
    }else{
        res.json(matchingProducts);
    }
});

//GetAllById
router.get('/:id',(req, res) => {
    const { id } = req.params;
    const product = _.find(products['products'], { id: Number(id) });
    res.send(product);
});

module.exports = router;
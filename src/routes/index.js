const { Router } = require('express');
const router = Router();

//Routes
router.get('/',(req,res) => {
    res.send('API');
});

module.exports = router;
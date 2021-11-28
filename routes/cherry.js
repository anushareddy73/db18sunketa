var express = require("express");
const cherry_controlers= require('../controllers/cherry'); 
var router = express.Router();

/* GET home page. */
router.get('/', cherry_controlers.cherry_view_all_Page);

/* GET detail cherry page */ 
router.get('/detail', cherry_controlers.cherry_view_one_Page); 
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET create cherry page */ 
router.get('/create',secured, cherry_controlers.cherry_create_Page);
/* GET create update page */ 
router.get('/update',secured, cherry_controlers.cherry_update_Page); 
 /* GET create cherry page */ 
router.get('/delete',secured, cherry_controlers.cherry_delete_Page); 
 




module.exports = router;
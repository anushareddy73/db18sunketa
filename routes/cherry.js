var express = require("express");
const cherry_controlers= require('../controllers/cherry'); 
var router = express.Router();

/* GET home page. */
router.get('/', cherry_controlers.cherry_view_all_Page);

/* GET detail cherry page */ 
router.get('/detail', cherry_controlers.cherry_view_one_Page); 
/* GET create cherry page */ 
router.get('/create', cherry_controlers.cherry_create_Page);
/* GET create update page */ 
router.get('/update', cherry_controlers.cherry_update_Page); 
 /* GET create cherry page */ 
router.get('/delete', cherry_controlers.cherry_delete_Page); 
 




module.exports = router;
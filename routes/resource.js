var express = require('express');
const cherry_controllers= require('../controllers/cherry');  
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var cherry_controller = require('../controllers/cherry'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
router.get('/', cherry_controllers.cherry_view_all_Page );  
/// cherry ROUTES /// 
 
// POST request for creating a cherry.  
router.post('/cherry', cherry_controller.cherry_create_post); 
 
// DELETE request to delete cherry. 
router.delete('/cherry/:id', cherry_controllers.cherry_delete); 
 
// PUT request to update cherry. 
router.put('/cherry/:id', 
cherry_controllers.cherry_update_put); 
 
// GET request for one cherry. 
router.get('/cherry/:id', cherry_controllers.cherry_detail); 
 
// GET request for list of all cherry items. 
router.get('/cherry', cherry_controllers.cherry_list); 
 
module.exports = router; 
 
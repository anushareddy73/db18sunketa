var cherry = require("../models/cherry");

// List of all cherrys
exports.cherry_list = async function (req, res) {
  try {
    thecherry = await cherry.find();
    res.send(thecherry);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific cherry. 
exports.cherry_detail = async function(req, res) { 
  console.log("detail"  + req.params.id) 
  try { 
      result = await cherry.findById( req.params.id) 
      res.send(result) 
  } catch (error) { 
      res.status(500) 
      res.send(`{"error": document for id ${req.params.id} not found`); 
  } 
}; 


// Handle cherry create on POST.
exports.cherry_create_post = async function (req, res) {
  console.log(req.body);
  let document = new cherry();
  document.Cherry_type = req.body.Cherry_type;
  document.Weight = req.body.Weight;
  document.Cost = req.body.Cost;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle cherry delete on DELETE. 
exports.cherry_delete = async function(req, res) { 
  console.log("delete "  + req.params.id) 
  try { 
      result = await cherry.findByIdAndDelete( req.params.id) 
      console.log("Removed " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": Error deleting ${err}}`); 
  } 
};

// Handle cherry update form on PUT. 
exports.cherry_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await cherry.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Cherry_type)  
               toUpdate.Cherry_type = req.body.Cherry_type; 
        if(req.body.Cost) toUpdate.Cost = req.body.Cost; 
        if(req.body.Weight) toUpdate.Weight = req.body.Weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// VIEWS
// Handle a show all view
exports.cherry_view_all_Page = async function (req, res) {
  try {
    thecherry = await cherry.find();
    res.render("cherry", { title: "cherry Search Results", results: thecherry });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle a show one view with id specified by query
exports.cherry_view_one_Page = async function(req, res) {
  console.log("single view for id "  + req.query.id)
  try{
      result = await cherry.findById( req.query.id)
      res.render('cherrydetail', {
          title: 'cherry Detail', 
          toShow: result
      });
  }
  catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};
// Handle building the view for creating a cherry.
// No body, no in path parameter, no query.
// Does not need to be async
exports.cherry_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('cherrycreate', { title: 'cherry Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a cherry. 
// query provides the id 
exports.cherry_update_Page =  async function(req, res) { 
  console.log("update view for item "+req.query.id) 
  try{ 
      let result = await cherry.findById(req.query.id) 
      res.render('cherryupdate', { title: 'cherry Update', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 
// Handle a delete one view with id from query 
exports.cherry_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await cherry.findById(req.query.id) 
        res.render('cherrydelete', { title: 'cherry Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
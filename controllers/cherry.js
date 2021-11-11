var cherry = require("../models/cherry");

// List of all Costumes
exports.cherry_list = async function (req, res) {
  try {
    thecherry = await cherry.find();
    res.send(thecherry);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific Costume.
exports.cherry_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: cherry detail: " + req.params.id);
};

// Handle Costume create on POST.
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

// Handle Costume delete form on DELETE.
exports.cherry_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: cherry delete DELETE " + req.params.id);
};

// Handle Costume update form on PUT.
exports.cherry_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: cherry update PUT" + req.params.id);
};

// VIEWS
// Handle a show all view
exports.cherry_view_all_Page = async function (req, res) {
  try {
    thecherry = await Costume.find();
    res.render("cherry", { title: "cherry Search Results", results: thecherry });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
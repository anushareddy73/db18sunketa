const mongoose = require("mongoose") 
const cherrySchema = mongoose.Schema({ 
 Cherry_type: String, 
 Weight: Number, 
 Cost: Number 
}) 
 
module.exports = mongoose.model("cherry", 
cherrySchema) 
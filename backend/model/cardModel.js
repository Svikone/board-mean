const mongoose = require("mongoose");
const cardSchema = mongoose.Schema({
   user_id: String,
   text: String
});
module.exports = mongoose.model("Card",cardSchema);
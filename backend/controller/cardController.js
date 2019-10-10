const Modules = require("../model/cardModel");
// const jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    const card = {
        text: req.body.text,
        user_id: req.body.user_id
    }
    Modules(card).save().then(result => {
        return res.send('card creaate');
    })
}
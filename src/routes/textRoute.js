const server = require("express").Router();

server.get('/',  async (req,res,_next) => {
    try {
        const {text} = req.query;
        const reverse = text.split('').reverse().join("");
        console.log(typeof reverse)
        if(reverse === text){
            return res.status(200).json([text]);
        }
        return res.status(200).json(reverse);
    }catch(err){
        res.status(400).json({error:'no text'})
    }
});

module.exports = server
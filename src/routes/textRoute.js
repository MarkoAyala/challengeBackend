const server = require("express").Router();

server.get('/',  async (req,res,_next) => {
    try {
        const {text} = req.query;
        const reverse = text.split('').reverse().join("");
        if(reverse === text){
            return res.status(200).json([text]);
        }
        return res.status(200).json(reverse);
    }catch(err){
        console.log(err)
    }
});

module.exports = server
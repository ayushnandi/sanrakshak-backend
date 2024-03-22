const { Router } = require("express");

const goToChats = async(req,res ) => {
    res.status(400).json({
        msg: "Welcome to Chats Section of Police routes"
    });
};

module.exports = {
    goToChats
};
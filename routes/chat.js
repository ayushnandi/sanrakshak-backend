import express from "express";

const router = express.Router();

router.route('/chat').get(goToChats);

module.exports = router;
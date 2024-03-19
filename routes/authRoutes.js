import express from "express";
import register from "../controllers/Auth/register.js";
import login from "../controllers/Auth/login.js";
import logout from "../controllers/Auth/logout.js";

const router = express.Router();

router.get('/', (req, res) => res.json({ message: "Hello from the auth routes " }))

router.post('/register', register);
router.get('/login', login);
router.get('/logout', logout);


const authRouter = router;
export default authRouter;
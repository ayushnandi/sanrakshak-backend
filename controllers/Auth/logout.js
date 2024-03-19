import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({
  path: ".env"
});

const logout = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    console.log("cookies are:", req.cookies)
    if (refreshToken) {
      console.log('Refresh token invalidated:', refreshToken);
    }
    res.clearCookie('refreshToken');
    return res.json({
      success: true,
      message: "User logout suceesully",
      refreshToken
    });
  } catch (error) {
    return res.status(400).json({ messsage: "User nor logged out", error })
  }
}

export default logout;
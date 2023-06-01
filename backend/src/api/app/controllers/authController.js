const User = require("../models/User");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];

const authController = {
  //GET ALL USER
  getDefaultAllUser: async (req, res) => {
    try {
      const user = await User.find();
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // [GET]/news
  registerUser: async (req, res) => {
    try {
      // const salt = await bcrypt.genSalt(10);
      // const hashed = await bcrypt.hash(req.body.password, salt);
      // const hashedConfirm = await bcrypt.hash(req.body.confirmpassword, salt);

      //Create new user
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        name: req.body.name,
        phone: req.body.phone,
        active: req.body.active,
        role: req.body.role,
        image: req.body.image,
      });
      //Save user to DB
      const user = await newUser.save();
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  //GENERATE ACCESS TOKEN
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      `${process.env.JWT_ACCESS_KEY}`,
      { expiresIn: "365d" }
    );
  },

  //GENERATE REFRESH TOKEN
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
      },
      `${process.env.JWT_REFRESH_KEY}`,
      { expiresIn: "365d" }
    );
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      if (!user) {
        return res.status(404).json("Incorrect username or password");
      }
      // const validPassword = await bcrypt.compare(
      //   req.body.password,
      //   user.password
      // );
      if (user) {
        const accessToken = authController.generateAccessToken(user);
        const refreshToken = authController.generateRefreshToken(user);

        refreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        // const { password, ...others } = user._doc;
        return res.status(200).json({ user, accessToken });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  requestRefreshToken: async (req, res) => {
    //Take refresh token from user
    const refreshToken = req.cookies.refreshToken;
    // Send error if token is not valid
    if (!refreshToken) return res.status(401).json("You're not authenticated");
    jwt.verify(refreshToken, `${process.env.JWT_REFRESH_KEY}`, (err, user) => {
      if (err) {
        console.log(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      //create new access token, refresh token and send to user
      const newAccessToken = authController.generateAccessToken(user);
      const newRefreshToken = authController.generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    });
  },
  //LOG OUT
  userLogout: async (req, res) => {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    return res.status(200).json("Logged out successfully!");
  },
};
module.exports = authController;

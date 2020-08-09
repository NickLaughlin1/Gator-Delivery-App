import mongoose from "mongoose";
import User from "../models/UserModel.js";

//Creates a new user in the database
export const create = async (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.email,
    address: {
      addressOne: req.body.address.addressOne,
      addressTwo: req.body.address.addressTwo,
      city: req.body.address.city,
      state: req.body.address.state,
      zip: req.body.address.zip,
    },
    role: req.body.role,
    skill: req.body.skill,
    businessName: req.body.businessName,
    businessWebsite: req.body.businessWebsite,
  });
  console.log(newUser);

  newUser.save(function (err) {
    if (err) return res.status(400).send(err);
    res.json(newUser);
  });
};

//Gets a users info
export const get = async (req, res) => {
  let currUser = req.params.email;
  User.find({ email: currUser }).exec(function (err, user) {
    if (err) return res.status(400).send(err);
    res.json(user);
  });
};

export const remove = (req, res) => {
  let id = req.params.userId; // Mongo Id not the user Id from firebase
  User.findByIdAndRemove(id.toString(), function (err, user) {
    if (err) return res.status(400).send(err);
    if (!user) {
      res.json({ error: "User not found" });
    } else {
      res.json(user);
    }
  });
};

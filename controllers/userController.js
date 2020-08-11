import mongoose from "mongoose";
import User from "../models/UserModel.js";

//Creates a new user in the database
export const create = async (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    addressOne: req.body.addressOne,
    addressTwo: req.body.addressTwo,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    role: req.body.role,
    skill: req.body.skill,
    businessName: req.body.businessName,
    businessWebsite: req.body.businessWebsite,
  });
  
  newUser.save(function (err) {
    if (err) return res.status(400).send(err);
    res.json(newUser);
  });
};

//Gets a users info
export const get = async (req, res) => {
  let currUser = req.params.email1;
  console.log(currUser);
  User.find({ email: currUser }).exec(function (err, user) {
    if (err) return res.status(400).send(err);
    res.json(user);
  });
};

export const update = async (req, res) => {
  let currUser = req.body;
  User.findOneAndUpdate

}

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

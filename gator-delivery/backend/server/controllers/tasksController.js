import mongoose from "mongoose";
import Task from "../models/TaskModel.js";

/* Create a listing */
export const create = async (req, res) => {
  let newTask = new Task({
    headline: req.body.headline,
    task: req.body.task,
    date: Date.parse(req.body.date),
    email: req.body.email,
  });

  newTask.save(function (err) {
    if (err) return res.status(400).send(err);
    res.json(newTask);
  });
};

/* Retreive all the directory listings */
export const list = (req, res) => {
  let currEmail = req.params.listingEmail;
  Task.find({ email: currEmail }).exec(function (err, task) {
    if (err) return res.status(400).send(err);
    res.json(task);
  });
};

export const remove = (req, res) => {
  let ID = req.params.taskid;
  Task.findByIdAndRemove(ID.toString(), function (err, task) {
    if (err) return res.status(400).send(err);
    if (!task) {
      res.json({ error: "Task not found" });
    } else {
      res.json(task);
    }
  });
};

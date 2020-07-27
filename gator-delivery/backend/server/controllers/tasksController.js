import mongoose from 'mongoose';
import Task from '../models/TaskModel.js';

/* Create a listing */
export const create = async (req, res) => {

    let newTask = new Task({
        headline: req.body.headline,
        task: req.body.task,
        date: Date.parse(req.body.date),
        email: req.body.email
    });

    newTask.save(function(err) {
        if (err) return res.status(400).send(err);
        res.json(newTask);
    });
};

/* Retreive all the directory listings */
export const list = (req, res) => {
    
    let currEmail = req.params.listingEmail;
    Task.find({email: currEmail}).exec(function(err,task) {
        if (err) return res.status(400).send(err);
        res.json(task);
    });

};

export const remove = (req,res) => {
    let ID = req.params.taskid;
    Task.findByIdAndRemove(ID.toString(), function(err,task) {
        if (err) return res.status(400).send(err);
        if (!task) {
            res.json({error : "Task not found"});
        } else {
            res.json(task);
        }
    });
};

/* Show the current listing */
//export const read = (req, res) => {
    /* send back the listing as json from the request */
    /* If the listing could _not_ be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
//};*/

/* Update a listing - note the order in which this function is called by the router*/
//export const update = (req, res) => {
//    const listing = req.listing;

    /* Replace the listings's properties with the new properties found in req.body */

    /*save the coordinates (located in req.results if there is an address property) */

    /* Save the listing */

//};

/* Delete a listing */
//export const remove = (req, res) => {
    /* Add your code to remove the listins */
    /* If the listing could _not_ be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'} */
//};

/* Retreive all the directory listings, sorted alphabetically by listing code */
//export const list = (req, res) => {
    /* Add your code. Make sure to send the documents as a JSON response.*/
//};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  HINT: Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
 */
//export const listingByID = (req, res, next, id) => {
//};

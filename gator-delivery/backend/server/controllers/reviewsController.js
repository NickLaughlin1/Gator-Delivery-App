/* Dependencies */
import Review from "../models/ReviewModel.js";

export const create = async (req, res) => {
  let newReview = new Review({
    mes: req.body.mes,
    rate: req.body.rate,
  });
  await newReview.save(function (err) {
    if (err) return res.status(400).send(err);
    res.json(newReview);
  });
};

/* Retreive all the reviews and ratings*/
export const list = (req, res) => {
  Review.find({}).exec(function (err, review) {
    if (err) return res.status(400).send(err);
    res.json(review);
  });
};

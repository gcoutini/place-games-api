const express = require("express");
const router = express.Router();

const Rent = require("../models/Rent");
const Customer = require("../models/Customer");

router.post("/new_rent", async (req, res) => {
  const { client, cpf, title, rent_date, return_date, rental_days, price } = req.body;
  let rent = new Rent({ client, cpf, title, rent_date, return_date, rental_days, price })
  const rent_id = rent._id;
  await rent.save();
  await Customer.updateOne(
    { cpf: cpf },
    { $push: { rentals: rent_id }}
  );
  return res.status(201).json(rent);
})

router.post("/load_rent", async (req, res) => {
  console.log(req.body);
  const { cpf } = req.body;
  const list = await Rent.find({ cpf: cpf });
  console.log(list);
  return res.status(201).json(list);
})

module.exports = router;
const express = require("express");
const router = express.Router();

const Customer = require("../models/Customer");

router.post("/register_client", async (req, res) => {
  const { name, cpf, birth_date, email, tel, cel } = req.body;
  const customerExist = await Customer.findOne({ cpf });
  if(customerExist) {
    return res.status(400).json({ message: "Usuário já cadastrado."});
  }
  let customer = new Customer({ name, cpf, birth_date, email, tel, cel })
  await customer.save();
  res.status(201).json(customer);
})

router.post("/verify_client", async (req, res) => {
  const { name, cpf } = req.body;
  const customer = await Customer.findOne({ name });
  console.log(customer);
  return !customer? res.send(404) : res.status(200).json(customer);

});

module.exports = router;
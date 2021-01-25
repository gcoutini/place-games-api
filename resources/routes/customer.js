const express = require("express");
const router = express.Router();

const Customer = require("../models/Customer");

router.post("/register_client", async (req, res) => {
  const { name, cpf, birth_date, email, tel, cel } = req.body;
  let customer = new Customer({ name, cpf, birth_date, email, tel, cel })

  await customer.save();
  res.send(customer);
})

module.exports = router;
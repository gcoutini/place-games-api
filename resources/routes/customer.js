const express = require("express");
const router = express.Router();

const Customer = require("../models/Customer");

router.post("/register_client", async (req, res) => {
  const { name, cpf, birth_date, email, tel, cel, cep, logradouro, house_number, complement, localidade, bairro, uf } = req.body;
  const customerExist = await Customer.findOne({ cpf });
  if(customerExist) {
    return res.status(400).json({ message: "Usuário já cadastrado."});
  }
  let customer = new Customer({ name, cpf, birth_date, email, tel, cel, cep, logradouro, house_number, complement, localidade, bairro, uf })
  await customer.save();
  res.status(201).json(customer);
})

router.get("/load_customers", async (req, res) => {
  const customer = await Customer.find( { }, { '_id': 0, 'name': 1, 'cpf': 1, 'cel': 1 });
  console.log(customer);
  return !customer? res.send(404) : res.status(200).json(customer);

});



router.post("/verify_client", async (req, res) => {
  const { name, cpf } = req.body;
  console.log(req.body);
  const customer = await Customer.findOne({ $or: [{ name }, { cpf }] });
  console.log(customer);
  return !customer? res.send(404) : res.status(200).json(customer);

});

module.exports = router;
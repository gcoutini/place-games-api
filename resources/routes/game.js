const express = require("express");
const router = express.Router();

const Game = require("../models/Game");

router.post("/register_game", async (req, res) => {
  const { title, players_number, available } = req.body;
  const gameExist = await Game.findOne({ title });
  if(gameExist) {
    return res.status(400).json({ message: "Jogo já cadastrado."});
  }
  let game = new Game({ title, players_number, available })
  await game.save();
  res.status(201).json(game);
})

router.get("/load_games", async (req, res) => {
  const game = await Game.find();
  console.log("Jogos:", game);
  return !game? res.send(404) : res.status(200).json(game);

});



// router.post("/verify_client", async (req, res) => {
//   const { name, cpf } = req.body;
//   console.log(req.body);
//   const customer = await Customer.findOne({ $or: [{ name }, { cpf }] });
//   console.log(customer);
//   return !customer? res.send(404) : res.status(200).json(customer);

// });

module.exports = router;
const db = require("../models");
const router = require("express").Router();

router.post("/Playlist", async (req, res) => {
  res.json(await db.Playlist.create(req.body));
});

router.get("/Song/:id", async (req, res) => {
  res.json(await db.Song.findAll({ where: { id: req.params.id } }));
});

router.get("/Playlist", async (req, res) => {
  res.json(await db.Playlist.findAll());
});

router.delete("/Playlist/:id", async (req, res) => {
  res.json(await db.Playlist.destroy({ where: { id: req.params.id } }));
});

module.exports = router;

const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  try {
    const response = await axios.delete(`https://reqres.in/api/users/${id}`);
    const deletedUser = response.data;
    console.log(deletedUser);

    res.status(201).json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

module.exports = router;

const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/addUser", async (req, res) => {
  const { name, job } = req.body;
  console.log(req.body);
  try {
    const response = await axios.post("https://reqres.in/api/users", {
      name: name,
      job: job,
    });
    const newUser = response.data;
    console.log(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

module.exports = router;

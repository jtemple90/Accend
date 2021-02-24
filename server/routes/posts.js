import express from "express";

const router = express.Router();

// Origin localhost/posts

router.get("/", (req, res) => {
  res.send("THIS IS WORKING");
});

export default router;

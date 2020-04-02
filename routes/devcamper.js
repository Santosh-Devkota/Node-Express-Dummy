const express = require("express");
const bootcamp = require("../model/devcamper");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: "get all the bootcamps" });
});

router.get("/:id", async (req, res) => {
  try {
    const singleBootcamp = await bootcamp.findById(req.params.id);
    if (!singleBootcamp) {
      res.status(400).json({
        success: false
      });
    }
    res.status(400).json({
      success: false,
      data: singleBootcamp
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      fuck: "you"
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const result = await bootcamp.create(req.body);
    console.log(result);
    res.status(201).json({
      success: true,
      hello: true,
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!result) {
      return res.status(400).json({
        success: false
      });
    }
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await bootcamp.findByIdAndDelete(req.params.id);
    console.log(result);
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
});

module.exports = router;

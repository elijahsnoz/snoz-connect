const Portfolio = require('../models/portfolio');
const stacksService = require('../services/stacksService');

exports.addWork = async (req, res) => {
  try {
    const { title, description, imageUrl, creator } = req.body;
    const transactionId = await stacksService.uploadWork({ title, description, imageUrl, creator });

    const newWork = new Portfolio({ title, description, imageUrl, creator, transactionId });
    await newWork.save();

    res.status(201).json(newWork);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload work' });
  }
};

exports.getAllWorks = async (req, res) => {
  try {
    const works = await Portfolio.find();
    res.status(200).json(works);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch works' });
  }
};

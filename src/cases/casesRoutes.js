const express = require('express');
const {
  getAllCases,
  getCase,
  addCase,
  updateCase,
  deleteCase,
} = require('./casesController');

const router = express.Router();

router.get('/', getAllCases);

router.get('/:caseId', getCase);

router.post('/', addCase);

router.patch('/:caseId', updateCase);

router.delete('/:caseId', deleteCase);

module.exports = router;

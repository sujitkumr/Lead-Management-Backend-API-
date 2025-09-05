const express = require('express');
const {
  getLeads,
  getLead,
  createLead,
  updateLead,
  deleteLead,
  getLeadStats
} = require('../controllers/LeadController');

const router = express.Router();

router.route('/')
  .get(getLeads)
  .post(createLead);

router.route('/stats/overview')
  .get(getLeadStats);

router.route('/:id')
  .get(getLead)
  .put(updateLead)
  .delete(deleteLead);

module.exports = router;
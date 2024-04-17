const express = require('express');
const router = express.Router();

// MySQL connection
const db = require('./db');

// Create Transaction
router.post('/api/transactions', (req, res) => {
  const { senderId, recipientId, amount, description } = req.body;
  const sql = 'INSERT INTO transactions (sender_id, recipient_id, amount, description) VALUES (?, ?, ?, ?)';
  db.query(sql, [senderId, recipientId, amount, description], (err, result) => {
    if (err) {
      console.error('Error creating transaction:', err);
      res.status(500).json({ error: 'Error creating transaction' });
      return;
    }
    res.status(201).json({ message: 'Transaction created successfully', transactionId: result.insertId });
  });
});

// Get All Transactions
router.get('/api/transactions', (req, res) => {
  const sql = 'SELECT * FROM transactions';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching transactions:', err);
      res.status(500).json({ error: 'Error fetching transactions' });
      return;
    }
    res.status(200).json(results);
  });
});

// Update Transaction
router.put('/api/transactions/:id', (req, res) => {
  const { amount, description } = req.body;
  const transactionId = req.params.id;
  const sql = 'UPDATE transactions SET amount = ?, description = ? WHERE id = ?';
  db.query(sql, [amount, description, transactionId], (err) => {
    if (err) {
      console.error('Error updating transaction:', err);
      res.status(500).json({ error: 'Error updating transaction' });
      return;
    }
    res.status(200).json({ message: 'Transaction updated successfully' });
  });
});

// Delete Transaction
router.delete('/api/transactions/:id', (req, res) => {
  const transactionId = req.params.id;
  const sql = 'DELETE FROM transactions WHERE id = ?';
  db.query(sql, [transactionId], (err) => {
    if (err) {
      console.error('Error deleting transaction:', err);
      res.status(500).json({ error: 'Error deleting transaction' });
      return;
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  });
});

module.exports = router;

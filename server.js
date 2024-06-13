const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON request body

const dbConfig = {
  host: "data_base",
  user: "cuci",
  password: "masuk",
  database: "cuci_sepatu"
};

let db;

function handleDisconnect() {
  db = mysql.createConnection(dbConfig);

  db.connect(err => {
    if (err) {
      console.error('Error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // Retry after 2 seconds
    } else {
      console.log('Connected as id ' + db.threadId);
    }
  });

  db.on('error', err => {
    console.error('DB error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log('Reconnecting to the database...');
      handleDisconnect(); // Reconnect on connection lost
    } else {
      throw err; // Unexpected errors
    }
  });
}

handleDisconnect();

app.get('', (req, res) => {
  return res.json("masuk")
});




app.get('/cuci_sepatu', (req, res) => {
  const sql = "SELECT * FROM cuci_sepatu";
  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error in query:', err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

// New endpoint to handle data insertion
app.post('/cuci_sepatu', (req, res) => {
  const { nama, tanggal, paket, jenis_sepatu, no_hp } = req.body;
  const sql = "INSERT INTO cuci_sepatu (nama, tanggal, paket, jenis_sepatu, no_hp) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [nama, tanggal, paket, jenis_sepatu, no_hp], (err, result) => {
    if (err) {
      console.error('Error in inserting data:', err);
      return res.status(500).json(err);
    }
    res.status(200).json({ message: 'Data inserted successfully', id: result.insertId });
  });
});

// Delete data by ID
app.delete('/cuci_sepatu/:id', (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM cuci_sepatu WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json({ message: "Data deleted successfully" });
  });
});

app.listen(8081, () => {
  console.log("Server listening on port 8081");
});

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Port backend, bisa disesuaikan

app.use(bodyParser.json());

// Konfigurasi koneksi ke MySQL menggunakan variabel lingkungan
const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"sepatu",
  database:"cuci_sepatu"
});


db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

// Contoh endpoint untuk mendapatkan data dari MySQL
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM cuci_sepatu'; // Ganti 'table_name' dengan nama tabel yang sebenarnya
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

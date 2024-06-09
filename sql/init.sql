CREATE TABLE cuci_sepatu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    tanggal DATE NOT NULL,
    paket ENUM('biasa', 'lumayan', 'bagus') NOT NULL,
    jenis_sepatu ENUM('canvas', 'katun', 'kulit', 'thermoplastic rubber') NOT NULL,
    no_hp INT (15) NOT NULL
);

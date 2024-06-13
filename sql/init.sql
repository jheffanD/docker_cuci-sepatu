CREATE TABLE cuci_sepatu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    tanggal DATE NOT NULL,
    paket ENUM('biasa', 'lumayan', 'bagus') NOT NULL,
    jenis_sepatu ENUM('canvas', 'katun', 'kulit', 'thermoplastic rubber') NOT NULL,
    no_hp INT (15) NOT NULL
);

INSERT INTO cuci_sepatu (nama, tanggal, paket, jenis_sepatu, no_hp) VALUES
('John Doe', '2024-06-12', 'biasa', 'canvas', 123456789),
('Jane Smith', '2024-06-13', 'lumayan', 'katun', 987654321),
('Alice Johnson', '2024-06-14', 'bagus', 'kulit', 555555555),
('Bob Brown', '2024-06-15', 'biasa', 'thermoplastic rubber', 123123123),
('Sarah Williams', '2024-06-16', 'lumayan', 'canvas', 456789123),
('Michael Davis', '2024-06-17', 'biasa', 'katun', 789456123),
('Emily Wilson', '2024-06-18', 'bagus', 'kulit', 369258147),
('David Martinez', '2024-06-19', 'lumayan', 'canvas', 159357258),
('Jessica Taylor', '2024-06-20', 'biasa', 'katun', 951753456),
('Daniel Anderson', '2024-06-21', 'bagus', 'kulit', 753951456);

import { useEffect, useState } from "react";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8081/cuci_sepatu')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8081/cuci_sepatu/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchData(); // Refresh data list after deletion
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">
        List Pelanggan
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th className="px-6 py-3 text-left">Nama</th>
              <th className="px-6 py-3 text-left">Tanggal Masuk</th>
              <th className="px-6 py-3 text-left">Membership</th>
              <th className="px-6 py-3 text-left">Jenis Sepatu</th>
              <th className="px-6 py-3 text-left">No HP</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.map((d) => (
              <tr key={d.id} className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
                <td className="px-6 py-4">{d.nama}</td>
                <td className="px-6 py-4">{d.tanggal}</td>
                <td className="px-6 py-4">{d.paket}</td>
                <td className="px-6 py-4">{d.jenis_sepatu}</td>
                <td className="px-6 py-4">{d.no_hp}</td>
                <td className="px-6 py-4 flex justify-center space-x-2">
                  <button 
                    onClick={() => handleDelete(d.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

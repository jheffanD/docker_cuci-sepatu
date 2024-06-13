import { useEffect, useState } from "react";

export default function Input() {
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    nama: '',
    tanggal: '',
    paket: 'biasa',  
    jenis_sepatu: 'katun',  
    no_hp: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8081/cuci_sepatu')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8081/cuci_sepatu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchData();
        fetchData();
        setFormData({
          nama: '',
          tanggal: '',
          paket: '',
          jenis_sepatu: '',
          no_hp: ''
        }); 
      })
      .catch(err => console.log(err));
  };


  return (
    <div className="max-w-2xl mx-auto p-4 pt-6 pb-8">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full xl:w-1/2 px-4 mb-6 xl:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nama-pemilik"
            >
              Nama Pemilik Sepatu
            </label>
            <input
              type="text"
              required
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full xl:w-1/2 px-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="tanggal"
            >
              Tanggal
            </label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full xl:w-1/2 px-4 mb-6 xl:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="membership"
            >
              Paket:
            </label>
            <select
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              name="paket"
              value={formData.paket}
              onChange={handleChange}
            >
              <option value="biasa">Biasa</option>
              <option value="lumayan">Lumayan</option>
              <option value="bagus">Bagus</option>
            </select>
          </div>
          <div className="w-full xl:w-1/2 px-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="jenis"
            >
              Jenis Sepatu:
            </label>
            <select
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              name="jenis_sepatu"
              value={formData.jenis_sepatu}
              onChange={handleChange}
            >
              <option value="canvas">Canvas</option>
              <option value="katun">Katun</option>
              <option value="kulit">Kulit</option>
              <option value="thermoplastic rubber">Thermoplastic Rubber</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full px-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="no-handphone"
            >
              No. Handphone
            </label>
            <input
              type="number"
              name="no_hp"
              value={formData.no_hp}
              onChange={handleChange}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Cetak Nota
          </button>
        </div>
      </form>
    </div>
  );
}

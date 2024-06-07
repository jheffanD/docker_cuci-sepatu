export default function List() {
  return (
    <div className="max-w-6xl mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">
       List Pelangan
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
            <tr className="border-b border-gray-200 hover:bg-gray-100 transition duration-300">
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">2022-01-01</td>
              <td className="px-6 py-4">Gold</td>
              <td className="px-6 py-4">Sneakers</td>
              <td className="px-6 py-4">081234567890</td>
              <td className="px-6 py-4 flex justify-center space-x-2">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

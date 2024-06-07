export default function Input() {
  return (
    <div className="max-w-2xl mx-auto p-4 pt-6 pb-8">
      <form>
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
              name="membership"
            >
              <option value="" disabled selected>
                {/* Select your option */}
              </option>
              <option value="silver">Biasa</option>
              <option value="platinum">Lumayan</option>
              <option value="gold">Bagus</option>
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
              name="jenis"
            >
              <option value="" disabled selected>
                {/* Select your option */}
              </option>
              <option value="canvas">Canvas</option>
              <option value="katun">Katun</option>
              <option value="kulit">Kulit</option>
              <option value="thermoplastic-rubber">Thermoplastic Rubber</option>
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
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Cetak Nota
          </button>
        </div>
      </form>
    </div>
  );
}

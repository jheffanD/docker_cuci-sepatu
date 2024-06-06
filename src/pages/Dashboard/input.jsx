export default function input() {
  return (
    <>
      <div className="mt-40 flex justify-center items-center">
        <form>
          <div>
            <input type="text" required />
            <span>Nama Pemilik Sepatu</span>
          </div>
          <div>
            <input type="date" required />
          </div>
          <div>
            <label htmlFor="membership" lock>  Membership:</label>
            <select className="block w-full p-2 border border-gray-300 rounded" name="membership">
              <option value="" disabled selected>Select your option</option>
              <option value="silver">Silver</option>
              <option value="platinum">Platinum</option>
              <option value="gold">Gold</option>
            </select>
          </div>
          <div>
            <label htmlFor="jenis" lock>  Jenis Sepatu:</label>
            <select className="block w-full p-2 border border-gray-300 rounded" name="membership">
              <option value="" disabled selected>Select your option</option>
              <option value="silver">Canvas</option>
              <option value="platinum">Katun</option>
              <option value="gold">Kulit</option>
              <option value="gold">Thermoplastic Rubber</option>
            </select>
          </div>
          <div>
            <label htmlFor="">No.Handphone</label>
            <input type="number" required />
          </div>
        </form>
      </div>
    </>
  );
}

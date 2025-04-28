export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 items-center">
      <main className="flex flex-col gap-8 w-full max-w-md items-center">
        <p className="text-4xl font-bold text-green-600">GreenPark</p>
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
        <form className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-4 py-2 bg-white text-gray-900"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="border rounded px-4 py-2 bg-white text-black"
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}
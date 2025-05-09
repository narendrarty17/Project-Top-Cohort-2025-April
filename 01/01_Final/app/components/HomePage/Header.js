import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Logo + Company + Nav */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <img src="./HomePage/Header/01_Logo.svg" alt="logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold text-blue-600">StockTracker Pro</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Dashboard</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Watchlist</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Portfolio</a>
        </nav>
      </div>

      {/* Center: Search */}
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-64">
        <Image
          src="./HomePage/Header/02_Search.svg"
          alt="Search Icon"
          width={28}
          height={28}
          className="opacity-70 pr-2"
        />
        <input
          type="text"
          placeholder="Search stocks..."
          className="w-full text-gray-800 outline-none text-sm"
        />
      </div>

      {/* Right: Auth Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">Login</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Logout</button>
      </div>
    </header>
  );
}

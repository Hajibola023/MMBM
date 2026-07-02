export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-black text-white">
      <h1 className="text-2xl font-black tracking-widest">
        MMBM
      </h1>

      <ul className="flex gap-8 text-sm uppercase tracking-wider">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">Shop</li>
        <li className="cursor-pointer hover:text-gray-400">About</li>
        <li className="cursor-pointer hover:text-gray-400">Contact</li>
      </ul>
    </nav>
  );
}
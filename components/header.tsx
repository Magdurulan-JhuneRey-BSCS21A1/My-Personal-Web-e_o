export default function Header() {
  return (
    <header className="h-16 bg-blue-500 flex items-center justify-between px-8 shadow-md">
      <div className="text-white font-bold text-xl">Cute</div>
      <nav className="space-x-6">
        <a href="#donate" className="text-white hover:text-blue-200 transition">
          Donate
        </a>
      </nav>
    </header>
  );
}

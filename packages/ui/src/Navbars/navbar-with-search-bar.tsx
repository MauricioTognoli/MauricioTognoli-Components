import { Bell, MenuIcon, SearchIcon, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavbarWithSearchBar() {
  return (
    <nav className="bg-black border-b border-gray-700 text-gray-200 px-4 py-2.5 flex items-center justify-between sm:px-6 md:px-10">
      {/* --- Left Section --- */}
      <div className="flex items-center gap-3">
        {/* Ícono de menú (solo mobile) */}
        <button className="md:hidden">
          <MenuIcon size={26} strokeWidth={2.5} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-mt.png"
            alt="Logo"
            width={62}
            height={45}
            className="object-contain"
          />
        </Link>
      </div>

      {/* --- Center Links (solo desktop) --- */}
      <div className="hidden md:flex gap-8 text-lg font-medium">
        <Link href="/" className="hover:text-violet-400 transition-colors">
          Inicio
        </Link>
        <Link href="/movies" className="hover:text-violet-400 transition-colors">
          Películas
        </Link>
        <Link href="/series" className="hover:text-violet-400 transition-colors">
          Series
        </Link>
        <Link href="/contact" className="hover:text-violet-400 transition-colors">
          Contacto
        </Link>
      </div>

      {/* --- Right Section --- */}
      <div className="flex items-center gap-3">
        {/* Ícono de búsqueda (solo mobile) */}
        <button className="md:hidden">
          <SearchIcon size={26} strokeWidth={2.5} />
        </button>

        {/* Barra de búsqueda (solo desktop) */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1.5 w-56 lg:w-64 focus-within:ring-2 focus-within:ring-violet-500">
          <SearchIcon size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none w-full text-sm"
          />
        </div>

        {/* Ícono de notificación */}
        <Link href="/" className="hover:text-violet-400 transition-colors">
          <Bell size={26} strokeWidth={2.5} />
        </Link>

        {/* Ícono de usuario */}
        <div className="bg-gray-500 text-black rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center hover:opacity-90 transition">
          <UserRound size={22} />
        </div>
      </div>
    </nav>
  );
}

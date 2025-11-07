import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="bg-gray-900 text-white p-6 flex justify-center lg:justify-between items-center flex-wrap">
      <h1 className="font-bold mx-26 my-5 md:my-0 text-2xl hover:text-gray-400 ">
        <Link to="/">
            Preztech
          </Link></h1>
      <ul className="flex gap-8 sm:mx-26">
        <li>
          <Link to="/integrantes" className="hover:text-gray-400 font-bold text-lg sm:text-xl">
            Integrantes
          </Link>
        </li>
        <li>
          <Link to="/solucoes" className="hover:text-gray-400 font-bold text-lg sm:text-xl">
            Soluções
          </Link>
        </li>
        <li>
          <Link to="/contato" className="hover:text-gray-400 font-bold text-lg sm:text-xl">
            Contato
          </Link>
        </li>
        <li>
          <Link to="/faq" className="hover:text-gray-400 font-bold text-lg sm:text-xl">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  </>
  );
}

export default Navbar;

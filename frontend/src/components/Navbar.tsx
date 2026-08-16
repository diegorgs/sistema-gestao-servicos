import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      
      <div className="font-bold text-xl">
        ServiceHub
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Início
          </Link>
        </li>

        <li>
          <Link to="/login" className="hover:underline">
            Entrar
          </Link>
        </li>

        <li>
          <Link to="/cadastro" className="hover:underline">
            Cadastrar
          </Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar
function Cadastro() {
  return (
    <main className="min-h-screen flex items-center justify-center">
        <form>  
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
    
            <div className="mb-4">
              <label htmlFor="senha" className="block text-gray-700 text-sm font-bold mb-2">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
    
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cadastrar
            </button>
        </form> 
    </main>
    )
}

export default Cadastro
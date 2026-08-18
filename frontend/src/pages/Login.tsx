import { useState } from 'react'


function Login() {
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
            if (!email) {
              console.log('Digite seu email')
              return
            }
        
            if (!senha) {
              console.log('Digite sua senha')
              return
            }
        
            if (senha.length < 6) {
              console.log('A senha deve ter pelo menos 6 caracteres')
              return
            }

        console.log('Formulário válido!')
        console.log('Email:', email)
        console.log('Senha:', senha)
  }
  return (
    
    <main className="min-h-screen flex items-center justify-center">   
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                    value={senha}
                    onChange={(event) => setSenha(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Entrar
            </button>
        </form>
    </main>
  )
}

export default Login
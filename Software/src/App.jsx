import { useState } from "react";

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/register", {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg shadow-xl transition duration-300 transform hover:shadow-2xl">
        <h1 className="text-2xl mb-4">Register</h1>
        <form onSubmit={registerUser}>
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-indigo-500"
            placeholder="Name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-indigo-500"
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:border-indigo-500"
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

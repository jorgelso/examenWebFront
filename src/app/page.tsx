'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

export default function Home() {
  const { setUser } = useUser();
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (form.username === 'test' && form.password === 'test') {
      setUser({
        username: form.username,
        password: form.password,
      });

      setLoading(false);
      setForm({ username: '', password: '' });
      router.push('/welcome');
    } else {
      setLoading(false);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-8 font-[family-name:var(--font-geist-sans)] bg-gray-50 items-center">
      <main className="flex flex-col gap-8 w-full max-w-md items-center">
        <p className="text-4xl font-bold text-green-600">GreenPark</p>
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 bg-white text-gray-900"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="border rounded px-4 py-2 bg-white text-black"
              required
            />
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </main>
    </div>
  );
}
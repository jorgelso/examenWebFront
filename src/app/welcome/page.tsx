'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

export default function WelcomePage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600">
        Bienvenido, {user.fullName}, disfruta tu experiencia en GreenPark
      </h1>
    </div>
  );
}
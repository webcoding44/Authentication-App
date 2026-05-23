'use client';

import { useRouter } from 'next/navigation';
import { authClient } from '../../lib/auth-client';

export const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () =>
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push('/login'),
      },
    });

  return (
    <button
      onClick={handleSignOut}
      className='bg-red-500 text-white px-4 py-2 rounded'
    >
      Sign Out
    </button>
  );
};

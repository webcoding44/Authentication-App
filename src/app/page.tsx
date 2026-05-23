import { redirect } from 'next/navigation';
import { SignOut } from '../components/auth/sign-out';
import { getsession } from '../lib/auth';

export const Homepage = async () => {
  const session = await getsession();

  if (!session) {
    // Redirect to login page or show login form
    redirect('/login');
  }

  return (
    <>
      <h1>Home Page</h1>

      <SignOut />
    </>
  );
};

export default page;

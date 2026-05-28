import { SignUp } from "@/src/components/auth/sign-in";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <SignUp />
      </div>
    </div>
  );
}

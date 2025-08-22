import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
    } catch {
      toast.error("Login failed");
    }
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created!");
    } catch {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h2 className="text-xl mb-4">Login / Register</h2>
      <input className="p-2 m-2 text-black" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="p-2 m-2 text-black" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <div className="space-x-4">
        <button onClick={login} className="bg-brandGold p-2 rounded">Login</button>
        <button onClick={register} className="bg-brandRed p-2 rounded">Register</button>
      </div>
    </div>
  );
}

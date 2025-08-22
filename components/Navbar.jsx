import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-brandPurple p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-brandGold">Banking Bear</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-brandGold">Home</Link>
        <Link to="/dashboard" className="hover:text-brandGold">Dashboard</Link>
        <Link to="/login" className="hover:text-brandGold">Login</Link>
      </div>
    </nav>
  );
}

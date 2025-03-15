import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full transform hover:scale-105 transition duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800">Create Account</h2>
        <form className="mt-6">
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg mt-3 focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg mt-3 focus:ring-2 focus:ring-blue-400" />
          <div className="relative mt-3">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" 
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-3 flex items-center text-gray-500" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <motion.button 
            className="w-full mt-6 bg-green-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>
        </form>
        <p className="text-center mt-6 text-gray-700">
          Already have an account? <Link to="/login" className="text-blue-500 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;

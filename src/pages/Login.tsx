import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div 
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full transform hover:scale-105 transition-all duration-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500 mt-2">Sign in to your account</p>
        
        <form className="mt-6">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all" 
          />
          
          <div className="relative mt-4">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <button 
              type="button" 
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <button 
            className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>
        
        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-500 font-semibold hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Login;
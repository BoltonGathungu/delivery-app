import React,{useState, useEffect} from 'react'
import { login } from '../apis';
import { useNavigate } from 'react-router-dom';



function LoginUser() {
    const[email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[errors, setErrors] =useState({});
    const navigate = useNavigate()
    // const[isSubmitted, setIsSubmtted] = useState(false);





    // useEffect(()=>{
    //     if(isSubmitted){
    //         validateForm();
    //     }
    // },[email,password]);
    

   

    const validateForm =()=>{
        const newErrors = {};
        if(!email){
            newErrors.email = 'Email is required';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = 'Email address is invalid';
        }

        if(!password){
            newErrors.password ='Password is required';
        }else if(password.length < 6){
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        // setIsSubmtted(true);
        e.preventDefault()

      console.log("loging in")
        if(validateForm()){
           try {
               const response = await login({username : email,password});
               if(response.status===200){
                console.log("Login successful", response.data);
                localStorage.setItem('user', JSON.stringify(response.data.user))
                navigate('/dashboard/products')
               }else{
                console.log("Login failed", response.data);
                setErrors(response.data)
               }
           } catch (error) {
               console.error("An error occurred during login", error);
            
           }
        }
    };
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-2xl font-bold mb-6 text-center">Login</div>
      
      {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}

      <form >
        <div className="mb-4">
          <div className="block text-gray-700">Email</div>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            placeholder="Enter valid email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  </div>      
  )
}

export default LoginUser;

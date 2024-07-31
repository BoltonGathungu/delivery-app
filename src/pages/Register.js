import React, { useState } from "react";
import { register } from "../apis";
import { useNavigate } from "react-router-dom";
import Button from "../components/dashboard/Button";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [phone, setPhone] = useState();
  const [names, setNames] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  const onRegister = async () => {
    if (email && password && role && names && phone && confirmPassword == password) {
      setLoading(true);
      try {
        const response = await register({
          email: email,
          password: password,
          role: role,
          names: names,
          phone: phone,
          
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      navigate('/dashboard/products')
    }
  };

  return (
    <div className="p-20 flex flex-col gap-y-6 items-center justify-center ">
      <div>Register</div>
      <div>
        <div> Email</div>
        <input
          className="border border-black rounded-md "
          type="email"
          name=""
          placeholder="Enter valid email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <div>Names</div>
        <input
          className="border border-black rounded-md "
          type="text"
          name=""
          placeholder="Enter your names"
          onChange={(e) => setNames(e.target.value)}
        />
      </div>
      <div>
        <div> Phone</div>
        <input
          className="border border-black rounded-md "
          type="tel"
          name=""
          placeholder="Enter your phone no."
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <div> Password</div>
        <input
          className="border border-black rounded-md "
          type="password"
          name=""
          placeholder="Enter strong password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <div> Confirm Password</div>
        <input
          className="border border-black rounded-md "
          type="password"
          name=""
          placeholder="Enter valid email"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <div> Role</div>
        <select
          className="border border-black rounded-md"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="client">Client</option>
        </select>
      </div>

      <Button
        action='Register'
        onClickHandler={onRegister}
        className='px-6 py-1 rounded-full'
        loading={loading}
      />
      
    </div>
  );
}

export default Register;
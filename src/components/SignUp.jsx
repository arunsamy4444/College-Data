import React, { useState } from "react";
import axios from 'axios'

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/api/signup', {
            name,
            email,
            password
        });
        
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setPassword('');
        alert('signed up  successfully');
        // route to home page
        window.location.href = '/';
    } catch (error) {
        console.error('Error submitting :', error);
        alert('Failed to submit ');
    }
};


  return (
    <div>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Sign Up</button>
        <p>
        Already have an account? <a href="/login">Login</a>
      </p>
      </form>
    </div>
  );

}
export default SignUp;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to PawConnect</h1>
      <p>
        PawConnect is a platform dedicated to locating, adopting, and rescuing stray animals. 
        Join us to help make a difference!
      </p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

export default Home;
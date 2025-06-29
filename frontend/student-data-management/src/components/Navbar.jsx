import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import { auth, provider } from '../firebase';


function Navbar() {
  const [user, setUser] = useState(null);

  //check authentication state when the component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state if logged in, otherwise null
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Handle Google Sign-In
  const handleLogin = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log("User Signed In:", result.user);
    })
    .catch((error) => {
      console.error("Authentication Error:", error);
    });
  };

  // Handle Logout
  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      console.log("User Signed Out");
    })
    .catch((error) => {
      console.error("Sign Out Error:", error);
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid fs-5">
        <Link className='text-decoration-none' to="/">
          <span className="navbar-brand text-light"><i className="fa fa-database"></i> Student Management System</span>
        </Link>
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto gap-lg-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='text-decoration-none' to="/">
                <span className="nav-link text-light active" aria-current="page"><i className="fa fa-home"></i> Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className='text-decoration-none' to="/addstudent">
                <span className="nav-link text-light"><i className="fa fa-edit"></i> Add Students</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className='text-decoration-none' to="/viewstudents">
                <span className="nav-link text-light"><i className="fa fa-users"></i> View Students</span>
              </Link>
            </li>
          </ul>
          <div>
            {/* Show Login button if user is not logged in, Logout button if user is logged in */}
            {user ? (
              <button onClick={handleLogout} className="btn btn-outline-danger" type="button">
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className="btn btn-outline-success" type="button">
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
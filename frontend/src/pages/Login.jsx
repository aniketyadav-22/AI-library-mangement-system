import { Spinner } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student');
  const { loading } = useSelector(state => state.auth);

  return (
    <>
    {loading? (<Spinner/>):(
        <section
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundColor: 'hsl(0, 0%, 96%)',
        padding: '2rem',
      }}
    >
      <div className="container">
        <div className="row gx-lg-5 align-items-center justify-content-center">
          {/* Left Column */}
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
            <h1 className="my-5 display-3 fw-bold ls-tight">
              📚E-Library <br />
              <span className="text-primary">Management System</span>
            </h1>
            <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
              Welcome to the e-Library. Access, borrow, and manage books online—anytime, anywhere.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body py-5 px-md-5">
                <form>

                    <div style={{fontSize:"20px"}}><center><b>Login</b></center></div>
                    <br />
                  {/* Role Selection */}
                  <div className="form-outline mb-4">
                    <label htmlFor="role" className="form-label">Select Role</label>
                    <select
                      id="role"
                      className="form-select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="student">Student</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="formName"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="formName">
                      Name
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="formEmail"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="formEmail">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="formPassword"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="formPassword">
                      Password
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    login
                  </button>

                  <div className="text-center mb-3">
                    <p className="mb-2">
                      or{' '}
                      <Link to="/signup" className="text-primary fw-semibold text-decoration-none">
                        sign up
                      </Link>
                    </p>
                  </div>

                  <div className="text-center">
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
    )}
    </>
  );
};

export default Login;









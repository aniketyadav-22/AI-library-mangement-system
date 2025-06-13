import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
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

                <div style={{fontSize:"20px"}}><center><b>Sign Up</b></center></div>
                <br />
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

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="formPassword"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="formPassword">
                      Phone Number
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="formPassword"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="formPassword">
                      Branch
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="formPassword"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="formPassword">
                      Admission year
                    </label>
                  </div>
                
                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>

                  <div className="text-center mb-3">
                    <p className="mb-2">
                      or{' '}
                      <Link to="/" className="text-primary fw-semibold text-decoration-none">
                        login
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
  );
};

export default SignUp;

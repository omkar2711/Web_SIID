import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  return (
    <div className="vh-100 p-4 background-radial-gradient overflow-hidden">

      <MDBRow>

        <MDBCol md="6" className="text-center text-md-start d-flex flex-column justify-content-center">

          <h1 className="my-5 gradient__text display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
          Join  <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}> the Safety Revolution!</span>
          </h1>

          <p className="px-3" style={{ color: 'hsl(218, 81%, 85%)' }}>
          Sign up now to gain access to exclusive benefits, real-time updates, and personalized insights. Together, let's make a difference and build a future where road safety is paramount. Join us today and be a part of the safety revolution!
          </p>

        </MDBCol>

        <MDBCol md="6" className="position-relative">

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className="my-5 bg-glass">
          
            <MDBCardBody className="p-5">
            

              <MDBRow>
              <h2>Sign up</h2>
                <MDBCol col="6">
                  <MDBInput wrapperClass="mb-4" label="First name" id="form1" type="text" />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput wrapperClass="mb-4" label="Last name" id="form2" type="text" />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass="mb-4" label="Email" id="form3" type="email" />
              <MDBInput wrapperClass="mb-4" label="Password" id="form4" type="password" />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Subscribe to our newsletter" />
              </div>

              
              <Link style={{ textDecoration: 'none', color: 'White' }}
                onMouseOver={(e) => e.target.style.color = 'DarkBlue'}
                onMouseOut={(e) => e.target.style.color = 'White'}
                className="SignUpbtnLink mb-4" size="md" to="../../Home">Sign Up</Link>
              

           

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </div>
  );
}

export default SignUp;

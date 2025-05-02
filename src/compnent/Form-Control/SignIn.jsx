import React, { useState } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const SignIn = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  // 🔐 Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      alert("Login successful!");
    } catch (error) {
      alert("Login error: " + error.message);
    }
  };

  // ✍️ Sign Up
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupData.email,
        signupData.password
      );

      const user = userCredential.user;

      // 🗃️ Save additional info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        email: signupData.email,
        address: signupData.address,
        city: signupData.city,
        upzilla: signupData.state,
        zip: signupData.zip,
        createdAt: new Date(),
      });

      alert("Signup successful and data saved!");
      setIsFlipped(false);
    } catch (error) {
      alert("Signup error: " + error.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className={`card-box ${isFlipped ? "flipped" : ""}`}>
        {/* Login */}
        <div className="form_front">
          <h2 className="mt-3">Login</h2>
          <Form onSubmit={handleLogin}>
            <Row>
              <Col md={12} className="my-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </Col>
              <Col md={12} className="mb-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </Col>
              <Col md={12}>
                <Button className="w-100" color="success" type="submit">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
          <p className="mt-3">
            Don't have an account yet?{" "}
            <span className="link-btn" onClick={() => setIsFlipped(true)}>
              Sign Up
            </span>
          </p>
        </div>

        {/* Signup */}
        <div className="form_back">
          <h2 className="mt-3">Sign Up</h2>
          <Form onSubmit={handleSignup}>
            <Row>
              <Col md={6}>
                <Label>First Name</Label>
                <Input
                  value={signupData.firstName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, firstName: e.target.value })
                  }
                />
              </Col>
              <Col md={6}>
                <Label>Last Name</Label>
                <Input
                  value={signupData.lastName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, lastName: e.target.value })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </Col>
              <Col md={6}>
                <Label>Password</Label>
                <Input
                  type="password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Label>City</Label>
                <Input
                  value={signupData.city}
                  onChange={(e) =>
                    setSignupData({ ...signupData, city: e.target.value })
                  }
                />
              </Col>
              <Col md={4}>
                <Label>Upzilla</Label>
                <Input
                  value={signupData.state}
                  onChange={(e) =>
                    setSignupData({ ...signupData, state: e.target.value })
                  }
                />
              </Col>
              <Col md={2}>
                <Label>Zip</Label>
                <Input
                  value={signupData.zip}
                  onChange={(e) =>
                    setSignupData({ ...signupData, zip: e.target.value })
                  }
                />
              </Col>
            </Row>
            <FormGroup>
              <Label>Address</Label>
              <Input
                value={signupData.address}
                onChange={(e) =>
                  setSignupData({ ...signupData, address: e.target.value })
                }
              />
            </FormGroup>
            <Button color="success" className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
            <p className="mt-3">
              Already have an account?{" "}
              <span className="link-btn" onClick={() => setIsFlipped(false)}>
                Login
              </span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

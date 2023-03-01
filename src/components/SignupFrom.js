import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvaider";
import Button from "./Button";
import Checkbox from "./Checkbox";
import From from "./From";
import TextInput from "./TextInput";

const SignupFrom = () => {
  const { singup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassord, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password);
    if (password !== confirmPassord) {
      return setError("passwords not match!");
    }
    try {
      setError("");
      setLoading(true);
      await singup(email, password, username);
      navigate(from, { replace: true });
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };
  return (
    <From style={{ height: "500px" }} onSubmit={onSubmit}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
        value={confirmPassord}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Checkbox
        text="I agree to the Terms & Conditions"
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <Button type="submit" disabled={loading}>
        <span>Submit now</span>
      </Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </From>
  );
};

export default SignupFrom;

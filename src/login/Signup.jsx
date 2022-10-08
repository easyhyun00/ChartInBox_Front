import React, { useState, useEffect } from "react";
import SignupForm from "./SignupForm";
import SignupHeader from "./SignupHeader";
import "./logincss/signup.css";

function Signup() {
  return (
    <div class="signupFragment">
      <SignupHeader></SignupHeader>
      <SignupForm></SignupForm>
    </div>
  );
}

export default Signup;

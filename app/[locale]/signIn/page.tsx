"use client";

import Input from "@/app/components/Reusables/Input";
import React, { useState } from "react";

function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="bg-primary">
      <Input
        label="Email Address"
        value="12113123"
        onChange={() => {}}
        error="Please enter your email"
        isPassword
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
    </div>
  );
}

export default SignIn;

"use client";
import VerificationMethod from "@/app/components/Auth/verificationMethod";
import React, { useState } from "react";

const Signin = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <VerificationMethod
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Signin;

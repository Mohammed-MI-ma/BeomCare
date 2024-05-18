import React, { useState } from "react";
import StepTwo from "../StepTwo";
import StepOne from "../StepOne";
import StepThree from "../StepThree";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    category: "",
    lat: 0,
    lng: 0,
    phone: "",
    lastname: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    const value = e?.target ? e.target.value : e;
    setFormData({ ...formData, [input]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  switch (step) {
    case 1:
      return (
        <StepOne
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <StepTwo
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <StepThree
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return <div>Error: Step not found</div>;
  }
};

export default MultiStepForm;
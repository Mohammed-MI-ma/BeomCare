import { message } from "antd";
import React, { useState, lazy, Suspense, useTransition } from "react";

const StepOne = lazy(() => import("../StepOne"));
const StepTwo = lazy(() => import("../StepTwo"));
const StepThree = lazy(() => import("../StepThree"));

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    lat: 34.02184645937183, // Initial latitude for Rabat, Hassan, Morocco
    lng: -6.837458135560156, // Initial longitude for Rabat, Hassan, Morocco
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
    if (input == "map")
      setFormData({ ...formData, lat: value.lat, lng: value.lng });
    else setFormData({ ...formData, [input]: value });
  };

  const [isPending, startTransition] = useTransition();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <>
          {step === 1 && (
            <StepOne
              nextStep={() => startTransition(() => nextStep())}
              handleChange={handleChange}
              values={formData}
            />
          )}
          {step === 2 && (
            <StepTwo
              prevStep={prevStep}
              nextStep={() => startTransition(() => nextStep())}
              handleChange={handleChange}
              values={formData}
            />
          )}
          {step === 3 && (
            <StepThree
              prevStep={prevStep}
              handleChange={handleChange}
              values={formData}
            />
          )}
        </>
      )}
    </Suspense>
  );
};

export default MultiStepForm;

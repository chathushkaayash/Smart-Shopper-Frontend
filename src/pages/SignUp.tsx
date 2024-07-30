import { useState } from "react";
import MiddleContainer from "../components/Containers/MiddleContainer";

import SetPassword from "@/components/SignUp/SetPassword";
import SendEmail from "../components/SignUp/SendEmail";
import SendOTP from "../components/SignUp/SendOTP";

export interface RegisterForm {
  name: string;
  email: string;
  contactNumber: string;
  password: string;
}



const SignUp = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm | null>(null);
  const [stage, setStage] = useState(0);

  return (
    <MiddleContainer>
      {stage === 0 && (
        <SendEmail
          registerForm={registerForm}
          setRegisterForm={(s) => setRegisterForm(s)}
          setStage={setStage}
        />
      )}
      {stage === 1 && (
        <SetPassword
          registerForm={registerForm}
          setRegisterForm={(s) => setRegisterForm(s)}
          setStage={setStage}
        />
      )}
      {stage === 2 && <SendOTP registerForm={registerForm} />}
    </MiddleContainer>
  );
};

export default SignUp;

import { useState } from "react";
import MiddleContainer from "../components/Containers/MiddleContainer";

import SendEmail from "../components/SignUp/SendEmail";
import SendOTP from "../components/SignUp/SendOTP";
const SignUp = () => {
  const [stage, setStage] = useState(0);

  return (
    <MiddleContainer>
      {stage === 0 && <SendEmail setStage={(s: number) => setStage(s)} />}
      {stage === 1 && <SendOTP />}
    </MiddleContainer>
  );
};

export default SignUp;

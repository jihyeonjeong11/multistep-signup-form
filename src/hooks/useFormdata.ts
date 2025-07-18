import { INITIAL_FORM_DATA } from "@/components/Signup/constants";
import { useState } from "react";

function useFormdata(number: number) {
  const [formCompleted, setFormCompleted] = useState(
    new Array(number).fill(false)
  );
}

export default useFormdata;

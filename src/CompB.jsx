import { useContext } from "react";
import { FirstName, LastName } from "./UseContextHook_2";
const CompB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      <h2>
        My name is {fname} {lname}
      </h2>
    </>
  );
};

export default CompB;

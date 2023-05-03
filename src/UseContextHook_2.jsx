import React, { useContext } from "react";
import CompA from "./CompA";

const FirstName = useContext();
const LastName = useContext();

const UseContextHook_2 = () => {
  return (
    <>
      <h1>Use Context Hook</h1>

      {/* First name using context hook */}
      <FirstName.Provider value={"Muhammad"}>
        
        {/* last name using same hook */}
        <LastName.Provider value="Tahir">
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default UseContextHook_2;
export { FirstName, LastName};

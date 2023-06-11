import React, { useContext } from "react";
import { UserContext } from "./context";

function AllData() {
  const ctx = useContext(UserContext);

  return (
    <div>
      <h1>{JSON.stringify(ctx.users)}</h1>
      <h3>We Are at the AllData Page</h3>
    </div>
  );
}

export default AllData;

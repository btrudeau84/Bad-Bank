import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "./context";

function CreateAccount() {
  const ctx = useContext(UserContext);
  const {
    getValues,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    const values = getValues();

    e.preventDefault();
    //console.log(`data: ${data.typeof}`);
    ctx.users.push(values);
    e.target.reset();
    console.log(`values: ${JSON.stringify(values)}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <p>This is required</p>}

        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.email && <p>This Is required</p>}

        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && <p>Min Requirement is 8 characters</p>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateAccount;

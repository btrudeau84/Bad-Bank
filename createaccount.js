import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "./context";
import FormThing from "./reacthookform";
import BasicExample from "./reacthookform";

function CreateAccount() {
  // const ctx = useContext(UserContext);
  // const [button, setButton] = useState("Create Account");
  // const [enable, setEnable] = useState(true)
  // const [firstName, setfirstName] = useState("");
  // const [lastName, setlastName] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState(
  //   "Enter Your 'secure' password here..."
  // );
  //  const onSubmit = e => {
  //   //e.preventDefault();
  //   setButton("Add Another Account");
  //   // setfirstName("");
  //   // setlastName("");
  //   // setemail("");
  //   // setpassword("");
  //  }


  return (

    <BasicExample/>
    // <div className="container text-center">
    //   <div className="row">
    //     <div className="col"></div>
    //     <div className="col-6">
    //       {/* Where the Card Begins*/}
    //       <div className="card">
    //         <div className="card-body">
    //           <h5 className="card-title">Let's Make an Account!</h5>
    //           <form className="row g-3 needs-validation" noValidate onSubmit={onSubmit()}>
    //             <div className="col-md-4">
    //               <label for="validationCustom01" className="form-label">
    //                 last name
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 id="validationCustom01"
    //                 placeholder="name"
    //                 required
    //               />
    //               <div className="valid-feedback">Looks good!</div>
    //             </div>
    //             <div className="col-md-4">
    //               <label for="validationCustom02" className="form-label">
    //                 Last name
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 id="validationCustom02"
    //                 placeholder="last name"
    //                 required
    //               />
    //               <div className="valid-feedback">Looks good!</div>
    //             </div>
    //             <div className="col-md-4">
    //               <label for="validationCustomUsername" className="form-label">
    //                 Email
    //               </label>
    //               <div className="input-group has-validation">
    //                 <input
    //                   type="text"
    //                   className="form-control"
    //                   id="validationCustomUsername"
    //                   aria-describedby="inputGroupPrepend"
    //                   required
    //                 />
    //                 <div className="invalid-feedback">
    //                   Please enter an Email.
    //                 </div>
    //               </div>
    //             </div>

    //             <div class="container">
    //               <form action="/action_page.php">
    //                 <label for="psw">Password</label>
    //                 <input
    //                   type="password"
    //                   id="psw"
    //                   name="psw"
    //                   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    //                   title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
    //                   placeholder={password}
    //                   required
    //                 />
    //               </form>
    //             </div>

    //             <div id="message">
    //               <h3>Password must contain the following:</h3>
    //               <p id="letter" class="invalid">
    //                 A <b>lowercase</b> letter
    //               </p>
    //               <p id="capital" class="invalid">
    //                 A <b>capital (uppercase)</b> letter
    //               </p>
    //               <p id="number" class="invalid">
    //                 A <b>number</b>
    //               </p>
    //               <p id="length" class="invalid">
    //                 Minimum <b>8 characters</b>
    //               </p>
    //             </div>

    //             <div className="col-12">
    //               <button
    //                 id="submitbutton"
    //                 className="btn btn-primary"
    //                 type="submit"
                    
    //                 //onClick={onSubmit()}
    //                 disabled={enable}
    //                 //onKeyUp={checkForm()}
    //               >
    //                 {button}
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col"></div>
    //   </div>
    // </div>
  );

  


  // function checkForm() {
  //   inputs.onfocus = function () {
  //     document.getElementById("message").style.display = "block";
  //     console.log(inputs);
  //   };
  // }
}

export default CreateAccount;

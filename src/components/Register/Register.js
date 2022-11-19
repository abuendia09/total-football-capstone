//styles
import "./Register.css";

// //Imports
// import { useRef, useState, useEffect } from "react";

// const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[!@#$%]).{8,24}$/;

export default function Register() {}
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [validName, SetValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setPwd] = useState("");
//   const [validPwd, SetValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState("");
//   const [validMatch, SetValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);
//   useEffect(() => {
//     const result = USER_REGEX.test(user);
//     console.log(result);
//     console.log(user);
//     SetValidName(result);
//   }, [user]);

//   useEffect(() => {
//     const result = PWD_REGEX.test(pwd);
//     console.log(result);
//     console.log(pwd);
//     SetValidPwd(result);
//     const match = pwd === matchPwd;
//     SetValidMatch(match);
//   }, [pwd, matchPwd]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd, matchPwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };

//   return (
//     <section>
//       <p ref={errRef}>{errMsg}</p>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">
//           Username:
//           <span className={validName ? "valid" : "hide"}>
//             <FontAwesomeIcon icon={faCheck} />
//           </span>
//           <span className={validName || !user ? "hide" : "invalid"}>
//             <FontAwesomeIcon icon={faTimes} />
//           </span>
//         </label>
//         <input
//           type="text"
//           id="username"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setUser(e.target.value)}
//           required
//           onFocus={() => setUserFocus(true)}
//           onBlur={() => setUserFocus(false)}
//         />
//         <p
//           id="uidnote"
//           className={
//             userFocus && user && !validName ? "instructions" : "offscreen"
//           }
//         >
//           <FontAwesomeIcon icon={faInfoCircle} />
//           4 to 24 character.
//           <br />
//           Must begin with a letter.
//           <br />
//           Letters, numbers, underscores, hyphens allowed.
//         </p>

//         <label htmlFor="password">
//           Password:
//           <span className={validPwd ? "valid" : "hide"}>
//             <FontAwesomeIcon icon={faCheck} />
//           </span>
//           <span className={validPwd || !pwd ? "hide" : "invalid"}>
//             <FontAwesomeIcon icon={faTimes} />
//           </span>
//         </label>
//         <input
//           type="text"
//           id="password"
//           onChange={(e) => setPwd(e.target.value)}
//           required
//           aria-invalid={validPwd ? "false" : "true"}
//           aria-describedby="pwdnote"
//           onFocus={() => setPwdFocus(true)}
//           onBlur={() => setPwdFocus(false)}
//         />
//         <p
//           id="pwdnote"
//           className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
//         >
//           <FontAwesomeIcon icon={faInfoCircle} />
//           8 to 24 characters. <br />
//           Must include uppercase and lowercase letters, a number and a special
//           character. <br />
//           Allowed special characters:!@#$%
//         </p>

//         <label htmlFor="confirm_pwd">
//           Confirm Password:
//           <span className={validMatch && matchPwd ? "valid" : "hide"}>
//             <FontAwesomeIcon icon={faCheck} />
//           </span>
//           <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
//             <FontAwesomeIcon icon={faTimes} />
//           </span>
//         </label>
//         <input
//           type="text"
//           id="confirm_pwd"
//           onChange={(e) => setMatchPwd(e.target.value)}
//           required
//           onFocus={() => setMatchFocus(true)}
//           onBlur={() => setMatchFocus(false)}
//         />
//         <p
//           id="confirmnote"
//           className={matchFocus && !validMatch ? "instructions" : "offscreen"}
//         >
//           <FontAwesomeIcon icon={faInfoCircle} />
//           Must match the first password input field.
//         </p>

//         <button
//           disabled={!validName || !validPwd || !validMatch ? true : false}
//         >
//           Sign Up
//         </button>
//       </form>
//       <p>
//         Already registered? <br />
//         <span className="line">
//           {/*I need to put router link here*/}
//           <a href="#">Sign in</a>
//         </span>
//       </p>
//     </section>
//   );
// }

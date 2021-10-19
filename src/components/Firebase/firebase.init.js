// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./firebase.config";
// const initAuth = () => {
//   initializeApp(firebaseConfig);
// };
// export default initAuth;
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

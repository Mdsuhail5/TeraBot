/* 
Copyright 2025 [Hemanth S P]

 Licensed under the Apache License, Version 2.0 (the "License");
 You may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/index.css";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register.jsx";
import Forgetpassword from "./components/ForgetPassword.jsx";
import Landingpage from "./components/Landingpage";
import ChatBot from "./components/ChatBot.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Therapist from "./components/Therapist";
import Service from "./components/Service.jsx";
import Protected from "./components/ProtectedRoute.jsx";
import AccessAccount from "./components/AccessAccount";
import TherapistLogin from "./components/TherapistLogin";
import TherapistRegister from "./components/TherapistRegistration.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

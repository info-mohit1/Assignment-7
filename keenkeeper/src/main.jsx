import { StrictMode } from "react";
import {createRoot } from 'react-dom/client';
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className ="main-wrapper">
      <App/>
      <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration : 3000,
        style: {
          background : '#363636',
          color : '#fff',
          borderRadius : '10px',
        },
      }}
      />
    </div>
  </StrictMode>
);
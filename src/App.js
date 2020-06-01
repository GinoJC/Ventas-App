import React, {useState} from 'react';
import {ToastContainer} from 'react-toastify';
import firebase from "./utils/firebase";
import "firebase/auth";
import LoggedLayout from "./layouts/MainLayout";

function App() {
  const [user, setUser] = useState(null);
  const [reloadApp, setReloadApp] = useState(false);

  return (
    <>
			<LoggedLayout user={user} setReloadApp={setReloadApp}/>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnVisibilityChange
				draggable
				pauseOnHover={false}
			/>
		</>
  );
}

export default App;

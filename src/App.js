import React, {useState} from 'react';
import {ToastContainer} from 'react-toastify';
import firebase from "./utils/Firebase";
import "firebase/auth";
import MainLayout from "./layouts/MainLayout";

function App() {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [reloadApp, setReloadApp] = useState(false);

	firebase.auth().onAuthStateChanged(currentUser => {

		if(!currentUser){
			setUser(null);
		}else{
			setUser(currentUser);
		}
		setIsLoading(false);
	});

	if(isLoading){
		return null;
	}

  	return (
    	<>
			<MainLayout user={user} setReloadApp={setReloadApp}/>
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

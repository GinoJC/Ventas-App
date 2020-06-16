import React, {useState} from 'react';
import {ToastContainer} from 'react-toastify';
import firebase from "./utils/Firebase";
import "firebase/auth";
import MainLayout from "./layouts/MainLayout";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [reloadApp, setReloadApp] = useState(false);

	/* firebase.auth().onAuthStateChanged(currentUser => {

		if(!currentUser){
			setUser(null);
		}else{
			setUser(currentUser);
		}
		setIsLoading(false);
	}); 
	if(isLoading){
		return null;
	}*/


  	return (
    	<>
			<MainLayout setReloadApp={setReloadApp}/>
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

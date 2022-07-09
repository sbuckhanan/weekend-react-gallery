import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Form from '../Form/Form';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

// component sudo code
// component for actual "card". This will be added with each map
// component for the info that will show on click plus buttons?
// Click handle for the description
// Add form to the top for stretch
// update like count next to like button
// get request via axios
// put request via axios

function App() {
	//? Array to hold results from db
	const [galleryList, setGalleryList] = useState([]);
	//? render on page load
	useEffect(() => {
		getGallery();
	}, []);
	//? function to request data from server
	const getGallery = () => {
		axios
			.get('/gallery')
			.then((response) => {
				console.log(response.data);
				setGalleryList(response.data);
			})
			.catch((error) => {
				alert('Error with get request', error);
			});
	};

	console.log(galleryList);

	return (
		<div className='App'>
			<Header />
			<Form getGallery={getGallery} />
			<GalleryList list={galleryList} getGallery={getGallery} />
		</div>
	);
}

export default App;

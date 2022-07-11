import axios from 'axios';
import { useState } from 'react';
import './Form.css';

function Form({ getGallery }) {
	//? variables to hold value of inputs
	const [newTitle, setNewTitle] = useState('');
	const [newPath, setNewPath] = useState('');
	const [newDescription, setNewDescription] = useState('');

	//? this updates the new pathVariable onChange to the object of the file
	const addFile = (event) => setNewPath(event.target.files[0]);

	//? this formats the image into the format that is needed for upload and sends it over via post request
	const sendImage = (event) => {
		const data = new FormData();
		//? name of input and then name of the variable holding the image
		data.append('image', newPath);

		axios
			.post('/gallery/image', data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				alert('Error with post', error);
			});
	};

	//? function to handle submit. post request with data to go into DB
	const handleSubmit = (event) => {
		console.log('submit button');
		event.preventDefault();
		sendImage();

		axios
			.post('/gallery', { title: newTitle, file: newPath.name, description: newDescription })
			.then((response) => {
				console.log(response);
				getGallery();
			})
			.catch((error) => {
				alert('Error with post', error);
			});
		setNewTitle('');
		setNewDescription('');
	};

	return (
		<form encType='multipart/form-data'>
			<label>Title:</label>
			<input
				placeholder='Title'
				className='input'
				onChange={(event) => setNewTitle(event.target.value)}
				value={newTitle}
			/>
			<label>Image:</label>
			<input type='file' name='image' className='input' onChange={addFile} />
			<label>Description:</label>
			<input
				placeholder='Some Description'
				className='input'
				onChange={(event) => setNewDescription(event.target.value)}
				value={newDescription}
			/>
			<button className='button' onClick={handleSubmit} type='submit'>
				Save
			</button>
		</form>
	);
}
export default Form;

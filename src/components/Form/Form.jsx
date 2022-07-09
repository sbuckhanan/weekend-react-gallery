import axios from 'axios';
import { useState } from 'react';
import './Form.css';

function Form({ getGallery }) {
	//? variables to hold value of inputs
	const [newTitle, setNewTitle] = useState('');
	const [newPath, setNewPath] = useState('');
	const [newDescription, setNewDescription] = useState('');

	//? function to handle submit. post request
	const handleSubmit = (event) => {
		console.log('submit button');
		event.preventDefault();
		axios
			.post('/gallery', { title: newTitle, path: newPath, description: newDescription })
			.then((response) => {
				console.log(response);
				getGallery();
			})
			.catch((error) => {
				alert('Error with post', error);
			});
		setNewTitle('');
		setNewPath('');
		setNewDescription('');
	};

	return (
		<form>
			<label>Title:</label>
			<input
				placeholder='Title'
				className='input'
				onChange={(event) => setNewTitle(event.target.value)}
				value={newTitle}
			/>
			<label>Image name:</label>
			<input
				placeholder='goat_small.jpg'
				className='input'
				onChange={(event) => setNewPath(event.target.value)}
				value={newPath}
			/>
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

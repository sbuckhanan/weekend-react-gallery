import { useState } from 'react';
import './Form.css';

function Form() {
	const [newPath, setNewPath] = useState('');
	const [newDescription, setNewDescription] = useState('');

	const handleSubmit = (event) => {
		console.log('submit button');
		event.preventDefault();
	};

	return (
		<form>
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

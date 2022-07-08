import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';

// component sudo code
// component for actual "card". This will be added with each map
// component for the info that will show on click plus buttons?
// Click handle for the description
// Add form to the top for stretch
// update like count next to like button
// get request via axios
// put request via axios

function App() {
	const [newPath, setNewPath] = useState('');
	const [newDescription, setNewDescription] = useState('');

	const handleSubmit = (event) => {
		console.log('submit button');
		event.preventDefault();
	};

	return (
		<div className='App'>
			<Header />
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
			<div className='card'>
				<div className='card__content'>
					<img src='images/goat_small.jpg' />
					<p className='description'>Description goes here</p>
					<button className='likeButton'>LIKE</button>
				</div>
			</div>
			<div className='card'>
				<div className='card__content'>
					<img src='images/goat_small.jpg' />
					<p className='description'>Description goes here</p>
					<button className='likeButton'>LIKE</button>
				</div>
			</div>
			<div className='card'>
				<div className='card__content'>
					<img src='images/goat_small.jpg' />
					<p className='description'>Description goes here</p>
					<button className='likeButton'>LIKE</button>
				</div>
			</div>
		</div>
	);
}

export default App;

import React, { useState } from 'react';
import './App.css';

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
			<header className='App-header'>
				<h1 className='App-title'>Gallery of My Life</h1>
			</header>
			<form>
				<label>Image URL:</label>
				<input
					className='input'
					onChange={(event) => setNewPath(event.target.value)}
					value={newPath}
				/>
				<label>Description:</label>
				<input
					className='input'
					onChange={(event) => setNewDescription(event.target.value)}
					value={newDescription}
				/>
				<button onClick={handleSubmit} type='submit'>
					Save
				</button>
			</form>
			<div className='card'>
				<div className='card__content'>
					<img src='images/goat_small.jpg' />
					<p>Gallery goes here</p>
					<button>LIKE</button>
				</div>
			</div>
		</div>
	);
}

export default App;

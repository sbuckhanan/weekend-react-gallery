import axios from 'axios';
import './GalleryItem.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

function GalleryItem({ item, getGallery }) {
	//? holds the state to show description
	const [isClicked, setIsClicked] = useState(false);

	//? Handles our put request to update likes
	const handleLike = () => {
		//? send over the id of the item
		const id = item.id;
		axios
			.put(`/gallery/${id}`)
			.then((response) => {
				console.log(response);
				getGallery();
			})
			.catch((error) => {
				alert('Error with put request', error);
			});
	};

	//? delete from the database
	const handleDelete = () => {
		//? send over the id of the item
		const id = item.id;
		axios
			.delete(`/gallery/${id}`)
			.then((response) => {
				console.log(response);
				getGallery();
			})
			.catch((error) => {
				alert('Error with put request', error);
			});
	};

	const toggleDescription = () => setIsClicked(!isClicked);

	return (
		<>
			<div className='container'>
				<p className='itemTitle'>{item.title}</p>
				<img src={item.path} onClick={toggleDescription} />
				{isClicked ? (
					<p className='description'>{item.description}</p>
				) : (
					<p className='description'></p>
				)}
				<ThumbUpIcon className='likeButton' onClick={handleLike} />
				<DeleteForeverIcon className='deleteButton' onClick={handleDelete} />
				<p className='likeCount'> LIKES: {item.likes}</p>
			</div>
		</>
	);
}
export default GalleryItem;

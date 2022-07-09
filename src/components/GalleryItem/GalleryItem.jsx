import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({ item, getGallery }) {
	const handleLike = () => {
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

	return (
		<>
			<img src={item.path} />
			<p className='description'>{item.description}</p>
			<button className='likeButton' onClick={handleLike}>
				LIKES: {item.likes}
			</button>
		</>
	);
}
export default GalleryItem;

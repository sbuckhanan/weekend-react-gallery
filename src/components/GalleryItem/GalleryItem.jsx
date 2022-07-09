import axios from 'axios';
import './GalleryItem.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

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
			<p className='itemTitle'>{item.title}</p>
			<img src={item.path} />
			<p className='description'>{item.description}</p>
			<ThumbUpIcon className='likeButton' onClick={handleLike} />
			<DeleteForeverIcon className='deleteButton' onClick={handleLike} />
			<p className='likeCount'> LIKES: {item.likes}</p>
		</>
	);
}
export default GalleryItem;

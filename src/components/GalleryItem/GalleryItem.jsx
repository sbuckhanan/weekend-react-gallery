function GalleryItem({ item }) {
	return (
		<>
			<img src={item.path} />
			<p className='description'>{item.description}</p>
			<button className='likeButton'>LIKE: {item.likes}</button>
		</>
	);
}
export default GalleryItem;

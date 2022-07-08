function GalleryList() {
	return (
		<>
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
		</>
	);
}

export default GalleryList;

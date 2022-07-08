import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ list }) {
	return (
		<>
			{list.map((item) => {
				return (
					<div className='card' key={item.id}>
						<div className='card__content'>
							<GalleryItem item={item} />
						</div>
					</div>
				);
			})}
		</>
	);
}

export default GalleryList;

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

router.get('/', (req, res) => {
	const queryText = 'SELECT * FROM "gallery";';
	pool
		.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error with get request', error);
			res.sendStatus(500);
		});
});

router.put('/like/:id', (req, res) => {
	const galleryId = req.params.id;
	const queryText = 'UPDATE "gallery" SET "likes" = likes+1 WHERE id = $1;';
	pool
		.query(queryText, [galleryId])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error with get request', error);
			res.sendStatus(500);
		});
}); // END PUT Route

// PUT Route
// router.put('/like/:id', (req, res) => {
// 	console.log(req.params);
// 	const galleryId = req.params.id;
// 	for (const galleryItem of galleryItems) {
// 		if (galleryItem.id == galleryId) {
// 			galleryItem.likes += 1;
// 		}
// 	}
// 	res.sendStatus(200);
// }); // END PUT Route

// GET Route
// router.get('/', (req, res) => {
// 	res.send(galleryItems);
// }); // END GET Route

module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

router.get('/', (req, res) => {
	const queryText = 'SELECT * FROM "gallery" ORDER BY "id";';
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

router.post('/', (req, res) => {
	const newPost = req.body;
	const queryText = 'INSERT INTO "gallery" (path, description) VALUES ($1, $2);';
	pool
		.query(queryText, [newPost.path, newPost.description])
		.then((result) => {
			res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error with get request', error);
			res.sendStatus(500);
		});
});

router.put('/:id', (req, res) => {
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

module.exports = router;

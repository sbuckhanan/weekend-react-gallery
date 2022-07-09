const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const multer = require('multer');
// DO NOT MODIFY THIS FILE FOR BASE MODE

const fileStorageEngine = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images');
	},
	filename: (req, file, cb) => {
		// cb(null, Date.now() + '--' + file.originalname);
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: fileStorageEngine });

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
	console.log(newPost);
	const path = `images/${newPost.file}`;
	const queryText = 'INSERT INTO "gallery" (title, path, description) VALUES ($1, $2, $3);';
	pool
		.query(queryText, [newPost.title, path, newPost.description])
		.then((result) => {
			// res.send(result.rows);
		})
		.catch((error) => {
			console.log('Error with get request', error);
			// res.sendStatus(500);
		});
});

router.post('/image', upload.single('image'), (req, res) => {
	res.send('File uploaded successfully');
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

router.delete('/:id', (req, res) => {
	const galleryId = req.params.id;
	const queryText = 'DELETE FROM "gallery" WHERE id = $1;';
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

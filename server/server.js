const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const galleryRouter = require('./routes/gallery.router.js');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

/** ---------- MIDDLEWARE ---------- **/
app.use(cors());
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', galleryRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
	console.log('Listening on port: ', PORT);
});

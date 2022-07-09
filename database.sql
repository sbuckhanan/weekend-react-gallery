CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (80) NOT NULL,
	"path" VARCHAR (80) NOT NULL,
	"description" VARCHAR (120) NOT NULL,
	"likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" (title, path, description) VALUES ('Some Goat', 'images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.')
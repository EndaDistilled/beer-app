CREATE TABLE beers
(
    beer_id  SERIAL PRIMARY KEY,
    beer_name   varchar(30) NOT NULL,
    brewery_location varchar(30) NOT NULL,
    beer_description varchar(500) NULL,
    alcohol_percentage float NOT NULL
);

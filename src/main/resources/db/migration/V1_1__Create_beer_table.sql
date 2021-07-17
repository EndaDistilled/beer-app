CREATE SEQUENCE IF NOT EXISTS beer_seq START WITH 1;

CREATE TABLE IF NOT EXISTS beers
(
    beer_id             integer PRIMARY KEY DEFAULT nextval('beer_seq' :: REGCLASS) not null,
    beer_name           text,
    brewery_location    text,
    beer_description    text,
    alcohol_percentage  float
);

INSERT INTO beers (beer_id,beer_name,brewery_location,beer_description,alcohol_percentage)
VALUES (1,'Hob House 13','Dublin Ireland','Hop House 13 is brewed by the Brewers Project, who also manufacture Guinness Dublin Porter',5.0);
INSERT INTO beers (beer_id,beer_name,brewery_location,beer_description,alcohol_percentage)
VALUES (2,'Heineken','Netherlands','Heineken Lager Beer, or simply Heineken is a pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International',5.0);
INSERT INTO beers (beer_id,beer_name,brewery_location,beer_description,alcohol_percentage)
VALUES (3,'YellowBelly','Wexford Ireland','Our Citra Pale Ale is brewed with the finest German & Belgian malts,',4.8);
INSERT INTO beers (beer_id,beer_name,brewery_location,beer_description,alcohol_percentage)
VALUES (4,'Budweiser','United States','Budweiser is an American-style pale lager produced by Anheuser-Busch',5.0);
INSERT INTO beers (beer_id,beer_name,brewery_location,beer_description,alcohol_percentage)
VALUES (5,'Cascade','Australia','Tasmania oldest brewery offering tours, tastings & events, plus drinks in the garden',6.0);

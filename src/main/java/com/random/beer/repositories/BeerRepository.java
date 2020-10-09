package com.random.beer.repositories;

import com.random.beer.models.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

public interface BeerRepository extends JpaRepository<Beer,Long> {


    @Query(value = "SELECT beer_id from beers ORDER BY RANDOM () LIMIT 1", nativeQuery = true)
    List<Long> findRandomBeer();

}



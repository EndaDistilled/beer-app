package com.random.beer.controllers;

import com.random.beer.models.Beer;
import com.random.beer.repositories.BeerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.PushBuilder;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api/v1/beers")
public class BeersController {
    @Autowired
    private BeerRepository beerRepository;

    @GetMapping
    public List<Beer> list(){
        return beerRepository.findAll();
    }


    @GetMapping
    @RequestMapping("{id}")
    public Beer get(@PathVariable Long id){
        return beerRepository.getOne(id);
    }

    @GetMapping
    @RequestMapping("random")
    public Beer findRandomBeer(){
        Long random_Beer = beerRepository.findRandomBeer().get(0);
        return beerRepository.getOne(random_Beer);
    }


    @PostMapping
    @ResponseStatus()
    public Beer create(@RequestBody final Beer beer){
        return beerRepository.saveAndFlush(beer);
    }

    @RequestMapping(value ="{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        beerRepository.deleteById(id);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.PUT)
    public Beer update(@PathVariable Long id, @RequestBody Beer beer){
        Beer existingBeer = beerRepository.getOne(id);
        BeanUtils.copyProperties(beer,existingBeer,"beer_id");
        return beerRepository.saveAndFlush(existingBeer);
    }
}


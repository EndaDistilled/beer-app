package com.random.beer.controllers;

import com.random.beer.models.Beer;
import com.random.beer.repositories.BeerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//too allow other request come in form other servers 3000 frontend  4200 angular
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/api/v1/beers")
@Slf4j
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
        // deepcode ignore XSS: <please specify a reason of ignoring this>
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


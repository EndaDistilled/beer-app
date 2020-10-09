package com.random.beer.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;

@Entity(name = "beers")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Beer {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long beer_id;
private String beer_name;
private String brewery_location;
private String beer_description;
private float alcohol_percentage;

public Beer(){

    }
    public Long getBeer_id() {
        return beer_id;
    }

    public void setBeer_id(Long beer_id) {
        this.beer_id = beer_id;
    }

    public String getBeer_name() {
        return beer_name;
    }

    public void setBeer_name(String beer_name) {
        this.beer_name = beer_name;
    }

    public String getBrewery_location() {
        return brewery_location;
    }

    public void setBrewery_location(String brewery_location) {
        this.brewery_location = brewery_location;
    }

    public String getBeer_description() {
        return beer_description;
    }

    public void setBeer_description(String beer_description) {
        this.beer_description = beer_description;
    }

    public float getAlcohol_percentage() {
        return alcohol_percentage;
    }

    public void setAlcohol_percentage(float alcohol_percentage) {
        this.alcohol_percentage = alcohol_percentage;
    }
}

package com.random.beer.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;

@Entity(name = "beers")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "beers")
public class Beer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "generator")
    @SequenceGenerator(name = "generator", sequenceName = "beer_seq", allocationSize = 1)
    @Column(name = "beer_id", nullable = false, updatable = false)
    private Long beer_id;

    @Column()
    private String beer_name;

    @Column()
    private String brewery_location;

    @Column
    private String beer_description;

    @Column()
    private String alcohol_percentage;
}

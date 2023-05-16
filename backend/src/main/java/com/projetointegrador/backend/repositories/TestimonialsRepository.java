package com.projetointegrador.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.projetointegrador.backend.entities.Testimonials;

@Repository
public interface TestimonialsRepository extends JpaRepository<Testimonials, Long>{
	

}

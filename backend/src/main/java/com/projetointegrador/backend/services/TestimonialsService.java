package com.projetointegrador.backend.services;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.backend.dto.TestimonialsDTO;
import com.projetointegrador.backend.entities.Testimonials;
import com.projetointegrador.backend.repositories.TestimonialsRepository;
import com.projetointegrador.backend.services.exceptions.ResourceNotFoundException;
import javax.persistence.EntityNotFoundException;


@Service
public class TestimonialsService {
	
	@Autowired
	private TestimonialsRepository repository;
	
	@Transactional(readOnly = true)
	public Page<Object> findAllPaged(PageRequest buscaPaginada){
		Page<Testimonials> list = repository.findAll(buscaPaginada);
		return list.map(x -> new TestimonialsDTO(x));
	}
	
	@Transactional(readOnly = true)
	public TestimonialsDTO findById(Long id) {
		Optional<Testimonials> obj = repository.findById(id);
		Testimonials entity = obj.orElseThrow(() -> new ResourceNotFoundException("usuario nao localizado"));
		return new TestimonialsDTO(entity) ;
	}
	
	@Transactional
	public TestimonialsDTO insert(TestimonialsDTO dto) {
		Testimonials entity = new Testimonials();
		entity.setName(dto.getName());
		entity.setText(dto.getText());
		entity.setImg(dto.getImg());
		entity = repository.save(entity);
		return new TestimonialsDTO(entity);
	}
	
	@Transactional
	public TestimonialsDTO update(Long Id, TestimonialsDTO dto) {
		try {
		Testimonials entity = repository.getReferenceById(Id);
		entity.setName(dto.getName());
		entity.setText(dto.getText());
		entity.setImg(dto.getImg());
		entity = repository.save(entity);
		return new TestimonialsDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Usuario" + dto.getId() + "nao encontrado");
		}
	}
	
	// nao apresenta mensagem de usuario inexistente quando ja ouve uma exclusao do mesmo ID anteriormente
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			e.getMessage();
		}
		
	}
	
	

}

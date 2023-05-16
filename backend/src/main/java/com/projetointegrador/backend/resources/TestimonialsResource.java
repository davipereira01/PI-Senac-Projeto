package com.projetointegrador.backend.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projetointegrador.backend.dto.TestimonialsDTO;
import com.projetointegrador.backend.services.TestimonialsService;

@RestController
@RequestMapping(value = "/testimonials")
public class TestimonialsResource {
	
	@Autowired
	private TestimonialsService service;
	
	@GetMapping
	public ResponseEntity<Page<Object>> findAll(@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "name") String orderBy){
		
		PageRequest buscaPaginada = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		
		Page<Object> list = service.findAllPaged(buscaPaginada);
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<TestimonialsDTO> findById(@PathVariable Long id){
		
		TestimonialsDTO dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}
	
	//resposta 201
	@PostMapping
	public ResponseEntity<TestimonialsDTO> inserirUsuario(@RequestBody TestimonialsDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto); 
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<TestimonialsDTO> atualizarUsuario(@PathVariable Long id, @RequestBody TestimonialsDTO dto){
		dto = service.update(id, dto);
		return ResponseEntity.ok().body(dto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<TestimonialsDTO> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}

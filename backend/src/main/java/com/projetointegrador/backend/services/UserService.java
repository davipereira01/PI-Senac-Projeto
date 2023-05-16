package com.projetointegrador.backend.services;

import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.backend.dto.UserDTO;
import com.projetointegrador.backend.entities.User;
import com.projetointegrador.backend.repositories.UserRepository;
import com.projetointegrador.backend.services.exceptions.ResourceNotFoundException;
import javax.persistence.EntityNotFoundException;


@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	@Transactional(readOnly = true)
	public Page<Object> findAllPaged(PageRequest buscaPaginada){
		Page<User> list = repository.findAll(buscaPaginada);
		return list.map(x -> new UserDTO(x));
	}
	
	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(() -> new ResourceNotFoundException("usuario nao localizado"));
		return new UserDTO(entity, entity.getConnections()) ;
	}
	
	@Transactional(readOnly = true)
	public UserDTO findByName(Long id) {
		Optional<User> obj = repository.findById(id);
		User entity = obj.orElseThrow(() -> new ResourceNotFoundException("usuario nao localizado"));
		return new UserDTO(entity.getTestimonials(), entity) ;
	}
	
	@Transactional
	public UserDTO insert(UserDTO dto) {
		User entity = new User();
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setSenha(dto.getSenha());
		entity.setImg(dto.getImg());
		entity.setSex(dto.getSex());
		entity.setBirthdate(dto.getBirthdate());
		entity.setCity(dto.getCity());
		entity.setState(dto.getState());
		entity.setAbout(dto.getAbout());
		entity.setRating(dto.getRating());
		entity = repository.save(entity);
		return new UserDTO(entity);
	}
	
	@Transactional
	public UserDTO update(Long Id, UserDTO dto) {
		try {
		User entity = repository.getReferenceById(Id);
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setSenha(dto.getSenha());
		entity.setImg(dto.getImg());
		entity.setSex(dto.getSex());
		entity.setBirthdate(dto.getBirthdate());
		entity.setCity(dto.getCity());
		entity.setState(dto.getState());
		entity.setAbout(dto.getAbout());
		entity.setRating(dto.getRating());
		entity = repository.save(entity);
		return new UserDTO(entity);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Usuario" + dto.getFirstName() + "nao encontrado");
		}
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		}
		catch(EmptyResultDataAccessException e) {
			e.getMessage();
		}
		
	}
	
	

}

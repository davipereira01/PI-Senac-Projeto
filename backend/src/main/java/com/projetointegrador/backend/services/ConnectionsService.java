package com.projetointegrador.backend.services;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetointegrador.backend.dto.ConnectionsDTO;
import com.projetointegrador.backend.entities.Connections;
import com.projetointegrador.backend.repositories.ConnectionsRepository;
import com.projetointegrador.backend.services.exceptions.ResourceNotFoundException;
import javax.persistence.EntityNotFoundException;


@Service
public class ConnectionsService {
	
	@Autowired
	private ConnectionsRepository repository;
	
	@Transactional(readOnly = true)
	public Page<Object> findAllPaged(PageRequest buscaPaginada){
		Page<Connections> list = repository.findAll(buscaPaginada);
		return list.map(x -> new ConnectionsDTO(x));
	}
	
	@Transactional(readOnly = true)
	public ConnectionsDTO findById(Long id) {
		Optional<Connections> obj = repository.findById(id);
		Connections entity = obj.orElseThrow(() -> new ResourceNotFoundException("usuario nao localizado"));
		return new ConnectionsDTO(entity) ;
	}
	
	@Transactional
	public ConnectionsDTO insert(ConnectionsDTO dto) {
		Connections entity = new Connections();
		entity.setEmail(dto.getEmail());
		entity = repository.save(entity);
		return new ConnectionsDTO(entity);
	}
	
	@Transactional
	public ConnectionsDTO update(Long Id, ConnectionsDTO dto) {
		try {
		Connections entity = repository.getReferenceById(Id);
		entity.setEmail(dto.getEmail());
		entity = repository.save(entity);
		return new ConnectionsDTO(entity);
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

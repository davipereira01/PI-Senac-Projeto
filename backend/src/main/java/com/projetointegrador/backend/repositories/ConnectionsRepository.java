package com.projetointegrador.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.projetointegrador.backend.entities.Connections;

@Repository
public interface ConnectionsRepository extends JpaRepository<Connections, Long>{
	

}

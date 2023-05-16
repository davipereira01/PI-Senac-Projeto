package com.projetointegrador.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetointegrador.backend.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	

}

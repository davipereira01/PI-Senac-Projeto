package com.projetointegrador.backend.dto;

import java.io.Serializable;



import com.projetointegrador.backend.entities.Connections;

public class ConnectionsDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String email;
	
	
	public ConnectionsDTO () {}

	public ConnectionsDTO(Long id, String email) {
		this.id = id;
		this.email = email;
	}
	
	
	public ConnectionsDTO(Connections entity) {
		this.id = entity.getId();
		this.email = entity.getEmail();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


}

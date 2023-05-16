package com.projetointegrador.backend.dto;

import java.io.Serializable;



import com.projetointegrador.backend.entities.Connections;
import com.projetointegrador.backend.entities.Testimonials;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.projetointegrador.backend.entities.User;


public class UserDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String senha;
	private String img;
	private String sex;
	private LocalDate birthdate;
	private String city;
	private String state;
	private String about;
	private Integer rating;
	
	private List<ConnectionsDTO> connections = new ArrayList<>();
	
	private List<TestimonialsDTO> testimonials = new ArrayList<>();
	
	public UserDTO() {}

	

	public UserDTO(Long id, String firstName, String lastName, String email, String senha, String img, String sex,
			LocalDate birthdate, String city, String state, String about, Integer rating) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.senha = senha;
		this.img = img;
		this.sex = sex;
		this.birthdate = birthdate;
		this.city = city;
		this.state = state;
		this.about = about;
		this.rating = rating;
	}
	
	public UserDTO(User entity) {
		this.id = entity.getId();
		this.firstName = entity.getFirstName();
		this.lastName = entity.getLastName();
		this.email = entity.getEmail();
		this.senha = entity.getSenha();
		this.img = entity.getImg();
		this.sex = entity.getSex();
		this.birthdate = entity.getBirthdate();
		this.city = entity.getCity();
		this.state = entity.getState();
		this.about = entity.getAbout();
		this.rating = entity.getRating();
	}
	
	public UserDTO(User entity, List<Connections> connections) {
		this(entity);
		connections.forEach(u -> this.connections.add(new ConnectionsDTO(u)));
	}
	
	public UserDTO(Set<Testimonials> testimonials, User entity) {
		this(entity);
		testimonials.forEach(t -> this.testimonials.add(new TestimonialsDTO(t)));
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}


	public Integer getRating() {
		return rating;
	}
	
	public void setRating(Integer rating) {
		this.rating = rating;
	}



	public List<ConnectionsDTO> getConnections() {
		return connections;
	}



	public void setConnections(List<ConnectionsDTO> connections) {
		this.connections = connections;
	}
	

	

}

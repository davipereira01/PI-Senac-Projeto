package com.projetointegrador.backend.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import javax.persistence.Id;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToMany;

@Entity
public class Connection implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String firstName;
	private String lastName;
	private String email;
	private String senha;
	private String img;
	private String sex;
	
	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private LocalDate birthdate;
	private String city;
	private String state;
	private String about;
	
	@ManyToMany(mappedBy = "users")
	Set<User> users = new HashSet<>();
	private Integer rating;
	
	Set<Testimonial> testimonials = new HashSet<>();
	
	public Connection() {
		
	}
	

	public Connection(Long id, String firstName, String lastName, String email, String senha, String img, String sex,
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



	public Set<Connection> getUsers() {

		return users;
	}



	public void setUsers(Set<Connection> users) {
		this.users = users;
	}



	public Integer getRating() {
		return rating;
	}



	public void setRating(Integer rating) {
		this.rating = rating;
	}



	public Set<Testimonial> getTestimonials() {
		return testimonials;
	}



	public void setTestimonials(Set<Testimonial> testimonials) {
		this.testimonials = testimonials;
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (id == null) {
			if(other.getId() != null)
				return false;
		} else if (!id.equals(other.getId()))
			return false;
		return true;
	}
	

}

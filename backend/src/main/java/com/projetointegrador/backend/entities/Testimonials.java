package com.projetointegrador.backend.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table (name = "tb_testimonials")
public class Testimonials implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String text;
	private Integer rating;
	private String img;
	
	@ManyToMany
	@JoinTable(name = "tb_user_testimonials",
		joinColumns = @JoinColumn(name = "testimonials_id"),
		inverseJoinColumns = @JoinColumn(name = "user_id"))
	Set<User> users = new HashSet<>();
	
	public Testimonials() {}

	public Testimonials(Long id, String name, String text, Integer rating, String img) {
		this.id = id;
		this.name = name;
		this.text = text;
		this.rating = rating;
		this.img = img;
	}

	public Long getid() {
		return id;
	}

	public void setid(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public Set<User> getUsers() {
		return users;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Testimonials other = (Testimonials) obj;
			if(other.id != null) {
				return false;
			}else if (!id.equals(other.id))
				return false;				
		return true;
	}
	
	

}

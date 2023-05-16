package com.projetointegrador.backend.dto;

import java.io.Serializable;

import com.projetointegrador.backend.entities.Testimonials;

public class TestimonialsDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String text;
	private Integer rating;
	private String img;
	
	public TestimonialsDTO() {}

	public TestimonialsDTO(Long id, String name, String text, Integer rating, String img) {
		this.id = id;
		this.name = name;
		this.text = text;
		this.rating = rating;
		this.img = img;
	}
	
	public TestimonialsDTO(Testimonials entity) {
		this.id = entity.getid();
		this.name = entity.getName();
		this.text = entity.getText();
		this.rating = entity.getRating();
		this.img = entity.getImg();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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
	
	
}

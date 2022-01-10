package com.victor.resultprocessingsystem.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Student {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long matricno;
	private String name;
	@Column(name="email", unique=true)
	private String email;
	private String password;
	private String department;
	private int level;
	@OneToMany
	private List<Complaint> complaints;
	@Column(name = "picByte", length = 1000)
	private byte[] picture;
}

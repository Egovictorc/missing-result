package com.victor.resultprocessingsystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.victor.resultprocessingsystem.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
	public Optional<Student> findByMatricno(long matricno);
}

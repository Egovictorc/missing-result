package com.victor.resultprocessingsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.victor.resultprocessingsystem.exception.IncorrectCredentialException;
import com.victor.resultprocessingsystem.exception.StudentNotFoundException;
import com.victor.resultprocessingsystem.model.Student;
import com.victor.resultprocessingsystem.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	StudentRepository studentRepository;

	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepository.findAll();
	}

	public Student save(Student student) {
		// TODO Auto-generated method stub
		return studentRepository.save(student);
	}

	public ResponseEntity<Student> findByMatricno(long matricno, String password) {
		// TODO Auto-generated method stub

		Student student = studentRepository.findByMatricno(matricno).orElseThrow( () -> new StudentNotFoundException("No student exist with the given matric no"));
		if(!student.getPassword().equals(password)) {
			throw new IncorrectCredentialException("Incorrect username or password ");
		}
		return ResponseEntity.ok(student);		
	}

}

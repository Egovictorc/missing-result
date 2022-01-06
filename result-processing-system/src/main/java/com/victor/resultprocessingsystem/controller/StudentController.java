package com.victor.resultprocessingsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.victor.resultprocessingsystem.model.Student;
import com.victor.resultprocessingsystem.service.StudentService;

@RestController
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
//	get all students
	@GetMapping("/")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
		
	}
	
//	create new student
	@PostMapping("/")
	public Student createStudent(@RequestBody Student student) {
		return studentService.save(student);
	}

//	get student by matricno
	@GetMapping("/{matricno}")
	public ResponseEntity<Student> getStudentByUsername(@PathVariable long matricno, @RequestParam String password) {
		return studentService.findByMatricno(matricno, password);
	}
	
	

}

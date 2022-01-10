package com.victor.resultprocessingsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.victor.resultprocessingsystem.model.Student;
import com.victor.resultprocessingsystem.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	
//	get students count
	@GetMapping("/count")
	public long getStudentsSize() {
		return studentService.count();
	}

//	register new student
	@PostMapping("/")
	public ResponseEntity<Student> saveStudent(@RequestParam("file") MultipartFile file, 
			@RequestParam("name") String name,
			@RequestParam("username") String username,
			@RequestParam("email") String email,
			@RequestParam("department") String department
			) {
		String filename = file.getOriginalFilename();
		long size = file.getSize();
		System.out.println("name "+ name);
		System.out.println("filesize "+ size);
		return studentService.saveStudent(name, email, department, file);
//		return studentService.saveStudent(file);
	}
	
//	get all students
	@GetMapping("/")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	
////	create new student
//	@PostMapping("/")
//	public Student createStudent( Student student) {
//		return studentService.save(student);
//	}

//	get student by matricno
	@GetMapping("/{matricno}")
	public ResponseEntity<Student> getStudentByUsername(@PathVariable long matricno, @RequestParam String password) {
		return studentService.findByMatricno(matricno, password);
	}
	
	

}

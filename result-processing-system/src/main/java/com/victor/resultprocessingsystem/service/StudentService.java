package com.victor.resultprocessingsystem.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

		Student student = studentRepository.findByMatricno(matricno).orElseThrow( () -> new StudentNotFoundException("Student record does not exist"));
		if(!student.getPassword().equals(password)) {
			throw new IncorrectCredentialException("Invalid username or password ");
		}
		return ResponseEntity.ok(student);		
	}
	public long count() {
		// TODO Auto-generated method stub
		return studentRepository.count();
	}

	public ResponseEntity<Student> saveStudent(String name, String email, String department, MultipartFile file) {
		Student newStudent = new Student();
		newStudent.setName(name);
		newStudent.setEmail(email);
		newStudent.setDepartment(department);
		// TODO Auto-generated method stub
		try {
			System.out.println("original size: "+ file.getSize());
			byte[] data = file.getBytes();
			newStudent.setPicture(compressByte(data));
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		studentRepository.save(newStudent);
		return ResponseEntity.ok(newStudent);
//		return null;
	}
	
	// compress the image bytes before storing it in the database
	private byte[] compressByte(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();
		
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		while(!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0, count);
		}
		
		try {
			outputStream.close();
		} catch(IOException e) {
			e.printStackTrace();
		}
		System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);
		System.out.println("uncompressed file size: "+ outputStream.toByteArray().length);
		return outputStream.toByteArray();
	}
	
//	uncompress the image bytes before returning it to the application
	
	private byte[] decompressBytes(byte[] data) {
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		
		byte[] buffer = new byte[1024];
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		while(!inflater.finished()) {
			int count;
			try {
				count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			} catch (DataFormatException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		return outputStream.toByteArray();
	}
}

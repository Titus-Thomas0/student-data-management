package com.titus.student_Data_Management.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.titus.student_Data_Management.model.Student;
import com.titus.student_Data_Management.repository.StudentRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/students")
public class StudentController {
	@Autowired
	StudentRepository studentRepository;
	
	//create student api
	
	@PostMapping
	public ResponseEntity<Student> createStudent(@RequestBody Student student) {
		Student saved = studentRepository.save(student);
		return new ResponseEntity<>(saved, HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<Student> getStudents() {
		return studentRepository.findAll();
	}
	
	@GetMapping("/{rollNo}")
	public Optional<Student> getStudentsById(@PathVariable Long rollNo) {
		return studentRepository.findById(rollNo);
	}
	
	@PutMapping("/{rollNo}")
	public Student updateStudent(@PathVariable Long rollNo, @RequestBody Student student) {
		Optional<Student> existingStudent = studentRepository.findById(rollNo);
	    if (existingStudent.isPresent()) {
	        student.setRollNo(rollNo);
	        return studentRepository.save(student);
	    } 
	    else {
	        throw new RuntimeException("Student with roll number " + rollNo + " not found");
	    }
	}
	
	@DeleteMapping("/{rollNo}")
	public void deleteStudent(@PathVariable Long rollNo) {
		if (studentRepository.existsById(rollNo)) {
	        studentRepository.deleteById(rollNo);
	    }
		else {
	        throw new RuntimeException("Student with roll number " + rollNo + " not found");
	    }
	}
	
}

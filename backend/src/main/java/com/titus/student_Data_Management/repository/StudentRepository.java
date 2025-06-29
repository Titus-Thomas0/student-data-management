package com.titus.student_Data_Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.titus.student_Data_Management.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}

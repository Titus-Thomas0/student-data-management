import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5455/api/students")
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5455/api/students/${id}`)
      .then(() => {
        alert("Student deleted successfully");
        setStudents(students.filter(student => student.rollNo !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className='text-primary text-center mt-5'>View Students</h1>
      <div className="container">
        <table className="table table-bordered text-center mt-5">
          <thead>
            <tr>
              <th>SNo</th>
              <th>Student Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr><td colSpan="8">No students found.</td></tr>
            ) : (
              students.map((student, index) => (
                <tr key={student.rollNo}>
                  <td>{index + 1}</td>
                  <td>{student.studentName}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>{student.phoneNumber}</td>
                  <td>{student.address}</td>
                  <td>{student.department}</td>
                  <td>
                    <Link to={`/editstudents/${student.rollNo}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(student.rollNo)} className="btn btn-danger ms-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewStudent;

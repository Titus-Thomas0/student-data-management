import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    studentName: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    department: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5455/api/students/${id}`)
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => {
        console.error('Error fetching student:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5455/api/students/${id}`, student)
      .then((response) => {
        alert('Student Updated Successfully');
        console.log(response);
        navigate('/viewstudents');
      })
      .catch(error => {
        console.error('Error updating student:', error);
      });
  };

  return (
    <div className='mt-5'>
      <h2 className='text-center text-primary'>Update Student Form</h2>
      <div className="row">
        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
          <img src="https://www.academyfront.com/images/blog/school-software.png" className='img-fluid' alt="Student Management" />
        </div>
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 mt-5">
          <div className="container">
            <form onSubmit={handleSubmit}>
              {['studentName', 'age', 'email', 'phoneNumber', 'address', 'department'].map((field) => (
                <p key={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:{' '}
                  <input
                    type={field === 'age' ? 'number' : 'text'}
                    name={field}
                    value={student[field]}
                    onChange={handleChange}
                    className='form-control w-75'
                  />
                </p>
              ))}
              <p>
                <input type="submit" value='Update Student' className='btn btn-primary' />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;

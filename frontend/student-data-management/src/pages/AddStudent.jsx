import React, { useState } from 'react'
import axios from 'axios';

function AddStudent() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [address,setAddress] = useState('');
  const [department,setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !department) {
      alert("Please fill all the required fields");
      return;
    }

    const details = {
      studentName: name,
      age: age,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      department: department
    }
    // console.log(details);
    axios.post("http://localhost:5455/api/students", details)
    .then((response) => {
      console.log(response.data);
      alert("Student added successfully");
      // Clear form
        setName('');
        setAge(0);
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setDepartment('');
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong while adding student.");
    });
  };

  return (
    <div className='mt-5'>
      <h2 className='text-center text-primary'>Add Student Form</h2>
      <div className="row">
        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
          <img src="https://www.academyfront.com/images/blog/school-software.png" className='img-fluid' alt="Student Management" />
        </div>
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 mt-5">
          <div className="container">
          <form action="" onSubmit={handleSubmit}>
            <p>
              Student Name: <input type="text" onChange={(e)=>setName(e.target.value)} className='form-control w-75' name='studentName' />
            </p>
            <p>
              Age: <input type="number" onChange={(e)=>setAge(e.target.value)} name='age' className='form-control w-75' />
            </p>
            <p>
              Email: <input type="email" onChange={(e)=>setEmail(e.target.value)} name='email' className='form-control w-75' />
            </p>
            <p>
              Phone: <input type="text" onChange={(e)=>setPhoneNumber(e.target.value)} name='phoneNumber' className='form-control w-75' />
            </p>
            <p>
              Address: <input type="text" onChange={(e)=>setAddress(e.target.value)} name='address' className='form-control w-75' />
            </p>
            <p>
              Department: <input type="text" onChange={(e)=>setDepartment(e.target.value)} name='department' className='form-control w-75' />
            </p>
            <p>
            <input type="submit" value='Add Students' className='btn btn-primary' />
            </p>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
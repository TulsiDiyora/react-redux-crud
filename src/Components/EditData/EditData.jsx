import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { editdata } from '../../actions/employeaction';
import Container from 'react-bootstrap/Container'; 

function EditEmployeeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const employeeEdit = useSelector((state) => state.employedata.employee); 

  const [formInput, setFormInput] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    hdate: '',
    salary: '',
    address: '',
  });

  useEffect(() => {
    if (employeeEdit) {
      setFormInput({
        fname: employeeEdit.fname,
        lname: employeeEdit.lname,
        email: employeeEdit.email,
        phone: employeeEdit.phone,
        hdate: employeeEdit.hdate,
        salary: employeeEdit.salary,
        role : employeeEdit.role,
        address: employeeEdit.address,
      });
    }
  }, [employeeEdit]);

  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormInput({ ...formInput,[name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeEdit) {
      dispatch(editdata(employeeEdit.id, formInput));
      navigate('/view'); 
    }
  };

  return (
    <Container>
      <h2 className='text-center my-5 fw-bold'>Edit Employee</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="fname" className="form-label fw-semibold">First Name :</label>
          <input type="text" className="form-control" name='fname' id="fname" placeholder="First Name" value={formInput.fname} onChange={handleForm} required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="lname" className="form-label fw-semibold">Last Name :</label>
          <input type="text" className="form-control" name='lname' id="lname" placeholder="Last Name" value={formInput.lname} onChange={handleForm} required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label fw-semibold">Email :</label>
          <input type="email" className="form-control" name='email' id="email" placeholder="Email" value={formInput.email} onChange={handleForm} required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label fw-semibold">Phone :</label>
          <input type="number" className="form-control" name='phone' id="phone" placeholder="Phone" value={formInput.phone} onChange={handleForm} required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="hdate" className="form-label fw-semibold">Hired Date :</label>
          <input type="date" className="form-control" name='hdate' id="hdate" value={formInput.hdate} onChange={handleForm} required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="salary" className="form-label fw-semibold">Salary :</label>
          <input type="number" className="form-control" name='salary' id="salary" placeholder="Salary" value={formInput.salary} onChange={handleForm} required/>
        </div>
        <div className="col-md-6">
          <label htmlFor="role" className="form-label fw-semibold">Role</label>
          <input type="text" className="form-control" name='role' id="role" placeholder="Role" value={formInput.role} onChange={handleForm} required/>
        </div>
        <div className="col-md-12">
          <label htmlFor="address" className="form-label fw-semibold">Address :</label>
          <textarea className="form-control" rows="3" name='address' id="address" placeholder="Address" value={formInput.address} onChange={handleForm} required/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </Container>
  );
}

export default EditEmployeeForm;
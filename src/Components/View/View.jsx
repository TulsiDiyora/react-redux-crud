import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletedata, EmployeeEdit, selectDropdown, viewAsync } from '../../actions/employeaction';
import { useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';


function View() {

  const { employees, dropdownn, isloading } = useSelector((state) => state.employedata);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const backform = () => {

    navigate("/")

  }

  const handeldeleteData = (id) => {

    dispatch(deletedata(id))


  }

  const handleEditData = (id) => {
    const employeeToEdit = employees.find((employee) => employee.id === id);

    if (employeeToEdit) {
      dispatch(EmployeeEdit(employeeToEdit));
      navigate("/editdata");
    }
  };

  const handleSelect = (role) => {
    console.log("Selected Role:", role);
    dispatch(selectDropdown(role));
  };

  // useEffect(() => {
  //   console.log("Filtered Employees updated:", dropdownn);
  // }, [dropdownn]);

  const displayEmployees = dropdownn.length > 0 ? dropdownn : employees;  
  //jo dropdwon khali nathi to retun dropdwon || jo dropdown khali hoy to return employees

  useEffect(() => {
    // dispatch(viewAsync());
    dispatch(viewAsync());
  }, []);

  return (
    <>
      <Container>
        <h1 className='text-center my-3 fw-bold'>View</h1>
        <div className='py-4'>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.ItemText onClick={() => handleSelect('')}>all</Dropdown.ItemText>
              <Dropdown.ItemText onClick={() => handleSelect('admin')}>admin</Dropdown.ItemText>
              <Dropdown.ItemText onClick={() => handleSelect('user')}>user</Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <table className="table  ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First </th>
              <th scope="col">Last </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Hired date</th>
              <th scope="col">Salary</th>
              <th scope='col'>Role</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {isloading ? (
              <tr>
                <td colSpan="10" className="text-center">
                  {/* <h1>Loading...</h1> */}
                  <Loader />
                </td>
              </tr>
            ) : displayEmployees.length > 0 ? (
              displayEmployees.map((data, index) => (
                <tr key={data.id}>
                  <td scope="row">{index + 1}</td>
                  <td>{data.fname}</td>
                  <td>{data.lname}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.hdate}</td>
                  <td>{data.salary}</td>
                  <td>{data.role}</td>
                  <td>{data.address}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEditData(data.id)}>Edit</button>&nbsp;||&nbsp;
                    <button className="btn btn-danger" onClick={() => handeldeleteData(data.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
                  <h2>No data available.</h2>
                </td>
              </tr>
            )}
          </tbody>

        </table>
        <div className='text-center my-5'>
          <button type='button' className='btn btn-primary text-center ' onClick={backform}>
            Back To Form
          </button>
        </div>
      </Container>

    </>
  )
}

export default View


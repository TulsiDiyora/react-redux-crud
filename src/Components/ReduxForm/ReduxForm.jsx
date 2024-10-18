import React from 'react'
import {useState} from 'react'
import {Container} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {empAsync, employeaction} from '../../actions/employeaction'
import {useNavigate} from 'react-router-dom'

function ReduxForm() {

    const [formInput, setFormInput] = useState({
        id: '',  
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: '',
        hdate: '',
        salary: '',
        role: '',
    })

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleForm = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        console.log("setData", name, value);
        

        setFormInput({...formInput, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("setData", formInput);
        dispatch(empAsync(formInput));

        navigate("/view")

        setFormInput({
            id: '',  
            fname: '',
            lname: '',
            email: '',
            address: '',
            phone: '',
            hdate: '',
            salary: '',
            role: '',
        })
    }
    
  return (
    <>
        <Container>
        <h1 className='text-center my-4 fw-bold'>ReduxForm</h1>

                <form className="row g-3 mt-5" onSubmit={handleSubmit}>
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
                        <label htmlFor="hdate" className="form-label fw-semibold">Hired date :</label>
                        <input type="date" className="form-control" name='hdate' id="hdate" placeholder="Hired date" value={formInput.hdate} onChange={handleForm} required/>
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
                        <textarea  type="text" className="form-control" rows="3" cols="50" name='address' id="address" placeholder="Address" value={formInput.address} onChange={handleForm} required>
                        </ textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </div>
                </form>

            </Container>
    </>
  )
}

export default ReduxForm

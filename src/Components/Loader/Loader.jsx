import React from 'react';
import { Spinner } from 'react-bootstrap'; 

function Loader() {
    return (
        <tr className='text-center d-flex justify-content-center'>
            <td colSpan="10" className="text-center">
                <div className="loader-container">
                    <Spinner animation="border" variant="primary" />
                    {/* <h1 style={{ marginTop: '20px', color: '#0056b3' }}>Loading...</h1> */}
                </div>
            </td>
        </tr>
    );
}

export default Loader;

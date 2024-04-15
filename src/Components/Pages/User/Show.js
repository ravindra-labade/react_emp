import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Show() {
    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users');
        setUser(result.data);

    }
    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <>
        <table className='table table-warning table-scripted'>
            <thead>
                <tr>
                    <th>EMPLOYEE ID</th>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE SALARY</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                <td>{obj.eid}</td>
                                <td>{obj.ename}</td>
                                <td>{obj.salary}</td>
                                <td>
                                    <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                    <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm'>DELETE</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Show
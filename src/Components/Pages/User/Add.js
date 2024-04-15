import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const { register, handleSubmit } = useForm();

    const navi = useNavigate()

    function saveData(data){
        axios.post('http://localhost:5000/users', data)
        // alert('Record Inserted');
        navi('/show')
    }


  return (
    <>
    <div className='container w-50 mt-5'>
        <center><u><h2>EMPLOYEE DATABASE</h2></u></center>
        <form  onSubmit={ handleSubmit(saveData)} className='mt-5'>

            <label htmlFor='i'><b>EMPLOYEE ID</b></label>
            <input type='number' id='i' className='form-control' {...register('eid')} />
            <br /> <br />

            <label htmlFor='n'><b>EMPLOYEE NAME</b></label>
            <input type='text' id='n' className='form-control' {...register('ename')}/>
            <br /> <br />

            <label htmlFor='s'><b>EMPLOYEE SALARY</b></label>
            <input type='number' id='s' className='form-control' {...register('salary')}/>
            <br /> <br />

            <input type='submit' value="ADD EMPLOYEE"  className='btn btn-outline-success col-6' />
            <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
        </form>
    </div>
    </>
  )
}

export default Add
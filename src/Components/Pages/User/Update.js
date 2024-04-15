import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {register,handleSubmit,setValue} = useForm();

    const {userId} = useParams();

    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setValue('eid', result.data.eid);
        setValue('ename', result.data.ename);
        setValue('salary', result.data.salary);
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/show')
    }

    useEffect(()=>{
        fetchData();
    }, [])

  return (
    <>
    <div className='container w-50 mt-5'>
        <center><u><h2>EMPLOYEE  UPDATION DATABASE</h2></u></center>
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

            <input type='submit' value="UPDATE EMPLOYEE"  className='btn btn-outline-success col-6' />
            <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
        </form>
    </div>
    </>
  )
}

export default Update
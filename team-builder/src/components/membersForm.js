import React from "react";
import '../App.css'
import './styles/form.css';

function MemberForm(props) {

  const { handleChange, handleSubmit, newFormValues } = props

  return (
    <div className ='container'>
      <form 
      className='members-form'
      onSubmit={handleSubmit}
      >
        <label>Name:
          <input 
          type="text" 
          placeholder="Full Name"
          name='name'
          value={newFormValues.name}
          onChange={handleChange}
          required
          ></input>
        </label>
        <label>Github Handle:
          <input type="text" 
          placeholder="Github Handle"
          name='gitHub'
          value={newFormValues.gitHub}
          onChange={handleChange}
          required
          ></input>
        </label>
        <label> Email:
          <input type="email" 
          placeholder="Email"
          name='email'
          value={newFormValues.email}
          onChange={handleChange}
          required
          ></input>
        </label>
        <label> Role:
          <select
            name='role'
            value={newFormValues.role}
            onChange={handleChange}
            required
          >
              <option value=''>--- select project role ---</option>
              <option value='front-end engineer'>Front End</option>
              <option value='back-end engineer'>Back End</option>
              <option value='designer'>Design</option>
              <option value='marketer'>Marketing</option>
          </select>
        </label>
        <button type='submit'>Add Member</button>
      </form>
    </div>
  );
}

export default MemberForm;

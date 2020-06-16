import React, { useState }from 'react';
import './App.css';

import MembersList from './components/membersList';
import MembersForm from './components/membersForm';


const membersDb = [{
    name:'Antonio',
    gitHub: 'tonomb',
    email: 'tono.mtzb@gmail.com',
    role: 'Front End'
  }
]



function App() {

  const [membersList, setMembersList] = useState(membersDb);
  const [newFormValues, setNewFormValues] = useState({}) 

  function handleSubmit(e){

    e.preventDefault() 
    setMembersList( memberList => [...membersList, newFormValues])  
  }

  function handleChange(e){
    setNewFormValues({
      ...newFormValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='app-container'>
      <MembersForm handleChange={handleChange} handleSubmit={handleSubmit} newFormValues={newFormValues}/>
      <MembersList membersList={membersList} />
    </div>
  );
}

export default App;

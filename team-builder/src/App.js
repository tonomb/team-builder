import React, { useState }from 'react';
import './App.css';

import MembersList from './components/membersList';
import MembersForm from './components/membersForm';


const membersDb = [{
    name:'Antonio',
    gitHub: 'tonomb',
    email: 'tono.mtzb@gmail.com',
    role: 'Front End Engineer'
  }
]



function App() {

  const [membersList, setMembersList] = useState(membersDb);
  const [newFormValues, setNewFormValues] = useState({}) ;
  const [editMember, setEditMember] =useState({})

  function handleSubmit(e){
    e.preventDefault() 
    setMembersList( memberList => [...membersList, newFormValues])
    setNewFormValues({
      name:'',
      gitHub:'',
      email:'',
      role:''
    })  
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
      <MembersList membersList={membersList} setEditMember={setNewFormValues} />
    </div>
  );
}

export default App;

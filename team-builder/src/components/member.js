import React from 'react';
import './styles/member.css'
function Member(props){
    const {member, setEditMember} = props


    function editMember(event){
        setEditMember(member)
    }

    return(
        <div className='member'>
            <h2>Name: <span>{member.name}</span></h2>
            <h2>GitHub: <span>{member.gitHub}</span></h2>
            <h2>Email: <span>{member.email}</span></h2>
            <h2>Role: <span>{member.role}</span></h2>
            <button onClick={editMember}>Edit</button>
        </div>
    )
}

export default Member;

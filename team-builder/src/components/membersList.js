import React from 'react';
import Member from './member'
import '../App.css'


function MembersList(props){
    const {membersList, setEditMember} = props

    return(
        <div className='container'>
            {
                membersList.map(member =>{
                   return( 
                    <Member key={member.email} member={member} setEditMember={setEditMember}/>
                    )
                })
            }
        </div>
    )
}

export default MembersList;
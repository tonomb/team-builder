import React from 'react';
import Member from './member'
import '../App.css'


function MembersList(props){
    const {membersList} = props

    return(
        <div className='container'>
            {
                membersList.map(member =>{
                   return( 
                    <Member member={member}/>
                    )
                })
            }
        </div>
    )
}

export default MembersList;
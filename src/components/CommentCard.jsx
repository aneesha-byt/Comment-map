import React from 'react'
import './CommentCard.css'

const CommentCard = ( {commentData}) => {
  return (

  <div className='container'>
    
  
<div className='card'>
<p><b> {commentData.comment} </b></p>

<div className='image'>
<img className='img' src={commentData.image}/><br/>
</div>


<div className='name'>
<b>{commentData.name}</b>
   <br/><br/>

<div className='position'>
<b>{commentData.position}</b>
</div>
</div>
  



</div>
    

    
  

    
        
  <b className='user'>   </b>
</div>





  );
}

export default CommentCard;
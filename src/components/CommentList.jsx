import React from "react";
import CommentCard from "./CommentCard";
import './CommentCard.css'

const CommentList = ({ apiCommentsData }) => {
  return (
    <div>
    
      <br />
      <div className="container">
      {
      apiCommentsData.map(commentData => (
        <CommentCard key = {commentData.id} commentData = {commentData}/>
      ))}
    </div>
    </div>
  );
};

export default CommentList;


import CommentList from "./components/CommentList"
import { comments } from "./data/comments"


function App() {
  const apiCommentsData = comments;
  

  return (
    <div>
    
  
      <CommentList apiCommentsData = {apiCommentsData}/>
    

    </div>
        
    
  )
}

export default App

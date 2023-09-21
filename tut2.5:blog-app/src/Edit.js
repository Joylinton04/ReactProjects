import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; 

const Edit = ({ handleUpdate, editBody, setEditBody, editTitle, setEditTitle, posts }) => {
    const { id } = useParams();
    const post = posts.find((post) => (post.id).toString() === id);
    useEffect(() => {
        if(post) {
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])

  return (
    <div className="NewPost">
    {editTitle && 
       <>
        <h2>Edit Post</h2>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
           <label htmlFor="postTitle">Title:</label>
           <input
           id="postTitle"
           type="text"
           required
           value={editTitle}
           onChange={(e) =>{setEditTitle(e.target.value)}}
           />
           <label htmlFor="postbody">Post: </label>
           <textarea
           id="postbody"
           required
           value={editBody}
           onChange={(e)=>setEditBody(e.target.value)}
           />
           <button type="submit" onClick={() => handleUpdate(post.id)}>Submit</button>
        </form>
       </>
    }
    {!editTitle && 

        <>
            <h2>Post Not Found</h2>
            <p><Link to="/">Visit Our Homepage</Link></p>
        </>

    }
  </div>
  )
}

export default Edit;
const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
    return (
      <div className="NewPost">
        <h2>New Post</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={postTitle}
              onChange={(e) =>{setPostTitle(e.target.value)}}
            />
            <label htmlFor="postbody">Post: </label>
            <textarea
              id="postbody"
              required
              value={postBody}
              onChange={(e)=>setPostBody(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

export default NewPost;


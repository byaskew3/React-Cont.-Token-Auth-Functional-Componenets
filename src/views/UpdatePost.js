import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function UpdatePost(props) {
    
    // Construct phase
    const [post, setPost] = useState({})

    const params = useParams()
    console.log(params)
    const postId = params.postid

    const sendUpdates = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:5000/api/posts/update`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.user.token}`
            },
            body: JSON.stringify({
                title: event.target.title.value,
                caption: event.target.caption.value,
                imgUrl: event.target.imgUrl.value,
                postId: postId
            })
        })
        const data = await response.json()
        console.log(data)
    }

    // Mounting phase
    const getSinglePost = async () => {
        const response = await fetch(`http://localhost:5000/api/posts/${postId}`)
        const data = await response.json()
        console.log(data)
        if (data.status === 'ok'){
            setPost(data.post)
        }
    }
    
    // useEffect takes in two parameters
    // function to run, and array of dependcies
    // does not return anything
    // to mimic a componentDidMount, your array should be empty
    useEffect(()=>{
        getSinglePost()
    }, [])

    // Render phase
    return (
        <div>
        <section className="vh-100 bg-image" style={{background: '#667eea', background: '-webkit-linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5', background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Update your Post!
              </h2>
              <form onSubmit={(event) => {sendUpdates(event)}}>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="title" defaultValue={post.title}/>
                  <label className="form-label" htmlFor="form3Example1cg">
                    Title
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" name="caption" defaultValue={post.caption}/>
                  <label className="form-label" htmlFor="form3Example3cg">
                    Caption
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" name="imgUrl" defaultValue={post.img_url}/>
                  <label className="form-label" htmlFor="form3Example3cg">
                    Image URL
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body">
                    Create Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </div>
    )
}
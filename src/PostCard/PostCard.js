import React from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'

export default function PostCard({post, deletePost}) {

    return (
        <div className="card m-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <img id='picture' src={post.image} alt="" />
                    </div>
                    <div className="col-sm-6 col-12 mt-2">
                        <p><b>{post.owner.title} {post.owner.firstName} {post.owner.lastName}</b>
                        <span>
                            <img className='ownerPicture float-end' src={post.owner.picture} alt="" />
                        </span></p>
                        <p>Post Date: {new Date(post.publishDate).toDateString()}</p>
                        <p>{post.tags.map((tag, index) => (
                            <span className='tag' key={index} >#{tag }</span>
                        ))}</p>
                        <p><em> {post.text}</em></p>
                        <p>Likes: <b>{post.likes}</b></p>
                        <div className="row">
                            <div className="col-6">
                                <Link to={'/'+post.id} className='btn btn-sm btn-info' >Read more</Link>
                            </div>
                            <div className="col-6">
                                <button onClick={()=> {deletePost(post.id)}} className='btn btn-sm btn-danger float-end' >Delete</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

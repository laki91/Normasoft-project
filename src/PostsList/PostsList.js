import React from 'react'
import PostCard from '../PostCard/PostCard';

export default function PostsList({posts, deletePost}) {

    const all = posts.map(post => {
        return (
            <div className='col-md-12 col-xl-6' key={post.id}>
                <PostCard post={post} deletePost={deletePost} />
            </div>
        )
    })

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 ">
                    <h3 className='display-4' >Normasoft</h3>
                </div>
                <div className="col-sm-6 ">
                    <h3 className='display-4 float-end' >Posts List: {posts.length}</h3>
                </div>
            </div>
            <div className="row">
                    <div className="row">
                        {all}
                </div>             
            </div>
        </div>
    )
}

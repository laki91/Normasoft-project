import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';
import SingleComment from '../SingleComment/SingleComment';
import './PostView.css'

export default function PostView(props) {

    const { id } = useParams()

    const [onePost] = useState(props.posts.filter(post => post.id === id)[0])
    const [comment, setComment] = useState([])

    useEffect(() => {
        fetch('https://dummyapi.io/data/v1/post/' + id + '/comment', {
            headers: {
                'app-id': '6196e0da3985439f7ead060a',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setComment(data.data)
            })
    }, [id])

    const allComents = comment.map(com => {
        return (
            <SingleComment com={com} key={com.id} />
        )
    })

    //metoda za dodavaanje komentara iz komponente AddComment
    const addPostComment = (arg) => {
        arg.id = Math.floor(Math.random() * (10000 - 10) - 10).toString()
        arg.owner.id = Math.floor(Math.random() * (10000 - 10) - 10).toString()
        setComment([...comment, arg])
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4  col-md-12' >Post by: {onePost.owner.title}  {onePost.owner.firstName} {onePost.owner.lastName}
                        <span className='m-5 col-md-12'><img className='postViewPicture' src={onePost.owner.picture} alt="" /></span>
                    </h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <img className='postImg' src={onePost.image} alt="" />
                                </div>
                                <div className="col-lg-6 col-md-12mt-5">
                                    <p className=' postDate  ml-5'>Post Date: {new Date(onePost.publishDate).toDateString()}</p><br />
                                    <p className=''>{onePost.tags.map((tag, index) => (
                                        <span className='display-6 lead tag ' key={index}  >#{tag}</span>
                                    ))}</p>
                                    <p className='postText mt-4'><em> {onePost.text} </em></p>
                                    <p className='display-6 mt-4'>
                                        {/* ikonica srca*/}
                                        <svg id='like'  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg> {onePost.likes}</p>
                                    <Link to={'/' + id + '/edit'} className='btn btn-info form-control mt-4'>Edit</Link>
                                </div>
                            </div>
                            <hr />
                            <h3 className='display-4 m-4' >Comments</h3>
                            <div className="col-10 offset-1">
                                {allComents}
                                <h4 className='display-6 m-5 lead'>Add Comment</h4>
                                <AddComment addPostComment={addPostComment} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

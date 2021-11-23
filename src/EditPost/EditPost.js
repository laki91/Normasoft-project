import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'

export default function EditPost(props) {

    const { id } = useParams()
    const history = useHistory()

    const [post, setPost] = useState(props.posts.filter(singlePost => singlePost.id === id)[0])
    const [tag, setTag] = useState({tag1:post.tags[0], tag2:post.tags[1], tag3:post.tags[2] })
    const [profile, setProfile] = useState({id:post.owner.id ,title:post.owner.title, firstName: post.owner.firstName, lastName:post.owner.lastName})

    const editedPost = {
        id: post.id,
         image: 'https://pbs.twimg.com/profile_images/2277538111/t36fs12mzeiyynsu1v15_400x400.png',
        publishDate: new Date(),
        text: post.text,
        owner: {
            id: profile.id,
            title: profile.title,
            firstName: profile.firstName,
            lastName: profile.lastName,
            picture:'https://competitions.football365.com/image-library/square/1000/5/5b3e476d48b1-football365-com.jpg'
        },
        tags:[tag.tag1, tag.tag2, tag.tag3]
    }

    //funkcija koja se pokrece na onClick
    const editHandler = () => {
        props.editPost(editedPost)
        history.push('/')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4' >Edit Post</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input onChange={e=> {setProfile({...profile, firstName: e.target.value})}} value={profile.firstName} className='form-control mt-4' placeholder='Name*' type="text" />
                            <input onChange={e=> {setProfile({...profile, lastName: e.target.value})}} value={profile.lastName} className='form-control mt-4' placeholder='LastName*' type="text" />
                            <input onChange={e=> {setProfile({...profile, title: e.target.value})}} value={profile.title} className='form-control mt-4' placeholder='Title*' type="text" />
                            <input onChange={e=> {setPost({...post, text: e.target.value})}} value={post.text} className='form-control mt-4' placeholder='Text*' type="text" />
                            <div className="row">
                                <div className="col-4">
                                    <input type="text" onChange={e => {setTag({...tag, tag1: e.target.value})}} value={tag.tag1}  className='form-control mt-4' placeholder='tag 1' />
                                </div>
                                <div className="col-4">
                                    <input type="text" onChange={e => {setTag({...tag, tag2: e.target.value})}} value={tag.tag2} className='form-control mt-4' placeholder='tag 2' />
                                </div>
                                <div className="col-4">
                                    <input type="text" onChange={e => {setTag({...tag, tag3: e.target.value})}} value={tag.tag3}  className='form-control mt-4' placeholder='tag 3' />
                                </div>
                            </div>
                            <button onClick={editHandler} className='form-control mt-4 btn btn-info'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



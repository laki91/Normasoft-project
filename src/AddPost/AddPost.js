import React, { useState } from 'react'
import { useHistory } from 'react-router'


export default function AddPost({addPost}) {

    const history = useHistory()

    const [globPost, setGlobPost] = useState({text:'', tags:[]})
    const [profile, setProfile] = useState({title:'', firstName:'', lastName:''})
    const [tag, setTag] = useState({tag1:'',tag2:'', tag3:''})


    //linkovi na slikama su neki nasumicno izabrani na netu, da se vidi da li funkcionise
    const newPost = {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
        publishDate: new Date(),
        text: globPost.text,
        likes:'',
        owner: {
            title: profile.title,
            firstName: profile.firstName,
            lastName: profile.lastName,
            picture: 'https://competitions.football365.com/image-library/square/1000/5/5b3e476d48b1-football365-com.jpg'
        },
        tags:[tag.tag1, tag.tag2, tag.tag3]
    }

    const addSinglePost = () => {
        addPost(newPost)
        history.push('/')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4' >Add Post</h3>
                    <div className="row">
                        <div className="col-10 offset-1" >
                            <input onChange={e=> {setProfile({...profile, firstName: e.target.value})} } className='form-control mt-4' placeholder='Name*' type="text" />
                            <input onChange={e=> {setProfile({...profile, lastName: e.target.value})} } className='form-control mt-4' placeholder='LastName*' type="text" />
                            <input onChange={e=> {setProfile({...profile, title: e.target.value})} } className='form-control mt-4' placeholder='Title*' type="text" />
                            <input onChange={e=> {setGlobPost({...globPost, text: e.target.value})} } className='form-control mt-4' placeholder='Text*' type="text" />
                            <div className="row">
                                <div className="col-4">
                                    <input type="text" onChange={e => {setTag({...tag, tag1: e.target.value})}}  className='form-control mt-4' placeholder='tag 1' />
                                </div>
                                <div className="col-4">
                                    <input type="text" onChange={e => {setTag({...tag,tag2:e.target.value})}} className='form-control mt-4' placeholder='tag 2' />
                                </div>
                                <div className="col-4">
                                    <input type="text" onChange={e => {setTag({...tag,tag3:e.target.value})}} className='form-control mt-4' placeholder='tag 3' />
                                </div>
                            </div>
                            <button onClick={addSinglePost} className='form-control mt-4 btn btn-info'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

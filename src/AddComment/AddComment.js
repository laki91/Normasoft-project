import React, { useState } from 'react'

export default function AddComment({ addPostComment }) {

    const [singleComm, setSingleComm] = useState({ message: '', publishDate: new Date() })
    const [ownerComm, setOwnerComm] = useState({ title: '', firstName: '', lastName: '', picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGtdqIBpT2nvpXT2zXCRJ-L2xq-4h5BqB0U_8PATxqXmf66Vby' })

    const commentInfo = {
        message: singleComm.message,
        publishDate: singleComm.publishDate,
        owner: {
            firstName: ownerComm.firstName,
            lastName: ownerComm.lastName,
            title: ownerComm.title,
            picture: ownerComm.picture
        }
    }

    const addComment = () => {
        addPostComment(commentInfo)
    }

return (
    <div>
        <input onChange={e => { setOwnerComm({ ...ownerComm, firstName: e.target.value }) }} type="text" className=' mt-3 form-control  ' placeholder='name' /><br />
        <input onChange={e => { setOwnerComm({ ...ownerComm, lastName: e.target.value }) }} type="text" placeholder='lastname' className=' mt-3 form-control ' /><br />
        <input onChange={e => { setOwnerComm({ ...ownerComm, title: e.target.value }) }} type="text" placeholder='title' className=' mt-3 form-control' /><br />
        <textarea onChange={e => { setSingleComm({ ...singleComm, message: e.target.value }) }} type="text" placeholder='message' className=' mt-3 form-control' /><br />
        <button onClick={addComment} className=' mt-3 form-control  btn btn-info' >Save</button>
    </div>
)
}

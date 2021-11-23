import React from 'react'
import './SingleComment.css'

export default function SingleComment({com}) {
    return (
        <>
        <div className="row ">
            <div className="col-1">
                <img className='commentImg float-start' src={com.owner.picture} alt="" />
            </div>
            <div className="col-md-12 col-lg-6">
                <p className='mt-3 commName' ><b> {com.owner.title}. {com.owner.firstName} {com.owner.lastName} </b></p>
            </div>
        </div>
        <div className="col-8 offset-3">
            <div className="row">
            <div className="col-md-12">
                <p className='commText' ><em>{com.message}</em></p>
            </div>
            <div className="col-md-12">
                <p className='m-3 float-end'>{new Date(com.publishDate).toDateString()}</p>
            </div>
            </div>
        </div>
        <hr />
        </>
    )
}

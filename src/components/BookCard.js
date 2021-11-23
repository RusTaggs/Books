import React from 'react'

export default function BookCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt=""/>
            <div>
                <h2 className="title">
                    {props.title}
                </h2>
                <div className="publishedDate">
                    {props.publishedDate}
                </div>
                <div className="author">
                    {props.authors}
                </div>
            </div>
        </div>
    )
}

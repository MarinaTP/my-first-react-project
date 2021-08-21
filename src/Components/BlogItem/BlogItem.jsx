import React from 'react';


export const BlogItem  = ({blog}) => {
   
    const { title, body } = blog;

    return (
    <div className = "blogItem">
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
    );
};
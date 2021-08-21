import React, { Component } from 'react';

import './BlogList.css';

import { BlogItem } from '../BlogItem/BlogItem';

import { blogPosts } from '../../data/blog-posts';

import { getBlogs } from '../../../src/services/blogService'

export class BlogList extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogs: [],
            count: 0,
        }

    

        this.onCountClick = this.onCountClick.bind(this);
    }

    componentDidMount(){
        getBlogs() 
            .then(blogs => {this.setState({blogs}) 
            });
       
        
    }

    onCountClick () {
        this.setState({count: this.state.count + 1});
      }

    render() {
        const { count } = this.state;
       return (
           <div className = "blogList">
                <span>{count}</span>
                <button onClick = {this.onCountClick}>Click me!</button>
                {this.state.blogs.map((blog, index) => <BlogItem blog={blog} key={index}/>)} 
        </div>
       );
  };
};
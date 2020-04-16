import React from 'react'
import {searchIt} from '../services/search'
import BlogItem from './BlogItem'
import PropTypes from 'prop-types'

const Blogs = (props) => {
    return (
        <div>
        {props.blogs
.filter(searchIt(props.searchTerm))
.map((blog,idx) =>{
    return(
        <BlogItem 
        key={blog._id} 
        onDelete={props.onDelete}  
        onUpdate={props.onUpdate} 
        blog={blog}/>
     
//         <div key={blog.objectId} className= 'ui card'
//    style={{width: '75%', padding:'20px'}}
//    >
//        <div className='content'>
//            <div className='header'>{blog.title}</div>
           
//            <br />
//            <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
//            <div className='meta'>Author: {blog.author}</div>
//            </span>
//            <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
//            <div className='meta'>Subject: {blog.subject}</div>
//            </span>
//            <hr />
//            <div className='description'>{blog.article}</div>
      
//         <button className="ui primary button" style={{margin:'10px 15px'}} 
//             onClick={() =>{
//                 return props.onDelete(blog.objectId)
//             }}
//             >
//             Delete
//         </button>   
//        </div>
//    </div>
    )
})} 
        </div>
    )
}

Blogs.propTypes = {
onDelete: PropTypes.func,
onUpdate: PropTypes.func,
searchIt: PropTypes.func,
searchTerm: PropTypes.string,
blogs: PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        article: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    })
)
}

export default Blogs;
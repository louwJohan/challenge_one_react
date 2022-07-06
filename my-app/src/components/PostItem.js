import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const savedPosts = props.posts
  return (
                savedPosts.map(post => {
                    return (<div key={post.title} className={css.SearchItem}>
                                <p>{post.title}</p>
                                <p>{post.name}</p>
                                <img src={post.image}/>
                                <p>{post.description}</p>
                            </div>)
                })
            
  )
}

export default PostItem
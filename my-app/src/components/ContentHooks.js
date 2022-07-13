import React, {useState, useEffect} from 'react'
import css from './css/Content.module.css';
import { savedPosts } from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
    const [isLoaded, setisLoaded] = useState(false);
    const [fetchPosts, setfetchPosts] = useState([]);

    useEffect( () => {
        setTimeout(() => {
            setisLoaded(true);
            setfetchPosts(savedPosts);
           
        }, 2000)
    },[])

    const handelChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
        return post.name.toLowerCase().includes(name)
    })
    setfetchPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
          <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label htmlFor="searchinput">Search:</label>
              <input
                type="search"
                id="searchinput"
                placeholder='By Author'
                onChange={(event) => handelChange(event)}
              />
              <h4>Posts Found:{fetchPosts.length}</h4>
            </form>
          </div>
          <div className={css.SearchResults}>
            {isLoaded ? (<PostItem posts={fetchPosts} />) : (<Loader />)}
          </div>
        </div>
    )
}

export default ContentHooks
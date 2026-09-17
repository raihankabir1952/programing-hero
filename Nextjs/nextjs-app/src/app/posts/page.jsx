import React from 'react';
import PostCard from '../components/PostCard';

//new approch
const promisePost = async() =>{
    const res =await fetch('https://jsonplaceholder.typicode.com/posts' , {cache : 'force-cache' })  
    /*cache : 'force-cache'  means 
                                                                                                                it will cache the data and next time it will not fetch from api but from cache
                                                                                                                'no-store' means it will not cache the data
                                                                                                                */
    return res.json();
}

const PostPage = async() => {

    //old approch
    // const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const post = await data.json()
    const posts = await promisePost()

    return (
        <div>
            <h2>Post Page {posts.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    posts.map(post =>(
                        <PostCard
                        key={post.id}
                        post = {post}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;
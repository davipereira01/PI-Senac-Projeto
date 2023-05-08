import React, { useState, useEffect } from 'react';
import { UsersService } from '../../services/usersService';
import { PostsService } from '../../services/postsService';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsChatLeftDots} from 'react-icons/bs';




export function PostsComponent(props) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await UsersService.getUsers();
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    }, []);

    console.log(users);

    


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await PostsService.getPosts();
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, []);

    console.log(posts);

    

    
    
    return (


<>
    {posts?.map(post =>  (
      <div className="capsule">
        
     {users?.filter(user => user.id === post.idAuthor).map(user => ( 

        
        <div key={user.id} className="post-header">
            <div className="user-container">

            <div className="circle" id='circle-user'>
                <img src={user.img} alt={user.firstname} />
            </div>
            <div className="user-name">
            <p>{`${user.firstname} ${user.lastname}`}</p>
            </div>

            </div>

        </div>
            ))}
        <div>
            
        </div>   
        
        <div className="post-area">

        {post.img && (
            <div className="post-title">
                <h2>
                    {post.content}
                </h2>
            </div>
                    ) }

            <div className="img-container">
                {post.img ? (
                <img src={post.img} alt={post.idAuthor} />
                    ) : (
                    <div className="no-image">
                    <p>{post.content}</p>
                    </div>
                )}
            </div>
        </div>
        <div className="post-footer">
            <div className="icon-container">

            <div className="like-icon">
                <AiOutlineHeart/>
            </div>
            <div id='chat-ico' className="coment-icon">
                <BsChatLeftDots  className="icon-chat" />

            </div>

            </div>
            
        </div>
      </div>
      ))}
      </>
    )
  }

  
  export default PostsComponent;
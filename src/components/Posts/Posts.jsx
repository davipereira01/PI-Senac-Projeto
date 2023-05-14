import React, { useState, useEffect } from 'react';
import { UsersService } from '../../services/usersService';
import { PostsService } from '../../services/postsService';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChatLeftDots } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

export function PostsComponent(props) {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [likedPosts, setLikedPosts] = useState([]);
  const [comments, setComments] = useState({});

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

  

  const handleUserClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const handleAddComment = (postId, comment) => {
    if (comment) {
      const newComments = { ...comments };
      if (newComments[postId]) {
        newComments[postId].push(comment);
      } else {
        newComments[postId] = [comment];
      }
      setComments(newComments);
    }
  };

  const [replyToPost, setReplyToPost] = useState(null);
  const [replyContent, setReplyContent] = useState("");

  //filtra as postagens somente dos usuarios que tem conexoes com o usuario logado
  return (
    <>
      {posts?.map((post) => (
        <div className="capsule" key={post.id}>
          {users
            ?.filter((user) => user.id === post.idAuthor)
            .map((user) => (
              <div key={user.id} className="post-header">
                <div className="user-container">
                  <div className="circle" id="circle-user">
                    <img
                      src={user.img}
                      alt={user.firstname}
                      onClick={() => handleUserClick(user.id)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className="user-name">
                    <p>{`${user.firstname} ${user.lastname}`}</p>
                  </div>
                </div>
              </div>
            ))}
          <div>
            <div className="post-area">
              {post.img && (
                <div className="post-title">
                  <h2>{post.content}</h2>
                </div>
              )}
  
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
                <div className="like-icon" onClick={() => handleLike(post.id)}>
                  {likedPosts.includes(post.id) ? <AiFillHeart className="aifill-heart" /> : <AiOutlineHeart   />}
                </div>
                <div id="chat-ico" className="coment-icon">
                  <BsChatLeftDots
                    className="icon-chat"
                    onClick={() => setReplyToPost(post.id)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
              {replyToPost === post.id && (
                <div className="reply-container">
                  <input
                    type="text"
                    placeholder="Escreva sua resposta..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                  />
                  <button id='btn-send-comment' onClick={() => handleReply(post.id)}>Responder</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}


export default PostsComponent;

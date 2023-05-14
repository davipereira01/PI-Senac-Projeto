
import { useEffect, useState } from 'react';
import { UsersService } from '../../services/usersService';
import { PostsService } from '../../services/postsService';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../ProfilePage/ProfilePage.scss';
import Header from '../../components/Header/header';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChatLeftDots } from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';
import {AiFillStar} from 'react-icons/ai';

export function ProfilePage() {
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const history = useNavigate();
  const userId = parseInt(useParams().id);
  const [likedPosts, setLikedPosts] = useState([]);
  
  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  }
  

  async function fetchUserPosts() {
    try {
      const response = await PostsService.getPosts();
      const updatedPosts = response.data.filter(post => post.idAuthor === userId);
      setUserPosts(updatedPosts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await UsersService.getUsers();
        const updatedUser = response.data.find(user => user.id === userId);
        const birthDate = new Date(updatedUser.birthdate);
        const ageDiffMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDiffMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        updatedUser.age = age;
        setUser(updatedUser);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
    fetchUserPosts();
  }, []);
  
  function renderRating(rating) {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<AiFillStar className='teste' key={i} />);
      } else {
        stars.push(<AiFillStar className='teste' key={i} />);
      }
    }
  
    return stars;
  }

  return (
    <>
      <Header userId={1} />
      {user && (
        <div key={user.id} className="profile">
          <div className="profile-header">
            <div className="profile-img">
              <img src={user.img} alt={`${user.firstname} ${user.lastname}`} />
            </div>
            <div className="profile-name">
              <h2>{`${user.firstname} ${user.lastname}`}</h2>
              <p>{user.age} anos</p>
              <p>{user.city},{user.state}</p>
              <div className="rating">
                <div>{renderRating(user.rating)}</div>
              </div>
            </div>
          </div>
          <hr />
          <section>
            <div className="profile-about">
              <h3>Sobre {user.firstname} </h3>
              <p>{user.about}</p>
            </div>
          </section>
          <hr />
          <button id='role-btn'>Criar role</button>
          <div className="testimonial">
            <h3>Depoimentos</h3>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <img src={user.testimonials[0].img} alt={`${user.firstname} ${user.lastname}`} />
                
              </div>
              <div className="testimonial-baloon">
                  <p>{user.testimonials[0].text}</p>
                </div>
                <span>{renderRating(user.testimonials[0].rating)}</span>
            </div>
          </div>
          <div className="layout">
            <main>
              {userPosts.length === 0 ? (
                <p>Esse usuário ainda não tem nenhuma postagem.</p>
              ) : (
                <div className="user-posts-container">
                  {userPosts.map(post => (
                    <div key={post.id} className="capsule">
                      <div className="user-container">
                        <div className="circle" id="circle-user">
                          <img src={user.img} alt={`${user.firstname} ${user.lastname}`} />
                        </div>
                        <div className="user-name">
                          <p>{`${user.firstname} ${user.lastname}`}</p>
                        </div>
                      </div>
                      <div className="post-area">
                        {post.img && (
                          <div className="post-title">
                            <h2>{post.content}</h2>
                          </div>
                        )}
                        <div className="img-container">
                          {post.img ? (
                            <img src={post.img} alt="" />
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
                            {likedPosts.includes(post.id) ? <AiFillHeart id='svg' /> : <AiOutlineHeart />}
                          </div>
                          <div id="chat-ico" className="coment-icon">
                            <BsChatLeftDots className="icon-chat" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>
            <div className="explorar">
              <h3>Explorar</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );

}
  

import React, { useState, useEffect } from 'react';
import { UsersService } from '../../services/usersService';
import { PostsService } from '../../services/postsService';

export function UsersPosts({ post, user }) {
  return (
    <div className="capsule">
      <div className="user-container">
        <div className="circle" id="circle-user">
          <img src={user.img} alt={`${user.firstname} ${user.lastname}`} />
        </div>
        <div className="user-name">
          <p>{`${user.firstname} ${user.lastname}`}</p>
        </div>
      </div>
      <div className="post-area">
        <div className="post-content">
          <h2>{post.content}</h2>
        </div>
        <div className="img-container">
          <img src={post.img} alt="" />
        </div>
      </div>
    </div>
  );
}

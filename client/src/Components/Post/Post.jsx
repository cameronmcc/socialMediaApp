import { React, useState } from 'react';
import { Users, Posts } from '../../Data/Data';
import { CgProfile } from 'react-icons/cg';
import './style.css';

const Post = ({ post }) => {
  const [like, setLike] = useState();
  return (
    <div className='post'>
      <div className='post__wrapper'>
        <div className='post__top'>
          <div className='post--top--left'>
            <img
              src={`${post.pic}`}
              alt='assets/generic.png'
              className='post--username--photo'
            />
            <div className='post--username'>{`${post.username}`}</div>
            <div className='post--date'>10/22/2021</div>
          </div>
        </div>
        <div className='post__middle'>
          <span className='post--content'>{`${post.desc}`}</span>
          <img className='post--img' src={`${post.img}`} alt='' />
        </div>
        <div className='post__bottom'>
          <a href='' className='post--like--link'>
            Like post
          </a>
          <span className='post--counter'>32 people like this</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

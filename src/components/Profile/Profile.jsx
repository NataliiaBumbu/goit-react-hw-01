import React from 'react'
import s from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
  <div className={s.avatar}>
    <img
      src={image}
      alt="User avatar"
    />
    <p className={s.title}>{name}</p>
    <p className={s.subTitle}>{tag}</p>{' '}
    <p className={s.subTitle}>{location}</p>{' '}
  </div>

  <ul className={s.followers}>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile
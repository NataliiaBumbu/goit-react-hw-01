import React from 'react';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
	<ul className={s.friendList}>
		{friends.map(({ id, avatar, name, isOnline }) => (
			<li key={id}>
				<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
			</li>
		))}
	</ul>
)

export default FriendList
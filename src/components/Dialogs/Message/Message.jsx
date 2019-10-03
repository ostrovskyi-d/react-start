import React from 'react';
import s from './Message.module.css';

const Message = props => {
	return (
		<div className={s.message}>
			{props.text}
			<span className={s.time}>{props.time}</span>
		</div>
	);
};

export default Message;

import React from 'react';
import './ChatMessage.scss';
import { Avatar } from '@mui/material';

const ChatMessage = () => {
    return (
        <div className='message'>
            <Avatar />
            <div className='messageInfo'>
                <h4>
                    Chinap
                    <span className='messageTimeStamp'>2099/08/23</span>
                </h4>
                <p>Content</p>
            </div>
        </div>
    )
}

export default ChatMessage;
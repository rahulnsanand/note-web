import React from 'react';
import { Link } from 'react-router-dom';
import './UnknownContent.css'

interface UnknownContentProps {
    message: string;
    title: string;
}

const UnknownContent: React.FC<UnknownContentProps> = ({ message, title }) => {
    return (
        <div id='content-main'>            
            <h1>{title}</h1>     
            <h3>{message}</h3>           
            <h3><b><Link id='link' to="/">Let's go home</Link></b></h3>
        </div>        
    );
}

export default UnknownContent;
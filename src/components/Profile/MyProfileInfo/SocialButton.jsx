import React, {useEffect, useState} from 'react';
import {Button} from 'semantic-ui-react';

const SocialButton = (props) => {
  const {contacts} = props;
  let [contact, setContact] = useState(0);
  
  return <a href={props.link}>
    <Button circular icon={props.icon}/>
  </a>;
};

export default SocialButton;
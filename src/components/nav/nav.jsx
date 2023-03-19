import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ListLinc, ItemLinc, Linc } from './navStyles';

const NavList = () => {
  return (
    <>
      <AiFillGithub style={{ color: 'gray' }} size={50} />
      {/* <img className="logo" src="/" alt="logo" /> */}
      <ListLinc>
        <ItemLinc>
          <Linc href="URL">Home</Linc>
        </ItemLinc>
        <ItemLinc>
          <Linc href="URL">Comand Git SCM</Linc>
        </ItemLinc>
        <ItemLinc>
          <Linc href="URL">Comand Git bash</Linc>
        </ItemLinc>
        <ItemLinc>
          <Linc href="URL">Application video</Linc>
        </ItemLinc>
      </ListLinc>
    </>
  );
};

export default NavList;

import React, { useEffect } from 'react'
import {FaBars,FaCode} from 'react-icons/fa'
import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Switch } from 'antd';

const NavBar = ({handlebg,theme}) => {
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const[text,setText]=useState("white")
  useEffect(()=>{
    if(theme){
        setText("black")
    }
    else{
        setText("white")
    }
  },[theme])

  

  return (
    <div className='w-screen py-7 px-7 flex justify-between fixed top-0 backdrop-blur-sm  '>
        <div className='text-2xl cursor-pointer'><FaCode/></div>
        <div>
            <ul className='sm:flex gap-8 font-bold hidden cursor-pointer'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <Switch  onChange={handlebg} unCheckedChildren="Light Mode" checkedChildren="Dark Mode" handleBg={"#10637D"} trackPadding={4}/>
            </ul>

            <ul className='sm:hidden flex justify-end'>
               <FaBars onClick={showDrawer} />
             <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open} width={200} style={{backgroundColor:"transparent",color:`${text}`}}>
               
               <ul className="font-bold text-2xl " >
                <li className='my-3'>About</li>
                <li className='my-3'>Projects</li>
                <li className='my-3'>Contact</li>
                <Switch  onChange={handlebg} unCheckedChildren="Light Mode" checkedChildren="Dark Mode" handleBg={"#10637D"} trackPadding={4}/>
               </ul>

      </Drawer>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
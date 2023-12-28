import React, { useEffect } from 'react'
import {FaBars,FaCode, FaMoon, FaSun} from 'react-icons/fa'
import { useState } from 'react';
import { Button, Drawer,Modal } from 'antd';
import { Switch } from 'antd';

const NavBar = ({handlebg,theme}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
 
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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

  const handleClickScrollProj = () => {
    const element = document.getElementById('proj');
    
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if(isModalOpen){
      handleCancel()
   }
  };
  const handleClickScrollExp = () => {
    const element = document.getElementById('exp');
    
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if(isModalOpen){
       handleCancel()
    }
  };
  const handleClickScrollAbt = () => {
    const element = document.getElementById('abt');
    
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if(isModalOpen){
      handleCancel()
   }
  };


  

  return (
    <div className='w-screen py-7 px-7 flex justify-between fixed top-0 backdrop-blur-sm  '>
        <div className='text-2xl cursor-pointer'><FaCode/></div>
        <div>
            <ul className='sm:flex gap-8 font-bold hidden cursor-pointer'>
                <li onClick={handleClickScrollAbt}>About</li>
                <li onClick={handleClickScrollProj}>Projects</li>
                <li onClick={handleClickScrollExp}>Experience</li>
                <Switch  onChange={handlebg} unCheckedChildren="Light Mode" checkedChildren="Dark Mode" handleBg={"#10637D"} trackPadding={4}/>
            </ul>

            <ul className='sm:hidden flex justify-end'>
               <FaBars onClick={showModal} />
               <Modal title="Basic Modal" open={isModalOpen}  onCancel={handleCancel}>
               <ul className="font-bold text-base  text-center" >
               <li onClick={handleClickScrollAbt}>About</li>
                <li onClick={handleClickScrollProj}>Projects</li>
                <li onClick={handleClickScrollExp}>Experience</li>
                <li className='flex justify-center py-3 gap-2'>
                <Switch checkedChildren="Dark" unCheckedChildren="Light" onChange={handlebg} />
                </li>
                
               </ul>

            </Modal>
            
            </ul>
        </div>
    </div>
  )
}

export default NavBar
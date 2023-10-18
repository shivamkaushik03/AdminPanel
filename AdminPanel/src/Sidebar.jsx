import React from 'react'
import 
{BsFillArchiveFill, BsListCheck,}
 from 'react-icons/bs'
import{TbHexagonLetterO, TbSquareKey} from 'react-icons/tb'
import{LuContact2, LuSettings} from 'react-icons/lu'
import{MdOutlineHelpCenter} from 'react-icons/md'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <TbHexagonLetterO  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbSquareKey className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <LuContact2 className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <LuSettings className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdOutlineHelpCenter className='icon'/> Help
                </a>
            </li>
        </ul>
        
    </aside>
  )
}

export default Sidebar
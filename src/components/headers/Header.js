import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({menu, childFunctionClick, count, changeCount}) => {
  return (
    <div className=''>
        <div className='p-8'>
            <img src="" alt="" />
            <span>Lear</span>
        </div>
        <ul className='p-8' style={{ display : 'flex'}} >
            {menu?.map((menu, index) => {
                return (
                    <li  style={{ padding : '0px 20px'}}  key={index}>
                        <Link to={menu?.url}>{menu?.title}</Link>
                    </li>
                )
            })}
        </ul>
            <span className='font-600 p-4 text-green-400 text-[24px]'>{count}</span>
        <button onClick={() => childFunctionClick("NLHA")}>Click</button>
        <button className='px-2 h-12 rounded bg-gray-200 ml-4' onClick={() => changeCount()}>Click Change Count</button>
    </div>
  )
}

export default Header
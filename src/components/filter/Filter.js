import React from 'react'
import './filter.css'
import { useDispatch, useSelector } from 'react-redux'
import * as emailActions from '../../actions/email'

function Filter() {
  const dispatch = useDispatch();
  const { filtertype, currentopenedemail } = useSelector(state => state?.emails)

  return (
    <>
      <div className='filter-container'>
        <span className='filter-types'>Filter By:</span>
        <span className={`filter-type ${filtertype === 'Unread' && 'active-filter'}`} onClick={() => dispatch(emailActions?.unreadAction())}>Unread</span>
        <span className={`filter-type ${filtertype === 'read' && 'active-filter'}`} onClick={() => dispatch(emailActions?.readAction())}>Read</span>
        <span className={`filter-type ${filtertype === 'Favorites' && 'active-filter'}`} onClick={() => dispatch(emailActions?.favoriteAction())}>Favorites</span>
      </div>
      {(currentopenedemail !== undefined) && <div className='back-sider'>
        <img className='back' src='/back.png' alt='back' onClick={() => dispatch(emailActions?.setcurrentemaildata(undefined))} />
      </div>}
    </>
  )
}

export default Filter

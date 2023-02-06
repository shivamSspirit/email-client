import React from 'react'
import Filter from '../filter/Filter'
import EmailList from '../emaillist/EmailList'
import './main.css'
import Emailbody from '../emailbody/Emailbody'
import { useSelector } from 'react-redux'
import Paginate from '../paginate/Paginate'

function Main() {
    const { currentopenedemail } = useSelector(state => state.emails)
    return (
        <div className='main-box'>
            <Filter />
            <div className='parent-container'>
                <div className={`left-container ${currentopenedemail === undefined && 'opendedbody'}`}>
                    <EmailList />
                    {(currentopenedemail === undefined) && <Paginate />}
                </div>
                {(currentopenedemail !== undefined) && (<div className='right-container'>
                    <Emailbody />
                </div>)}
            </div>
        </div>
    )
}
export default Main

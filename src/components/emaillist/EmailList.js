import React, { useEffect } from 'react'
import Email from '../email/Email'
import './emaillist.css'
import { useSelector, useDispatch } from 'react-redux'
import { getallEmail } from '../../actions/email'

function EmailList() {
  const allemails = useSelector(state => state?.emails?.allemails)
  const dispatch = useDispatch();
  const { filtertype, favoriteemails, readedemails, pagedemails } = useSelector(state => state?.emails);

  const unreadedemails = readedemails && allemails?.filter(email => !readedemails.includes(email))
  const showingData = filtertype === 'Unread' ? (unreadedemails||pagedemails) : filtertype === 'read' ? readedemails : filtertype === 'Favorites' ? favoriteemails : pagedemails


  useEffect(() => {
    dispatch(getallEmail())
  }, [])

  return (
    <div className='Email-list-container'>
      <div className='Email-list'>
        {!showingData ? <span className='error-title'>No Reacord Found</span> : showingData?.map((email, idx) => (
          <Email key={idx} emaildata={email} />
        ))}
      </div>
    </div>
  )
}

export default EmailList

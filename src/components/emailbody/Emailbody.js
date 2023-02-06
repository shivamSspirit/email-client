import React from 'react'
import './emailbody.css'
import { useDateTime } from '../../hooks/useDateTime'
import { useSelector, useDispatch } from 'react-redux';
import * as emailActions from '../../actions/email'
import { removehtmltag } from '../../utils';

function Emailbody() {
  const { convertodate, convertotime } = useDateTime();
  const { currentopenedemail, singleemail, allemails } = useSelector(state => state?.emails)
  const dispatch = useDispatch();

  const setFavorite = (emailid) => {
    const currentmail = allemails.find((email => email.id === emailid))
    dispatch(emailActions?.setFavoriteemail(currentmail))
  }

  return (
    <div className='email-body-container'>
      <div className='email-body-box'>
        <span className='email-body-icon'>
          {currentopenedemail?.data?.name[0].toUpperCase()}
        </span>
        <div className='email-body-side'>
          <div className='subandmark'>
            <span className='email-body-subject'>{currentopenedemail?.data?.subject}</span>
            <button className='fav-buttton' onClick={() => setFavorite(currentopenedemail?.id)}>Mark as favorite</button>
          </div>
          <span>
            <span className='body-date-time-item'>{convertodate(currentopenedemail?.data?.date)}</span> <span className='body-date-time-item'>{convertotime(currentopenedemail?.data?.date)}</span>
          </span>
          <p className='body-description'>
            {singleemail?.body && removehtmltag(singleemail?.body)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Emailbody

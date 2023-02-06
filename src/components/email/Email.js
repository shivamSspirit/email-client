import React from 'react'
import './email.css'
import { useDispatch, useSelector } from 'react-redux';
import { getEmailBody } from '../../actions/email';
import { useDateTime } from '../../hooks/useDateTime';
import * as emailActions from '../../actions/email'

function Email({ emaildata }) {
  const dispatch = useDispatch()
  const { currentopenedemail, readedemails, favoriteemails, allemails } = useSelector(state => state.emails)
  const { convertodate, convertotime } = useDateTime();

  const getSingleEmail = (emailid, data) => {
    dispatch(getEmailBody(emailid))
    dispatch(emailActions?.setcurrentemaildata(data))
    const currentmail = allemails.find((email => email.id === emailid))
    dispatch(emailActions?.setReadedemail(currentmail))
  }

  return (
    <div className='single-email-box'>
      <div className={`single-email-items  ${currentopenedemail?.id === emaildata?.id && 'active-email'} ${readedemails?.find(email => email.id === emaildata.id) && 'readed-style'}`} onClick={() => getSingleEmail(emaildata?.id, { id: emaildata.id, data: { name: emaildata?.from?.name, subject: emaildata?.subject, date: emaildata?.date } })}>
        <span className='roundes'>
          <span className='rounded-letter'>
            {emaildata?.from?.name[0].toUpperCase()}
          </span>
        </span>
        <div className='email-side-section'>
          <span className='side-item'>
            <p className='email-title'>From:</p><p className='email-item'>{emaildata?.from?.name} {`<${emaildata?.from?.email}>`}</p>
          </span>
          <span className='side-item'>
            <p className='email-title'>Subject:</p><p className='email-item'>
              {emaildata?.subject}
            </p>
          </span>

          <p className='description'>{emaildata?.short_description}</p>

          <span className='side-item'>
            <span className='date-item'>{convertodate(emaildata?.date)}</span><span className='time-item'>{convertotime(emaildata?.date)}</span> {favoriteemails?.find((item) => item.id === emaildata?.id) && <span className='fav'>Favourite</span>}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Email

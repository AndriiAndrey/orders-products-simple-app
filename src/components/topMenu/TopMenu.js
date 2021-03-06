import React, { useState, useEffect } from 'react'
import Clock from 'react-live-clock'
import { subscribeToCount } from '../../api/api'

const TopMenu = () => {
  const [clientsCout, setClientsCout] = useState('no clients yet')

  useEffect(() => {
    subscribeToCount((_err, cont) => setClientsCout(cont))
  }, [])

  return (
    <header className="header">
      <img className="header-logo"
        src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/18064219411582800510-512.png" alt="logo" />
      <div className="time-wrapper">
        <p>Today</p>
        <div className="date-time-value">
          <Clock format={'d MMM, YYYY'}/>
          <img className="clock-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR78W1Sqj7Iyy3ftIjAT1QsPfRo3Nl_erbZCaymj56XsqBypNfX&usqp=CAU/>" alt="clock"/>
          <Clock format={'HH:mm'}/>
          <p className="date-time-value-active-tab">Active tab: {clientsCout}</p>
        </div>
      </div>
    </header>
  )
}

export default TopMenu

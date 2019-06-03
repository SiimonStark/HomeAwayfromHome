import React from 'react';
import TrackerAppl from '../../container/Tracker-Appl/';
import TrackerInter from '../../container/Tracker-Inter/';
import Recent from '../../container/Recent/'


const Dashboard = () => {
  return (
    <main>
      <TrackerAppl />
      <TrackerInter />
      <Recent />
    </main>
  )
}

export default Dashboard;
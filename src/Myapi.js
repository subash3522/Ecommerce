// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function MyApi() {
//   const [activity, setActivity] = useState('');

//   async function fetchActivity() {
//     try {
//       const response = await axios.get('https://www.boredapi.com/api/activity');
//       const fetchedActivity = response.data.activity;
//       setActivity(fetchedActivity);
//     } catch (error) {
//       console.error('Error fetching activity', error);
//     }
//   }

//   useEffect(() => {
//     fetchActivity();
//   }, []);

//   return (
//     <div>
//       <h1>Random Activity Suggestion:</h1>
//       <p>{activity}</p>
//     </div>
//   );
// }

// export default MyApi;



import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import Mycontext from './Mycontext';

function MyApi() {
  const [activity, setActivity] = useState('');

  async function fetchActivity() {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');
      const fetchedActivity = response.data.activity;
      setActivity(fetchedActivity);
    } catch (error) {
      console.error('Error fetching activity', error);
    }
  }
  const dataApple = useContext(Mycontext);

  return (
    <div>
      <h1>Random Activity Suggestion:</h1>
      <p>{activity}</p>
      <button onClick={fetchActivity}>Get Random Activity</button>
      <p>{dataApple}</p>
    </div>
  );
}

export default MyApi;

// import React, { useEffect ,useState } from 'react';
// import { createClient } from 'contentful';

// // export const GetStaticProps = async () => {
// //   const client = createClient({
// //     space: '18tfimm6dnj6',
// //     accessToken: 'MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4'
// //   });
// //   const [post, setPost] = useState([])
// //   const response = await client.getEntries({
// //     content_type: 'notification',
// //   }).then((
// //     function(article) {
// //       article.items.map((posts) => { 
// //         setPost(posts.fields.title)
// //       })
// //   }
// //   ))
// // };

// export const Notification = () => {
//   const client = createClient({
//     space: '18tfimm6dnj6', // 自分のspace設定
//     accessToken: 'MshNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4' // 自分のaccessToken
//   })

//   const [post, setPost] = useState([])

//   useEffect(async() =>{
//     const response = await client.getEntries({
//       content_type: "notification"
//     })
//     setPost(response.items);
//     setIsLoaded(true)
//   },[])

//   console.log({post})
//   return (
//     <div>
//       <p>投稿一覧</p>
//       <ul>
//         {post.map(item => (
//           <>
//             <li>{item.fields.title}</li>
//           </>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Notification;

import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "18tfimm6dnj6",
  accessToken: "MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4",
});

export const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, [notifications]);

  const fetchData = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: "notification"
      });
      setNotifications(items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul>
      {notifications.map((notification, i) => (
        <li key={i}>{notification.fields.title}</li>
      ))}
    </ul>
  );
};

export default Notification;
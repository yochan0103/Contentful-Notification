import React from 'react';
import { createClient } from 'contentful';

export const GetStaticProps = async () => {
  const client = createClient({
    space: '18tfimm6dnj6',
    accessToken: 'MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4'
  });
  const response = await client.getEntries({
    content_type: 'notification',
  })
  // console.log(response.items[0])
  const articles = response.items
  const posts = Promise.all(articles.map(post => {
    <div key={post.sys.id}>
      {post.fields}
    </div>
  }))
  console.log(posts)
  console.log(articles)
  console.log("sss")
  return (
    <>
      { posts }
    </>
  )
  // const post = articles.map((item) =>(
  //   <li key={item.sys.id}>{ item.fields.title }</li>
  // ))
  // console.log(post)
  // const ddd = articles.map((post) => (
  //   <li key={post.sys.id}>
  //     {post.fields.title}
  //   </li>
  // ))
  // console.log(ddd)
  // return (
  //   <div>
  //     <ul>
  //       {ddd}
  //     </ul>
  //   </div>
  // )
  // return {
  //   props: {
  //     // ここでの「text」はリッチテキストを指していますが、各フィールドの名前はコンテンツモデルの作成時に任意のものを設定できます
  //     article: response.items
  //   },
  // };
};

export const Notification = () => {
  console.log("qqq")
  return(
    <ul>
      <GetStaticProps />
    </ul>
  )
}
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

// const Profile: NextPage<Props> = ({ text }) => (
//   <div>
//     {text && documentToReactComponents(text, renderOptions)}
//   </div>
// );

// export default Profile;

// import React from 'react';
// import { createClient } from 'contentful';



// export const GetStaticProps = async () => {
//   const client = createClient({
//     space: "18tfimm6dnj6",
//     accessToken: "MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4",
//   });
//   console.log("qqqqq")
//   const checks = await client.getEntries({
//       content_type: 'Notification',
//   }).then(entries=>{
//     return{
//       posts:entries.items
//     }
//   })
//   .catch(console.error)

//   console.log("qqqqq")
//   console.log(posts)
//   return(
//     <>
//       <p>aaaaa</p>
//     </>  
//   )
// }

// class Notification extends React.Component{

//   client = contentful.createClient({
//     space: "18tfimm6dnj6",
//     accessToken: "MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4"
//   });

//   state = {
//     items: []
//   }
  
//   componentDidMount = () => {
//     this.client.getEntries({
//         content_type:"Notification"
//     })
//     .then((response) => {
//       this.setState({
//         items: response.items
//       });
//     });
//   }

//   render(){
//     const checks = await client.getEntries({
//       content_type: 'Notification',
//     }) 
//     console.log(checks)
//     return (
//       <div>        
//         {
//           this.state.items.map((item) => (
//             <li>{item.fields.title}</li>
            
//            ))
//         }
//       </div>
//     );  
//   }
// }


export default GetStaticProps;
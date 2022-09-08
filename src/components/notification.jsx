import React from 'react';
import { createClient } from 'contentful';

export const GetStaticProps = async () => {
  const client = createClient({
    space: '18tfimm6dnj6',
    accessToken: 'MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4'
  });

  const response = await client.getEntries({
    content_type: 'notification',
  }).then((
    function(article) {
      article.items.map((post) => { 
        <li>
          {post.fields.title}
        </li>
        console.log(post.fields.title)
      })
  }
  ))
};

export default GetStaticProps;
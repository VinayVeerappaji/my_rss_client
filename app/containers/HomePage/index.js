/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {useEffect, useState} from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Feed from 'rss-to-json';

export default function HomePage() {
  const [link,setLink] = useState(undefined);
  const [rssObject,setRssObject] = useState({title:undefined,link:undefined});

  useEffect(()=>{
    Feed.load(link, function(err, rss) {
      setRssObject(rss)
   })
  },[link])

  return (
    <>
    <h1>
      <input onChange={(event)=>setLink(event.target.value)} ></input>
    </h1>
    {JSON.stringify(rssObject)}
    </>
  );
}

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Feed from 'rss-to-json';

export default function HomePage() {
  const [link, setLink] = useState(undefined);
  const [rssObject, setRssObject] = useState([{enclosures:[{url:''}]}]);
  const [id,setId] = useState(null);
  useEffect(() => {
    Feed.load(link, function(err, rss) {
      if (rss) {
        setRssObject(rss.items);
      }
    });
  }, [link]);

  return (
    <>
      <h1>
        <input onChange={event => setLink(event.target.value)} />
      </h1>
      {rssObject.map((item, index) => {
        return (
          <tr>
      <th>{item.title}</th>
      <th>{item.desciption}</th>
      <th><button onClick={()=>{setId(index);console.log(index)}}>click to play</button></th>
            <th>{item.enclosures.map(enclosure=>{console.log(index);return(<>{(enclosure.type==='audio/mpeg'&&id==={index})&&<audio controls><source src={enclosure.url}/></audio>}</>)})}}</th>
          </tr>
        );
      })}
    </>
  );
}

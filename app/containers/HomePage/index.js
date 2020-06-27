/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import AudioPlayer from 'react-h5-audio-player';
import './playstyle.css';

let parser = new Parser({
  headers: { 'User-Agent': 'Spotify' },
});

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

const SaveToLocalStorage = (feed, link) => {
  let title = feed.title;
  let historyFromLocal = localStorage.getItem("history");
  let existingHistory
  if (historyFromLocal) {
    existingHistory = JSON.parse(historyFromLocal);
    console.log(existingHistory.some(item => item.link === link))
    if (!existingHistory.some(item => item.link === link)) {
      console.log('hi')
      localStorage.setItem("history", JSON.stringify([...existingHistory, { link: link, title: title }]));
    }
  } else {
    localStorage.setItem("history", JSON.stringify([{ link: link, title: title }]));
  }
}

const GetFromLocalStorage = () => {
  let retriveHistory = localStorage.getItem("history")
  if (retriveHistory) {
    return JSON.parse(retriveHistory)
  } else {
    return undefined
  }
}

const ClearLocalStorage = () => {
  window.localStorage.removeItem('history');
}



const backgroundColorGenerator = () => {

  switch (Math.floor((Math.random() * 10) + 1)) {
    case 1: return '#a4c9d8';
    case 2: return '#ffe818';
    case 3: return '#fff';
    case 4: return '#cdf567';
    case 5: return '#ff4935';
    case 6: return '#3e8ef1';
    case 7: return '#ffbc4b';
    case 8: return '#a4c9d8';
    case 9: return '#ffe818';
    case 10: return '#fff';
  }
}
export default function HomePage() {

  const element = (item,index) => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        border: '2.5px solid black',
        margin: '1%',
        backgroundColor: `${backgroundColorGenerator()}`
      }}
      id={item.guid}
        className={'item'}
      >
        <img
          style={{
            border: '2.5px solid black',
            margin: '1%'
          }}
          src={item.itunes.image} width={100} height={100} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h2 
          style={{
            fontFamily: "'Lobster', cursive"
          }}>{item.title}

                  </h2>
                 <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
                  <button 
        style={{
          border: '2.5px solid black',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 'bold',
          marginLeft: '5px',
          whiteSpace: 'nowrap',
          backgroundColor: 'transparent'
        }}
          onClick={()=>setAudioSrc(item.enclosure.url)}>
            PLAY ▶
          </button>
          <button
        style={{
          border: '2.5px solid black',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 'bold',
          marginLeft: '5px',
          whiteSpace: 'nowrap',
          backgroundColor: 'transparent'
        }}
          onClick={async ()=>{
            var text = `https://frosty-engelbart-cda16e.netlify.app?rss=${link}&page=${page?page:0}&id=${item.guid}`;
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
          }}>
            SHARE
          </button>
          </div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif"
          }}>{item.itunes.subtitle}</p>
        </div>
      </div>
    )
  }

  let url = new URL(window.location.href);
  const [link, setLink] = useState(undefined);
  const [rssObject, setRssObject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(GetFromLocalStorage())
  useEffect(
    () => {
      let rssQueryParameter = url.searchParams.get("rss");
      setLink(rssQueryParameter);
      if (rssQueryParameter)
        requestRss(rssQueryParameter);
    }, []);

  
  const requestRss = link => {
    let feed
    (async () => {
      try {
        setLink(link);
        setRssObject([])
        let recievedPage = parseInt(url.searchParams.get("page"),10)
        if(recievedPage){
          setPage(recievedPage)
        }
        setLoading(true);
        feed = await parser.parseURL(CORS_PROXY + link);
        setLoading(false);
        console.log(feed);
        setRssObject(feed.items);
        SaveToLocalStorage(feed, link);
        setHistory(GetFromLocalStorage())
        setAudioSrc(feed.items[0].enclosure.url);
      } catch (error) {
        console.log(error);
        setLoading(false);
        alert('not a rss');
      }
    
    
    try {
      let id = url.searchParams.get("id")
      if(id){
      var elmnt = document.getElementById(id);
        feed.items.map(item=>{
          if(item.guid==id){
            setAudioSrc(item.enclosure.url);
          }
        })
elmnt.scrollIntoView();}
    } catch (error) {
      
    }
    }
    )();
  

  };

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const [audioSrc,setAudioSrc] = useState('');
  const PaginationControls = () => <>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      maxWidth: '700px',
      margin: 'auto',
      justifyContent: 'center'
    }}>
      <button
        style={{
          border: '2.5px solid black',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 'bold',
          margin: '3%',
          whiteSpace: 'nowrap',
          backgroundColor: 'transparent'
        }}
        disabled={page == 0}
        onClick={() =>  setPage(page - 1)}>
        BACK
</button>
      <span
        style={{
          fontFamily: "'Lobster', cursive",
          fontWeight: 'bold',
          margin: '3%',
          whiteSpace: 'nowrap',
        }}
      >
        {console.log(page)}
        {(page*10)+1} - {(((page+1)*10)>rssObject.length)?rssObject.length:(page+1)*10} of {rssObject.length}
      </span>

      < button
        style={{
          border: '2.5px solid black',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 'bold',
          margin: '3%',
          whiteSpace: 'nowrap',
          backgroundColor: 'transparent'
        }}
        disabled={(page+1) * rowsPerPage > rssObject.length}
        onClick={() => setPage(page + 1)}>
        NEXT
</button>
    </div>
  </>
  return (
    <>
      <div style={{
        maxWidth: '700px',
        margin: 'auto',
      }}>
        <span style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '700px',
          margin: 'auto'
        }}>
          <label>
            {loading ? `Loading..` : `Podcast Client`}
          </label>
          <input
            onChange={event => setLink(event.target.value)}
            defaultValue={link}
            disabled={loading}
            placeholder={'Enter RSS link here'}
            
          />
          <button onClick={() => requestRss(link)} className={'request'} disabled={loading||!link}>
            Load Podcast
      </button>

        </span>
        {history && <ul
          >
            <h3 style={{
          fontFamily: "'Lobster', cursive"
        }}>PodList
        <button 
        style={{
          marginLeft:"10px",
          cursor: 'pointer',
          backgroundColor:'transparent',
          border :`none`,
          fontSize : '15px'
        }}
        onClick={()=>{
          ClearLocalStorage()
          setHistory(undefined)
        }}>
          ❌
        </button>

        </h3>
            {history.map(item => <li><a href={`https://frosty-engelbart-cda16e.netlify.app?rss=${item.link}&page=${0}`}>{item.title}</a></li>)}</ul>}
        {rssObject.length > 0 && <PaginationControls />}
        <div style={{marginBottom:'100px'}}>
        {rssObject && (
          rssObject
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => {
              return (
                element(item,index)
              );
            })
        )}
        </div>
  <AudioPlayer
    style={{
      position: 'fixed',
    bottom: '0',
    margin: 'auto',
    maxWidth: '700px'
    }}
    autoPlay
    src={audioSrc}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
      </div>




    </>
  );
}

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
//import Feed from 'rss-to-json';

import Parser from 'rss-parser';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Tooltip,
  Chip,
  TablePagination,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import browserFingerprint from './browserFinerprint';
const useStyles = makeStyles(theme => ({
  table: {
    //wordWrap: 'break-word',
    whiteSpace: 'nowrap',
  },
}));

let parser = new Parser({
  headers: {'User-Agent': 'Spotify'},
});
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
//const CORS_PROXY = null;

const element = item => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'row',
      border: '2.5px solid black',
      margin: '1%',
      backgroundColor: `${backgroundColorGenerator()}`
    }}>
      <img 
      style={{border: '2.5px solid black',
    margin: '1%'
    }}
      src={item.itunes.image} width={100} height={100}/>
      <div style={{
      display:'flex',
      flexDirection:'column',
      //border: '2.5px solid black'
    }}>
      <h2 style={{
          fontFamily: "'Lobster', cursive"
    }}>{item.title}</h2>
          <audio controls
          style={{
            border: '5px solid black',
    borderRadius: '500px'
          }}
          >
        <source src={item.enclosure.url} />
      </audio>
      <p style={{
          fontFamily: "'Montserrat', sans-serif"
    }}>{item.itunes.subtitle}</p>
      </div>
    </div>
  )
}

const backgroundColorGenerator = () => {
  
switch(Math.floor((Math.random() * 10) + 1)){
  case 1 : return '#a4c9d8';
  case 2 : return '#ffe818';
  case 3: return '#fff';
  case 4: return '#cdf567';
  case 5 : return '#ff4935';
  case 6 : return '#3e8ef1';
  case 7 : return '#ffbc4b';
  case 8 : return '#a4c9d8';
  case 9 : return '#ffe818';
  case 10: return '#fff';
}
}
export default function HomePage() {
  const [link, setLink] = useState(undefined);
  const [rssObject, setRssObject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const classes = useStyles();
  const requestRss = link => {
    // Feed.load(link, function(err, rss) {
    //   if (rss) {
    //     setRssObject(rss.items);
    //     console.log(rss)
    //   }
    // });
    (async () => {
      try {
        setLoading(true);
        let feed = await parser.parseURL(CORS_PROXY+link);
        setLoading(false);
        console.log(feed);
        setRssObject(feed.items);
      } catch (error) {
        console.log(error);
        setLoading(false);
        alert('not a rss');
      }
    })();
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const PaginationControls = ()=><>
  <div style={{
      display:'flex',
      flexDirection:'row',
      margin: 'auto'
    }}>
<button 
style={{
  border: '2.5px solid black',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight:'bold',
  margin:'5%',
  whiteSpace:'nowrap',
  backgroundColor:'transparent'
}}
onClick={()=>page>0?setPage(page-1):alert('no more items')}>
  BACK
</button>
<span 
style={{
  fontFamily: "'Lobster', cursive",
  fontWeight:'bold',
  margin:'5%',
  whiteSpace:'nowrap',
}}
>
  Page : {page}
</span>

< button
style={{
  border: '2.5px solid black',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight:'bold',
  margin:'5%',
  whiteSpace:'nowrap',
  backgroundColor:'transparent'
}}
onClick={()=>page*rowsPerPage<rssObject.length?setPage(page+1):alert('No more items')}>
  NEXT
</button>
  </div>
  </>
  return (
    <>
    <div style={{
      height:'100vh',
      maxWidth:'700px',
      margin:'auto',
    }}>
      <span style={{
        display:'flex',
        flexDirection:'column',
        maxWidth:'700px',
        margin:'auto'
      }}>
      <label>
      Enter RSS here.
      </label>
          <input
        onChange={event => setLink(event.target.value)}
   />
           <button onClick={() => requestRss(link)} className={'request'}>
       ~ Request ~
      </button>
      {rssObject.length>0 &&<PaginationControls/>}
        </span>
        {rssObject && (
rssObject
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  .map((item, index) => {
    return (
      element(item)
    );
  })
)}

    </div>

   

      {loading && <CircularProgress />}

    </>
  );
}

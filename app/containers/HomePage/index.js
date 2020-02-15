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
  TablePagination
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  table: {
    wordWrap: 'break-word'
  },
}));

export default function HomePage() {
  const [link, setLink] = useState(undefined);
  const [rssObject, setRssObject] = useState([{ enclosures: [{ url: '' }] }]);
  const [id, setId] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    Feed.load(link, function(err, rss) {
      if (rss) {
        setRssObject(rss.items);
        console.log(rss)
      }
    });
  }, [link]);

  const [page,setPage] = useState(0);
  const [rowsPerPage,setRowsPerPage] = useState(10);

  const handleChangePage = (event,page)=>{
    setPage(page)
  }

  const handleChangeRowsPerPage = (event)=>{
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
  return (
    <>
      <h1>
        <input onChange={event => setLink(event.target.value)} />
      </h1>
      <TableContainer component={Paper}>
      <TablePagination
          rowsPerPageOptions={[5,10,15,20]}
          component="div"
          count={rssObject.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        <Table  size="small" aria-label="simple table" stickyHeader={true} style={{tableLayout:'fixed'}}>
          <TableHead>
            <TableRow>
              {Object.keys(rssObject[0]).map((item, index) => (
            <TableCell className={classes.table}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rssObject.slice(page*rowsPerPage,(page*rowsPerPage)+rowsPerPage).map((item, index) => {
              return (
                <TableRow >
                  {Object.keys(item).map(function(key, index) {
                    if(key==='enclosures'){
                        if(item[key]){
                          let enclosures = item[key]
                          let enclosure = enclosures[0]
                      return(
                        <Tooltip title={key}><TableCell className={classes.table}>
                          <audio controls>
                            <source src={enclosure.url}/>
                          </audio>
                        <Chip label={enclosure.length}/>
                        <Chip label={enclosure.type}/>
                        </TableCell></Tooltip>
                      )
                    }
                    }else if(key==='guid'){
                      return(<Tooltip title={key}><TableCell className={classes.table}>{
                        JSON.stringify(item[key])
                        }</TableCell></Tooltip>);}

                    else{
                      return(<Tooltip title={key}><TableCell className={classes.table}>{
                        item[key]
                        }</TableCell></Tooltip>);}
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {rssObject.map((item, index) => {
        return (
          <tr>
            <th>{item.title}</th>
            <th>{item.desciption}</th>
            <th>
              <button
                onClick={() => {
                  setId(index);
                }}
              >
                click to play
              </button>
            </th>
            <th>
              {item.enclosures.map(enclosure => {
                return (
                  <>
                    {enclosure.type === 'audio/mpeg' && id === { index } && (
                      <audio controls>
                        <source src={enclosure.url} />
                      </audio>
                    )}
                  </>
                );
              })}
              }
            </th>
          </tr>
        );
      })} */}
    </>
  );
}

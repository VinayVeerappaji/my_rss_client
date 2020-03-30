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
//const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const CORS_PROXY = null;

export default function HomePage() {
  const [link, setLink] = useState(undefined);
  const [rssObject, setRssObject] = useState(undefined);
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
        let feed = await parser.parseURL(link);
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

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TextField
        label="Enter RSS link here"
        variant="outlined"
        onChange={event => setLink(event.target.value)}
      />
      <Button onClick={() => requestRss(link)} variant="contained">
        Request
      </Button>
      {loading && <CircularProgress />}
      {rssObject && (
        <TableContainer component={Paper}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20]}
            component="div"
            count={rssObject.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          <Table
            size="small"
            aria-label="simple table"
            stickyHeader={true}
            style={{ overflowX: 'auto' }}
          >
            <TableBody>
              {rssObject
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  return (
                    <TableRow>
                      {Object.keys(item).map(function(key, index) {
                        if (key === 'enclosure') {
                          if (item[key]) {
                            let enclosure = item[key];
                            return (
                              <Tooltip title={key}>
                                <TableCell className={classes.table}>
                                  <audio controls>
                                    <source src={enclosure.url} />
                                  </audio>
                                  <Chip label={enclosure.length} />
                                  <Chip label={enclosure.type} />
                                </TableCell>
                              </Tooltip>
                            );
                          }
                        } else if (key === 'guid') {
                          return (
                            <Tooltip title={key}>
                              <TableCell className={classes.table}>
                                {JSON.stringify(item[key])}
                              </TableCell>
                            </Tooltip>
                          );
                        } else if (key === 'content:encoded') {
                          var el = document.createElement('html');
                          el.innerHTML = item[key];
                          return (
                            <Tooltip title={key}>
                              <TableCell className={classes.table}>
                                {el.innerText}
                              </TableCell>
                            </Tooltip>
                          );
                        } else if (key === 'link') {
                          console.log('link');
                          return (
                            <Tooltip title={key}>
                              <TableCell className={classes.table}>
                                <a src={item[key]}>{item[key]}</a>
                              </TableCell>
                            </Tooltip>
                          );
                        } else if (key === 'itunes') {
                          console.log('link');
                          return (
                            <>
                              <Tooltip title={key}>
                                <TableCell className={classes.table}>
                                  {item[key].author}
                                </TableCell>
                              </Tooltip>
                              <Tooltip title={key}>
                                <TableCell className={classes.table}>
                                  {item[key].summary}
                                </TableCell>
                              </Tooltip>
                              <Tooltip title={key}>
                                <TableCell className={classes.table}>
                                  {item[key].explicit}
                                </TableCell>
                              </Tooltip>
                              <Tooltip title={key}>
                                <TableCell className={classes.table}>
                                  {item[key].duration}
                                </TableCell>
                              </Tooltip>
                              <Tooltip title={key}>
                                <TableCell className={classes.table}>
                                  <img src={item[key].image} height={'100'} />
                                </TableCell>
                              </Tooltip>
                              <Tooltip title={key}>
                                <TableCell className={classes.table}>
                                  {item[key].episode}
                                </TableCell>
                              </Tooltip>
                            </>
                          );
                        } else {
                          return (
                            <Tooltip title={key}>
                              <TableCell className={classes.table}>
                                {JSON.stringify(item[key])}
                              </TableCell>
                            </Tooltip>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

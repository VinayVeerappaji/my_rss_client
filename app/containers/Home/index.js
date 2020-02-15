/**
 *
 * Home
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHome, {makeSelectRssObject} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {triggerRss,requestRss} from './actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function Home({
  object,
  onrequestRssObject
}) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  
  const [link, setLink] = useState(undefined);
  const [rssObject, setRssObject] = useState({});

  useEffect(()=>{
    setRssObject(object)
    console.log(object)
  },[object])

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <TextField
      label="Enter link here"
      onChange={event=>setLink(event.target.value)}
      />
      <Button variant='contained' onClick={()=>onrequestRssObject(link)}>REQUEST</Button>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  object : makeSelectRssObject(),
});

function mapDispatchToProps(dispatch) {
  return {
    onrequestRssObject: (link)=>{
      console.log('hello')
      dispatch(triggerRss());
      dispatch(requestRss(link))
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);

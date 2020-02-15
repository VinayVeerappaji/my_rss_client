/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  TRIGGER_RSS,
  REQUEST_RSS,
  FAIL_RSS,
  FULLFILL_RSS,
  SUCCESS_RSS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestRss(link) {
  return {
    type: REQUEST_RSS,
    link: link
  }
}

export function triggerRss() {
  console.log('heelo ')
  return {
    type: TRIGGER_RSS
  }
}

export function failRss() {
  return {
    type: FAIL_RSS
  }
}

export function fullfillRss() {
  return {
    type: FULLFILL_RSS
  }
}

export function successRss(object) {
  return {
    type: SUCCESS_RSS,
    object : object
  }
}
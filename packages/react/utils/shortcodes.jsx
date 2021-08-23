import * as React from 'react';

export const KSShortcodeLink = (shortcode) => {
  let href = '#'; // Setting a default
  let text = shortcode; // We assume they did not pass the pipe correctly :-)
  // If a pipe is found, lets set the href & text values accordingly
  if (shortcode.indexOf("|") > 0) {
    href = shortcode.split("|")[0];
    text = shortcode.split("|")[1];
  }

  return { href, text };
}

export const KSShortcodeLinkGen = ({shortcode, classes}) => {
  return (
    <a href={KSShortcodeLink(shortcode).href} className={classes}>{KSShortcodeLink(shortcode).text}</a>
  )
}
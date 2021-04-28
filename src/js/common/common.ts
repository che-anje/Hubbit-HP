import objectFitImages from 'object-fit-images';
objectFitImages();

import picturefill from 'picturefill';
picturefill();

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import AnchorLink from './_anchor_link';
AnchorLink();

import Stickyfill from 'stickyfilljs';
const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.sticky');
Stickyfill.add(elements);

import IncludeHTML from "./_include";
IncludeHTML('/assets/inc/header.html', 'header');
IncludeHTML('/assets/inc/footer.html', 'footer');

import ScrollAnimation from './_scroll_animation';
ScrollAnimation();

Number.isNaN = Number.isNaN || function (any) {
  return typeof any === 'number' && isNaN(any);
};

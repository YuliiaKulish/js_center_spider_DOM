'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

const positionX = (wall.clientWidth - spider.clientWidth) / 2;
const positionY = (wall.clientHeight - spider.clientHeight) / 2;

spider.style.left = positionX + 'px';
spider.style.top = positionY + 'px';

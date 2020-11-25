import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import React from 'react';

const heading = new Heading();
const hwBtn = new HelloWorldButton();

heading.render('hello world');
hwBtn.render();

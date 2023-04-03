import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRedux from './Redux-Toolkit/AppRedux';
import Index from './CSS/Index';
import ReactHighlight from './ReactHighlight/ReactHighlight';
import ReactHighlights from './ReactHighlight/ReactHighlights';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ReactHighlights />
  </>
);

import React from 'react';
import { render } from 'react-dom';
import RenderRoute from './Route';
import './stylesheets/normalize.css';
import './stylesheets/md.css';
import './stylesheets/site.less';

render(<RenderRoute />, document.getElementById('root'));

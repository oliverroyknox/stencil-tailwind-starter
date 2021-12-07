import { A as ActiveRouter } from './active-router-b37b54ed.js';
import './match-path-760e1797.js';
import './index-2ab96984.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}

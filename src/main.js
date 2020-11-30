require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

import Default from './layouts/default';
import Blank from './layouts/blank';

import Router from './routers/router';
import Config from './config';
import Utils from './utils';


import i18n from './plugins/i18n/i18n';
// import VeeValidate from 'vee-validate';

// Libraries
import './plugins/element-ui';
import './plugins/vue-awesome-notifications';
import 'bootstrap'

import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor )
Vue.mixin(Utils);
Vue.component('default-layout',Default);
Vue.component('blank-layout',Blank);

Vue.prototype.appConfig = Config;
require("babel-core/register");
require("babel-polyfill");


new Vue({
    el: '#app',
    i18n,
    // VeeValidate,
    render: h => h(Default),
    router: Router,
});

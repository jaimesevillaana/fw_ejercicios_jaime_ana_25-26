"use strict";
exports.__esModule = true;
exports.routes = void 0;
var home_component_1 = require("./home/home.component");
var details_component_1 = require("./details/details.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: details_component_1.DetailsComponent,
        title: 'Home details'
    },
];

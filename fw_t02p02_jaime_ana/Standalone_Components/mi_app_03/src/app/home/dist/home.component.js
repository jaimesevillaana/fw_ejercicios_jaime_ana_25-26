"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var housing_location_component_1 = require("../housing-location/housing-location.component");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.baseUrl = 'https://angular.dev/assets/images/tutorials/common';
        this.housingLocation = {
            id: 9999,
            name: 'Test Home',
            city: 'Test city',
            state: 'ST',
            photo: this.baseUrl + "/example-house.jpg",
            availableUnits: 99,
            wifi: true,
            laundry: false
        };
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            imports: [housing_location_component_1.HousingLocationComponent],
            templateUrl: './home.component.html',
            styleUrl: './home.component.css'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

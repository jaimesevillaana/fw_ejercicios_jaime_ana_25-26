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
var housing_service_1 = require("../housing.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.baseUrl = 'https://angular.dev/assets/images/tutorials/common';
        this.housingLocationList = [
            {
                id: 0,
                name: 'Acme Fresh Start Housing',
                city: 'Chicago',
                state: 'IL',
                photo: this.baseUrl + "/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
                availableUnits: 4,
                wifi: true,
                laundry: true
            },
            {
                id: 1,
                name: 'A113 Transitional Housing',
                city: 'Santa Monica',
                state: 'CA',
                photo: this.baseUrl + "/brandon-griggs-wR11KBaB86U-unsplash.jpg",
                availableUnits: 0,
                wifi: false,
                laundry: true
            },
            {
                id: 2,
                name: 'Warm Beds Housing Support',
                city: 'Juneau',
                state: 'AK',
                photo: this.baseUrl + "/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
                availableUnits: 1,
                wifi: false,
                laundry: false
            },
            {
                id: 3,
                name: 'Homesteady Housing',
                city: 'Chicago',
                state: 'IL',
                photo: this.baseUrl + "/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
                availableUnits: 1,
                wifi: true,
                laundry: false
            },
            {
                id: 4,
                name: 'Happy Homes Group',
                city: 'Gary',
                state: 'IN',
                photo: this.baseUrl + "/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
                availableUnits: 1,
                wifi: true,
                laundry: false
            },
            {
                id: 5,
                name: 'Hopeful Apartment Group',
                city: 'Oakland',
                state: 'CA',
                photo: this.baseUrl + "/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
                availableUnits: 2,
                wifi: true,
                laundry: true
            },
            {
                id: 6,
                name: 'Seriously Safe Towns',
                city: 'Oakland',
                state: 'CA',
                photo: this.baseUrl + "/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
                availableUnits: 5,
                wifi: true,
                laundry: true
            },
            {
                id: 7,
                name: 'Hopeful Housing Solutions',
                city: 'Oakland',
                state: 'CA',
                photo: this.baseUrl + "/r-architecture-GGupkreKwxA-unsplash.jpg",
                availableUnits: 2,
                wifi: true,
                laundry: true
            },
            {
                id: 8,
                name: 'Seriously Safe Towns',
                city: 'Oakland',
                state: 'CA',
                photo: this.baseUrl + "/saru-robert-9rP3mxf8qWI-unsplash.jpg",
                availableUnits: 10,
                wifi: false,
                laundry: false
            },
            {
                id: 9,
                name: 'Capital Safe Towns',
                city: 'Portland',
                state: 'OR',
                photo: this.baseUrl + "/webaliser-_TPTXZd9mOo-unsplash.jpg",
                availableUnits: 6,
                wifi: true,
                laundry: true
            },
        ];
        this.filteredLocationList = [];
        this.housingService = core_1.inject(housing_service_1.HousingService);
        this.housingLocationList = this.housingService.getAllHousingLocations();
        this.filteredLocationList = this.housingLocationList;
    }
    HomeComponent.prototype.filterResults = function (text) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }
        this.filteredLocationList =
            this.housingLocationList.filter(function (housingLocation) { return housingLocation === null || housingLocation === void 0 ? void 0 : housingLocation.city.toLowerCase().includes(text.toLowerCase()); });
    };
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

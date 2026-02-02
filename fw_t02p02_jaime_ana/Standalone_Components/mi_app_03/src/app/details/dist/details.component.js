"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailsComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var housing_service_1 = require("../housing.service");
var forms_1 = require("@angular/forms");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
        this.route = core_1.inject(router_1.ActivatedRoute);
        this.housingService = core_1.inject(housing_service_1.HousingService);
        this.applyForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(''),
            lastName: new forms_1.FormControl(''),
            email: new forms_1.FormControl('')
        });
        var housingLocationId = Number(this.route.snapshot.params['id']);
        this.housingLocation =
            this.housingService.getHousingLocationById(housingLocationId);
    }
    DetailsComponent.prototype.submitApplication = function () {
        var _a, _b, _c;
        this.housingService.submitApplication((_a = this.applyForm.value.firstName) !== null && _a !== void 0 ? _a : '', (_b = this.applyForm.value.lastName) !== null && _b !== void 0 ? _b : '', (_c = this.applyForm.value.email) !== null && _c !== void 0 ? _c : '');
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            imports: [forms_1.ReactiveFormsModule],
            templateUrl: './details.component.html',
            styleUrl: './details.component.css'
        })
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;

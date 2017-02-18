System.register(['@angular/core', './Student.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Student_service_1;
    var StudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Student_service_1_1) {
                Student_service_1 = Student_service_1_1;
            }],
        execute: function() {
            StudentComponent = (function () {
                function StudentComponent(studentser) {
                    this.studentser = studentser;
                    this.title = 'Hello world Student information-12';
                    this.errorMessage = 'error';
                }
                //getTitlelocal():void{this.studentser.getTitle().then(serviceTitle => this.serviceTitle = serviceTitle)}
                //getStudentsLocal():void{this.studentser.getStudents().then(studentInfo => this.studentInfo = studentInfo)}
                StudentComponent.prototype.getTitlelocal = function () {
                    var _this = this;
                    this.studentser.getTitle().subscribe(function (serviceTitle) { return _this.serviceTitle = serviceTitle; }, function (error) { return _this.errorMessage = error; });
                };
                StudentComponent.prototype.getStudentsLocal = function () {
                    var _this = this;
                    this.studentser.getStudents().subscribe(function (studentInfo) { return _this.studentInfo = studentInfo; }, function (error) { return _this.errorMessage = error; });
                };
                StudentComponent.prototype.ngOnInit = function () {
                    this.getTitlelocal();
                    this.getStudentsLocal();
                };
                StudentComponent.prototype.onSelect = function (student) {
                    this.selectedStudent = student;
                };
                StudentComponent = __decorate([
                    core_1.Component({
                        selector: 'student-info',
                        templateUrl: "app/Student.component.html",
                        styleUrls: ['app/Student.component.css']
                    }), 
                    __metadata('design:paramtypes', [Student_service_1.StudentService])
                ], StudentComponent);
                return StudentComponent;
            }());
            exports_1("StudentComponent", StudentComponent);
        }
    }
});
//# sourceMappingURL=Student.component.js.map
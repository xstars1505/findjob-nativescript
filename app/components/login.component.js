"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['profile-detail']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './components/login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQU16QyxJQUFhLGNBQWM7SUFLdkIsd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV2QyxpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDhCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGNBQWM7SUFKMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxtQ0FBbUM7S0FDbkQsQ0FBQztxQ0FNOEIsZUFBTTtHQUx6QixjQUFjLENBWTFCO0FBWlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsncHJvZmlsZS1kZXRhaWwnXSk7XG4gICAgfVxufVxuIl19
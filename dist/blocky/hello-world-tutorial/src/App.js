"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Profile_js_1 = __importDefault(require("./Profile.js"));
const Signin_js_1 = __importDefault(require("./Signin.js"));
const blockstack_1 = require("blockstack");
const appConfig = new blockstack_1.AppConfig();
const userSession = new blockstack_1.UserSession({ appConfig: appConfig });
class App extends react_1.Component {
    handleSignIn(e) {
        e.preventDefault();
        userSession.redirectToSignIn();
    }
    handleSignOut(e) {
        e.preventDefault();
        userSession.signUserOut(window.location.origin);
    }
    render() {
        return (<div className="site-wrapper">
        <div className="site-wrapper-inner">
          {!userSession.isUserSignedIn() ?
            <Signin_js_1.default userSession={userSession} handleSignIn={this.handleSignIn}/>
            : <Profile_js_1.default userSession={userSession} handleSignOut={this.handleSignOut}/>}
        </div>
      </div>);
    }
    componentDidMount() {
        if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then((userData) => {
                window.history.replaceState({}, document.title, "/");
                this.setState({ userData: userData });
            });
        }
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map
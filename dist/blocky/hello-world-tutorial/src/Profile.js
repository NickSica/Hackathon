"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const blockstack_1 = require("blockstack");
const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';
class Profile extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name() {
                    return 'Anonymous';
                },
                avatarUrl() {
                    return avatarFallbackImage;
                },
            },
        };
    }
    render() {
        const { handleSignOut, userSession } = this.props;
        const { person } = this.state;
        return (!userSession.isSignInPending() ?
            <div className="panel-welcome" id="section-2">
        <div className="avatar-section">
          <img src={person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage} className="img-rounded avatar" id="avatar-image" alt=""/>
        </div>
        <h1>Hello, <span id="heading-name">{person.name() ? person.name() : 'Nameless Person'}</span>!</h1>
        <p className="lead">
          <button className="btn btn-primary btn-lg" id="signout-button" onClick={handleSignOut.bind(this)}>
            Logout
          </button>
        </p>
      </div> : null);
    }
    componentWillMount() {
        const { userSession } = this.props;
        this.setState({
            person: new blockstack_1.Person(userSession.loadUserData().profile),
        });
    }
}
exports.default = Profile;
//# sourceMappingURL=Profile.js.map
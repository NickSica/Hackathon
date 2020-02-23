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
class Signin extends react_1.Component {
    render() {
        const { handleSignIn } = this.props;
        return (<div className="panel-landing" id="section-1">
        <h1 className="landing-heading">Hello, Blockstack!</h1>
        <p className="lead">
          <button className="btn btn-primary btn-lg" id="signin-button" onClick={handleSignIn.bind(this)}>
            Sign In with Blockstack
          </button>
        </p>
      </div>);
    }
}
exports.default = Signin;
//# sourceMappingURL=Signin.js.map
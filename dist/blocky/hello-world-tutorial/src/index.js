"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const App_js_1 = __importDefault(require("./App.js"));
// Require Sass file so webpack can build it
require("bootstrap/dist/css/bootstrap.css");
require("./styles/style.css");
react_dom_1.default.render(<react_router_dom_1.BrowserRouter><App_js_1.default /></react_router_dom_1.BrowserRouter>, document.getElementById('root'));
//# sourceMappingURL=index.js.map
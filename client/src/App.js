"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Images_1 = __importDefault(require("./components/Images"));
require("./App.css");
function App() {
    return (<>
      <div className="flex flex-col items-center justify-center min-h-screen m-16">
        <div className="flex flex-col items-center mb-4">
        <p>Code Challenge</p>
        <p className="text-7xl font-extrabold font-sans mb-1">Infinite Scroll Unsplash Images</p>
        </div>
        <div className="max-w-screen-xl">
        <Images_1.default />
        </div>
      </div>
    </>);
}
exports.default = App;

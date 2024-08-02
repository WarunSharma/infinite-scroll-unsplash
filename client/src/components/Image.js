"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Image({ image }) {
    var _a;
    return (<img src={(_a = image === null || image === void 0 ? void 0 : image.urls) === null || _a === void 0 ? void 0 : _a.thumb}/>);
}
exports.default = Image;

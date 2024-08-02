"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_infinite_scroll_component_1 = __importDefault(require("react-infinite-scroll-component"));
const react_1 = require("react");
const Image_1 = __importDefault(require("./Image"));
const Spinner_1 = __importDefault(require("./Spinner"));
function Images() {
    const [images, setImages] = (0, react_1.useState)([]);
    const [page, setPage] = (0, react_1.useState)(1);
    const [hasMore, setHasMore] = (0, react_1.useState)(true);
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    (0, react_1.useEffect)(() => {
        function getImages() {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield axios_1.default.get(`${BACKEND_URL}/api/photos?page=${page}&perPage=10`);
                const newImages = result === null || result === void 0 ? void 0 : result.data;
                setImages(prevImages => [...prevImages, ...newImages]);
                if (newImages.length < 10)
                    setHasMore(false);
            });
        }
        getImages();
    }, [page]);
    const loadMoreImages = () => {
        console.log("here");
        setPage(prev => prev + 1);
    };
    return (<div>
      <react_infinite_scroll_component_1.default dataLength={images.length} next={loadMoreImages} hasMore={hasMore} loader={<Spinner_1.default />} className="flex flex-wrap">
        {images.map((image) => (<Image_1.default key={image === null || image === void 0 ? void 0 : image.id} image={image}/>))}
      </react_infinite_scroll_component_1.default>
    </div>);
}
exports.default = Images;

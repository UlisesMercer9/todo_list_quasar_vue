"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "firebase", {
  enumerable: true,
  get: function get() {
    return _app["default"];
  }
});
exports.db = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA_0dGCq-zLIrTOZaHE-iACTt2rrseA43Q",
  authDomain: "todo-win-320d5.firebaseapp.com",
  projectId: "todo-win-320d5",
  storageBucket: "todo-win-320d5.appspot.com",
  messagingSenderId: "637900067916",
  appId: "1:637900067916:web:1af4607b11abd1a6fa90e9"
};

var firebaseApp = _app["default"].initializeApp(firebaseConfig);

var db = _app["default"].firestore();

exports.db = db;
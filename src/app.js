import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/search-container.js"
import "./script/component/club-list.js"
import "./script/component/app-bar.js";
import main from "./script/view/main.js";

// document.querySelector("header").appendChild(document.createElement("app-bar"))
// document.querySelector("main").appendChild(document.createElement("search-container"))
// document.querySelector("main").appendChild(document.createElement("club-list"))
document.addEventListener("DOMContentLoaded", main);
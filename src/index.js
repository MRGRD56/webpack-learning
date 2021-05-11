import Post from "@models/Post";
import "@styles/styles.css";
import json from "@assets/data.json";
import xml from "@assets/data.xml";
import image from "@assets/test.png";
import csv from "@assets/data.csv";
import * as $ from "jquery";

console.log("JSON", json);
console.log("XML", xml);
console.log("PNG", image);
console.log("CSV", csv);

const post = new Post("Webpack Post Title");
console.log(post.toString());

const csvDataElement = $("#csv-data");
const jsonDataElement = $("#json-data");
const xmlDataElement = $("#xml-data");
const pngImageElement = $("#png-image");

csvDataElement.text(csv);
jsonDataElement.text(json);
xmlDataElement.text(xml);
pngImageElement.attr("src", image);

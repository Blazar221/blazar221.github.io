import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const container = d3.select("#experience svg");

const width = 800;
const height = 600;
const innerHeight = 550;

container
    .append("line")
    .attr("x1", 0)
    .attr("y1", -innerHeight / 2)
    .attr("x2", 0)
    .attr("y2", innerHeight / 2)
    .attr("stroke", "white")
    .attr("stroke-width", 10)
    .attr("stroke-linecap", "round")
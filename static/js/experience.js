import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const expData = [
    {
        place: "Acumen LLC, Sphere Institute",
        title: "Data Visualization Developer II",
        start: new Date(2023, 6, 16),
        end: new Date(2024, 11, 31),
        placement: "left",
        img: "https://assets-global.website-files.com/6394aa3508df0bd2aa3841c5/6394aa3508df0b9b9038420f_sphere_logo.png"
    },
    {
        place: "OTIF",
        title: "Frontend Developer",
        start: new Date(2022, 3, 1),
        end: new Date(2022, 8, 30),
        placement: "right",
        img: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/x5ju0wqyyqcw3qfl8f3z"
    }
]

const container = d3.select("#experience svg");

const width = 800;
const height = 600;
const innerHeight = 550;
const picDim = 80;

const timeScale = d3.scaleTime([new Date(2016, 0, 1), new Date(2024, 11, 31)], [innerHeight / 2, -innerHeight / 2])

container
    .append("line")
    .attr("x1", 0)
    .attr("y1", -innerHeight / 2)
    .attr("x2", 0)
    .attr("y2", innerHeight / 2)
    .attr("stroke", "white")
    .attr("stroke-width", 10)
    .attr("stroke-linecap", "round")

const expGroup = container
    .selectAll("g")
    .data(expData)
    .enter()
    .append("g")

expGroup
    .append("line")
    .attr("x1", d => d.placement === "left" ? -20 : 20)
    .attr("x2", d => d.placement === "left" ? -20 : 20)
    .attr("y1", d => timeScale(d.start))
    .attr("y2", d => timeScale(d.end))
    .attr("stroke", "red")
    .attr("stroke-width", 8)
    .attr("stroke-linecap", "round")

expGroup
    .append("image")
    .attr("href", d => d.img)
    .attr("x", d => d.placement === "left" ? -40 - picDim : 40)
    .attr("y", d => timeScale(new Date(d.end.getTime() / 2  + d.start.getTime() / 2)) - picDim / 2)
    .attr("height", picDim)
    .attr("width", picDim)
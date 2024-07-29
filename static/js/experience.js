import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const expData = [
    {
        place: "Acumen LLC, Sphere Institute",
        title: "Data Visualization Developer II",
        start: new Date(2024, 2, 1),
        end: new Date(2024, 11, 31),
        type: "fulltime",
        img: "https://assets-global.website-files.com/6394aa3508df0bd2aa3841c5/6394aa3508df0b9b9038420f_sphere_logo.png"
    },
    {
        place: "Acumen LLC, Sphere Institute",
        title: "Data Visualization Developer I",
        start: new Date(2023, 7, 17),
        end: new Date(2024, 1, 31),
        type: "fulltime",
        img: "https://assets-global.website-files.com/6394aa3508df0bd2aa3841c5/6394aa3508df0b9b9038420f_sphere_logo.png"
    },
    {
        place: "OTIF",
        title: "Frontend Developer",
        start: new Date(2022, 3, 1),
        end: new Date(2022, 8, 30),
        type: "intern",
        img: "https://github.com/Blazar221/blazar221.github.io/blob/main/static/asset/otif.png?raw=true"
    },
    {
        place: "University of Southern California",
        title: "Master of Computer Science",
        start: new Date(2021, 8, 1),
        end: new Date(2023, 5, 12),
        type: "school",
        img: "https://identity.usc.edu/wp-content/uploads/2022/09/PrimaryMonogram.png"
    },
    {
        place: "Xi'an Jiaotong University",
        title: "Research Assistant - Full Stack Engineer",
        start: new Date(2020, 11, 1),
        end: new Date(2021, 5, 12),
        type: "fulltime",
        img: "https://github.com/Blazar221/blazar221.github.io/blob/main/static/asset/xjtu.png?raw=true"
    },
    {
        place: "Nanjing University",
        title: "Bachelor of Software Engineering",
        start: new Date(2016, 9, 1),
        end: new Date(2020, 5, 12),
        type: "school",
        img: "https://github.com/Blazar221/blazar221.github.io/blob/main/static/asset/nju.png?raw=true"
    },
    {
        place: "FanRuan Software Co., Ltd.",
        title: "Mobile Application Developer",
        start: new Date(2019, 7, 1),
        end: new Date(2019, 9, 1),
        type: "intern",
        img: "https://github.com/Blazar221/blazar221.github.io/blob/main/static/asset/fr.png?raw=true"
    },

]
expData.forEach((each, index) => {
    each.placement = index % 2 === 0 ? "up" : "down"
});

const container = d3.select("#experience-container svg");

const lineWidth = 5;
const lineColor = "#C5FF95"
const picDim = 100;

const timeScale = d3.scaleTime([new Date(2016, 0, 1), new Date(2024, 11, 31)], [-innerWidth / 2, innerWidth / 2])

container
    .append("line")
    .attr("x1", -innerWidth / 2)
    .attr("y1", 0)
    .attr("x2", innerWidth / 2)
    .attr("y2", 0)
    .attr("stroke", "white")
    .attr("stroke-width", lineWidth)
    .attr("stroke-linecap", "round")

const expGroup = container
    .selectAll("g")
    .data(expData)
    .enter()
    .append("g")

expGroup
    .append("line")
    .attr("y1", d => d.placement === "up" ? -15 : 15)
    .attr("y2", d => d.placement === "up" ? -15 : 15)
    .attr("x1", d => timeScale(d.start))
    .attr("x2", d => timeScale(d.end))
    .attr("stroke", lineColor)
    .attr("stroke-width", lineWidth)
    .attr("stroke-linecap", "round")

expGroup
    .append("image")
    .attr("href", d => d.img)
    .attr("y", d => d.placement === "up" ? -40 - picDim : 40)
    .attr("x", d => timeScale(new Date(d.end.getTime() / 2 + d.start.getTime() / 2)) - picDim / 2)
    .attr("height", picDim)
    .attr("width", picDim)


export default this;
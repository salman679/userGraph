import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { Graph } from "react-d3-graph";

// Graph data
const data = {
  nodes: [
    { id: "User1", size: 1200, image: "https://via.placeholder.com/150" },
    { id: "User2", size: 1000, image: "https://via.placeholder.com/150" },
    { id: "User3", size: 1000, image: "https://via.placeholder.com/150" },
    { id: "User4", size: 800, image: "https://via.placeholder.com/150" },
    { id: "User5", size: 800, image: "https://via.placeholder.com/150" },
    { id: "User6", size: 800, image: "https://via.placeholder.com/150" },
  ],
  links: [
    { source: "User1", target: "User2", label: "Relation", color: "#3498db" },
    { source: "User1", target: "User3", label: "Relation", color: "#3498db" },
    { source: "User2", target: "User4", label: "Relation", color: "#3498db" },
    { source: "User2", target: "User5", label: "Relation", color: "#3498db" },
    { source: "User2", target: "User6", label: "Relation", color: "#3498db" },
  ],
};

// Graph configuration
const config = {
  nodeHighlightBehavior: true,
  node: {
    size: 600,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
  directed: true,
  d3: {
    gravity: -300,
  },
  renderCustomNodeElement: ({ node }) => {
    return (
      <g>
        {/* Circular Image for Avatar */}
        <defs>
          <clipPath id={`clip-circle-${node.id}`}>
            <circle cx="0" cy="0" r="30" />
          </clipPath>
        </defs>
        <image
          href={node.image} // Node image source from data
          x="-30"
          y="-30"
          width="60"
          height="60"
          clipPath={`url(#clip-circle-${node.id})`}
        />
        {/* Text below the image */}
        <text x="0" y="45" textAnchor="middle" fontSize="8px" fill="black">
          {node.id}
        </text>
      </g>
    );
  },
};

const MyGraph = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    if (graphRef.current) {
      const svg = d3.select(graphRef.current).select("svg");

      // Example: Animate nodes (optional)
      svg
        .selectAll("circle")
        .transition()
        .duration(1000)
        .attr("r", (d) => d.size)
        .style("fill", "orange")
        .transition()
        .duration(1000)
        .style("fill", "lightblue");

      // Example: Animate links (optional)
      svg
        .selectAll("line")
        .transition()
        .duration(1000)
        .style("stroke", "red")
        .transition()
        .duration(1000)
        .style("stroke", "blue");
    }
  }, []);

  return (
    <div ref={graphRef} style={{ width: "100%", height: "600px" }}>
      <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={config}
      />
    </div>
  );
};

export default MyGraph;

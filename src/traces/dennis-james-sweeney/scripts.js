/**
 * Dennis James Sweeney - Circle packing visualization using D3
 */

const maxRadius = 32;
const padding = -32;
const margin = {
  top: -maxRadius,
  right: -maxRadius,
  bottom: -maxRadius,
  left: -maxRadius
};
const width = 2880 - margin.left - margin.right;
const height = 1800 - margin.top - margin.bottom;

let k = 1;  // initial number of candidates to consider per circle
let m = 1;  // initial number of circles to add per frame
let n = 5000;  // remaining number of circles to add
const newCircle = bestCircleGenerator(maxRadius, padding);

const svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "svgBG")
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.timer(function() {
  for (var i = 0; i < m && --n >= 0; ++i) {
    var circle = newCircle(k);

    svg.append("circle")
      .attr("cx", circle[0])
      .attr("cy", circle[1])
      .attr("r", 0)
      .style("fill", randomColor({ luminosity: 'dark', hue: 'green' }))
      .transition()
      .attr("r", circle[2]);

    // As we add more circles, generate more candidates per circle.
    // Since this takes more effort, gradually reduce circles per frame.
    if (k < 500) {
      k *= 1.01;
      m *= 0.998;
    }
  }
  return !n;
});

/**
 * Creates a function that generates the best circle placement
 * using a quadtree for efficient spatial queries
 */
function bestCircleGenerator(maxRadius, padding) {
  var quadtree = d3.geom.quadtree().extent([[0, 0], [width, height]])([]);
  var searchRadius = maxRadius * 100;

  return function(k) {
    var bestX, bestY, bestDistance = 0;

    for (var i = 0; i < k || bestDistance < padding; ++i) {
      var x = Math.random() * width;
      var y = Math.random() * height;
      var rx1 = x - searchRadius;
      var rx2 = x + searchRadius;
      var ry1 = y - searchRadius;
      var ry2 = y + searchRadius;
      var minDistance = maxRadius;

      quadtree.visit(function(quad, x1, y1, x2, y2) {
        var p = quad.point;
        if (p) {
          var dx = x - p[0];
          var dy = y - p[1];
          var d2 = dx * dx + dy * dy;
          var r2 = p[2] * p[2];

          if (d2 < r2) {
            minDistance = 0;
            return true;  // within a circle
          }

          var d = Math.sqrt(d2) - p[2];
          if (d < minDistance) {
            minDistance = d;
          }
        }

        // Skip if outside search radius or no more distance to find
        return !minDistance || x1 > rx2 || x2 < rx1 || y1 > ry2 || y2 < ry1;
      });

      if (minDistance > bestDistance) {
        bestX = x;
        bestY = y;
        bestDistance = minDistance;
      }
    }

    var best = [bestX, bestY, bestDistance - padding];
    quadtree.add(best);
    return best;
  };
}

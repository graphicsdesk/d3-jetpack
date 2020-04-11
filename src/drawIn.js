export default function () {
  const totalLength = getPathLength(this);
  return this
    .attr('stroke-dasharray', totalLength)
    .attr('stroke-dashoffset', totalLength)
    .transition('lines-draw')
      .duration(DRAW_TIME)
      .attr('stroke-dashoffset', 0);
}

// Gets path length of a path
function getPathLength(pathNode) {
  if (!isElement(pathNode))
    pathNode = pathNode.node();
  if (pathNode === null)
    return;
  if (pathNode.tagName !== 'path')
    throw 'getPathLength acts on paths, but you passed in a: ' + pathNode.tagName;

  return pathNode.getTotalLength();
}

// Checks if an element is a DOM object
// Source: https://stackoverflow.com/a/36894871
function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

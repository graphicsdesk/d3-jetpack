export default function (textValue, fill) {
  const text = this.append('text');
  text.append('tspan').st({
    stroke: '#fff',
    opacity: 0.8,
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  });
  text.append('tspan').st({ fill });
  text.selectAll('tspan').text(textValue);
  return text;
}
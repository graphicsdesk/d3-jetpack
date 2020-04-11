export default function () {
  return this.style('opacity', 0).transition('fade')
    .duration(FADE_TIME)
    .style('opacity', 1);
}

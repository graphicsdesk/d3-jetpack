export default function (shouldRemove = true) {
  const trans = this.transition('fade')
    .duration(FADE_TIME)
    .style('opacity', 0);
  return shouldRemove ? trans.remove() : trans;
}

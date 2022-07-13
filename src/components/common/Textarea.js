/**
 * @param {Function} onChange
 * @param {String} value
 * @param {String} name
 * @param {Function} onFocus
 */

function Textarea({
  onChange,
  value,
  id,
  onFocus,
}) {
  return (
    <textarea
      className="tolq-textarea"
      onChange={e => onChange(id, e)}
      value={value}
      id={id}
      cols="40"
      rows="5"
      onFocus={e => onFocus(id, e)}
    />
  )
}

export default Textarea

/**
 * @param {String} name
 * @param {Function} action
 * @param {String} classes // optional
 * @param {*} icon // optional
 * @param {Boolean} isLoading
 * @return {Component}
 */

function Button({
  action,
  name,
  icon,
  classes = "",
  isLoading
}) {
  return (
    <div
      className={`button ${classes}`}
      onClick={() => action()}
    >
      {icon && <img src={icon} alt="" />}
      {isLoading
        ? "...loading" // should be implemented loader component.
        : name}
    </div>
  );
};

export default Button;

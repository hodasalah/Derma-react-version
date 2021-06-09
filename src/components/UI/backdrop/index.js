import "./style.scss";

const Backdrop = (props) => {
	return props.show ? (
		<div className="Backdrop" onClick={props.click}></div>
	) : null;
};
export default Backdrop;

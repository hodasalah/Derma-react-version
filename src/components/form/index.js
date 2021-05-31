import React from "react";
import serachIcon from "../../assets/images/search-icon.png";
import "./style.scss";

const Form = () => {
	return (
		<form className="form">
			<div className="input-group">
				<input
					type="text"
					name="search"
					id="search"
					className="form_input"
					placeholder="SEARCH"
				/>
				<label htmlFor="search" className="form_label">
					Search
				</label>
			</div>
			<button type="submit" className="form_button">
				<img src={serachIcon} alt="search icon" />
			</button>
		</form>
	);
};

export default Form;

import React from "react";
import { NavLink } from "react-router-dom";

const List = (props) => {
	return props.arr.map((el) => (
		<li key={el}>
			<NavLink to={`/${el}`} activeClassName="active">
				{el}
			</NavLink>
		</li>
	));
};

export default List;

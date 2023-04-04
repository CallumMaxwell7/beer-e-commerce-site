import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/Home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/beersAvailable" activeStyle>
			Beers Available
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/reviews" activeStyle>
			Reviews
		</NavLink>
        <NavLink to ="/basket" activeStyle>
            Basket
        </NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

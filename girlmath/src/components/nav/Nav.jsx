import NavigationContainer from "./NavigationContainer";
import NavItem from "./NavItem";
import { nav } from "@/constants/nav";
const Nav = () => {
  <NavigationContainer>
    {nav.map((navItem, index) => (
      <NavItem key={"nav-item-" + index} path={navItem.path} >
        {navItem.icon}
      </NavItem>
    ))}
  </NavigationContainer>;
};

export default Nav;

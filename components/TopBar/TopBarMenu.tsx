import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const TopBarMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <HamburgerIcon />
      </MenuButton>
      <MenuList>
        <Link href="/profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link href="/accounts">
          <MenuItem>Account</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TopBarMenu;

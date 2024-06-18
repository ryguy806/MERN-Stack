import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from "@mui/x-data-grid";
import { bool, object } from "prop-types";

const CustomColumnMenu = ({ hideMenu, currentColumn, open }) => {
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridColumnMenuFilterItem onClick={hideMenu} column={currentColumn} />
      <GridColumnMenuHideItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

CustomColumnMenu.propTypes = {
  hideMenu: bool,
  currentColumn: object,
  open: bool,
};

export default CustomColumnMenu;

import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from "@mui/x-data-grid";

const DataGridCustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <div>
      <GridColumnMenuContainer
        hideMenu={hideMenu}
        currentColumn={currentColumn}
        open={open}
      >
        <GridFilterMenuItem
          onClick={hideMenu}
          column={currentColumn}
        ></GridFilterMenuItem>
        <HideGridColMenuItem
          onClick={hideMenu}
          column={currentColumn}
        ></HideGridColMenuItem>
      </GridColumnMenuContainer>
    </div>
  );
};

export default DataGridCustomColumnMenu;

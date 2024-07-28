import { Menu, MenuItem, Popover, PopoverProps } from "@mui/material";

interface IOption {
  title: string;
  value: string;
}

interface PopOverMenuProps {
  open: boolean;
  anchorEl: any;
  handleClose: () => void;
  options: IOption[];
  onOptionClick: (option: string) => void;
}

export default function PopOverMenu({
  open,
  anchorEl,
  handleClose,
  options,
  onOptionClick,
}: PopOverMenuProps) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {options.map((option, index) => (
        <MenuItem
          key={index}
          onClick={() => onOptionClick(option.value)}
          color="red"
        >
          {option.title}
        </MenuItem>
      ))}
    </Menu>
  );
}

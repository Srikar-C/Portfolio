import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Hamburger from '../Hamburger/Hamburger';

export default function Drop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='dropdown'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Hamburger/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="#home">Home</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#home">About</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#skill">Skills</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#project">Projects</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#contact">Contact</a>
        </MenuItem>
      </Menu>
    </div>
  );
}

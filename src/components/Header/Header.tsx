import React, { useCallback, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import SeachIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Sidebar from '@src/components/Sidebar';
import AddBoardModal from '@src/components/modal/AddBoard';
import './Header.css';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleSidebar = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const toggleModal = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
  }, []);

  return (
    <div className="header-container">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={1}>
          <DehazeIcon onClick={toggleSidebar} />
        </Grid>
        <Grid container xs={6} spacing={1} alignItems="flex-end" item>
          <Grid item>
            <SeachIcon />
          </Grid>
          <Grid item>
            <TextField placeholder="Search Board" color="primary" />
          </Grid>
        </Grid>
      </Grid>

      <Sidebar
        open={open}
        toggleDrawer={toggleSidebar}
        toggleModal={toggleModal}
      />

      <AddBoardModal visible={visible} toggleModal={toggleModal} />
    </div>
  );
};

export default Header;

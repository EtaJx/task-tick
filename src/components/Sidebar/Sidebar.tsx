import React, { memo, useCallback } from 'react';
import {
  List,
  Drawer,
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
  ListItemIcon
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import type { ListItemProps, Theme } from '@material-ui/core';
import { ROUTES } from '@src/components/Router/router.config';
import './Sidebar.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkContainer: {
      display: 'flex',
      width: '200px',
      padding: `${theme.spacing(4)} 0`,
      textAlign: 'center',
      borderBottom: '1px solid #e3e3e3',
      color: '#999'
    }
  })
);

type Props = {
  open: boolean;
  toggleDrawer: () => void;
  toggleModal: () => void;
};

const ListItemLink: React.FC<ListItemProps<'a', { button?: true }>> = (
  props
) => {
  return <ListItem button component="a" {...props} />;
};

const Sidebar: React.FC<Props> = (props) => {
  const { open, toggleDrawer, toggleModal } = props;
  const classes = useStyles();

  const handleAddBoard = useCallback(() => {
    toggleDrawer();
    toggleModal();
  }, [toggleDrawer, toggleModal]);

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <List>
        {ROUTES.map((route) => {
          const { path, key } = route;
          return (
            <ListItemLink
              className={classes.linkContainer}
              href={path}
              key={key}
            >
              <ListItemText primary={key} />
            </ListItemLink>
          );
        })}
        <ListItem
          className={classes.linkContainer}
          button
          onClick={handleAddBoard}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Board" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default memo(Sidebar);

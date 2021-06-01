import React from 'react';
import {
  Modal,
  Fade,
  makeStyles,
  createStyles,
  Backdrop,
  Button
} from '@material-ui/core';
import type { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    header: {
      width: '100%'
    },
    body: {
      width: '100%'
    },
    footer: {
      width: '100%'
    }
  })
);

type Props = {
  visible: boolean;
  toggleModal: () => void;
};

const AddBoard: React.FC<Props> = (props) => {
  const { visible, toggleModal } = props;
  const classes = useStyles();
  return (
    <Modal
      open={visible}
      className={classes.modal}
      onClose={toggleModal}
      closeAfterTransition={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={visible}>
        <div className={classes.container}>
          <div className={classes.header}>this is header</div>
          <div className={classes.body}>this is body</div>
          <div className={classes.footer}>
            <Button variant="outlined" color="primary">
              Confirm
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default AddBoard;

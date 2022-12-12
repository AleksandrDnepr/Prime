import { Component } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export class ModalWindow extends Component {
    state={
        isOpen: false,
    }

    render() {
        return(

        <div>
        <Button onClick={() => this.setState({isOpen: true})}>Open modal</Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={this.state.isOpen}
            onClose={() => this.setState({isOpen: false})}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={this.state.isOpen}>
                <Box sx={style}>
                    {this.props.children}
                </Box>
            </Fade>
        </Modal>
    </div>
        )

    }
}
// export default function TransitionsModal() {

//   return (
    
//   );
// }
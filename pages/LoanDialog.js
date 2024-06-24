import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

const LoanDialog = ({ loan, onClose, onReturn, onExtend }) => {
    const handleReturn = () => {
        onReturn(loan.id);
        onClose();
    };

    const handleExtend = () => {
        onExtend(loan.id);
        onClose();
    };

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>{loan.bookName}</DialogTitle>
            <DialogContent>
                <Typography>Return Date: {loan.returnDate}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleReturn} color="primary">Return Book</Button>
                <Button onClick={handleExtend} color="primary">Extend Loan</Button>
                <Button onClick={onClose} color="secondary">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoanDialog;

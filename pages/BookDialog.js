import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

const BookDialog = ({ book, onClose, onLoan }) => {
    const handleLoan = () => {
        onLoan(book.id);
        onClose();
    };

    return (
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>{book.title}</DialogTitle>
            <DialogContent>
                <Typography>Author: {book.author}</Typography>
                <Typography>Genre: {book.genre}</Typography>
                <Typography>Description: {book.description}</Typography>
                <Typography>Available Copies: {book.availableCopies}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleLoan} color="primary" disabled={book.availableCopies === 0}>Loan</Button>
                <Button onClick={onClose} color="secondary">Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default BookDialog;

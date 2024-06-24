import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import LoanDialog from './LoanDialog';

const Loans = ({ loans, onReturn, onExtend }) => {
    const [selectedLoan, setSelectedLoan] = useState(null);

    const handleLoanClick = (loan) => {
        setSelectedLoan(loan);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Your Loans
            </Typography>
            <Grid container spacing={3}>
                {loans.map(loan => (
                    <Grid item key={loan.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {loan.bookName}
                                </Typography>
                                <Typography variant="body2">
                                    Return Date: {loan.returnDate}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleLoanClick(loan)}
                                >
                                    Manage
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {selectedLoan && (
                <LoanDialog
                    loan={selectedLoan}
                    onClose={() => setSelectedLoan(null)}
                    onReturn={onReturn}
                    onExtend={onExtend}
                />
            )}
        </Container>
    );
};

export default Loans;

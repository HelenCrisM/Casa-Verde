import React, { useState } from 'react';
import { useEmail } from '../../context';
import Button from '@mui/material/Button';
import Snackbar, { type SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const EmailInput: React.FC = () => {
  const { registeredEmail, setRegisteredEmail } = useEmail();
  const [emailInput, setEmailInput] = useState('');

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisteredEmail(emailInput);
    setEmailInput('');
  };

  return (
    <div className="pt-8">
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="flex flex-col sm:flex-row gap-2 mb-2.5">
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Insira seu e-mail"
            required
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <Button
            type="submit"
            onClick={handleClick}
            sx={{
              backgroundColor: '#FFCB47',
              '&:hover': {
                backgroundColor: '#F0B400',
              },
              whiteSpace: 'nowrap',
              minWidth: 'auto',
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#FFCB47',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Assinar newsletter
          </Button>
        </div>
        {registeredEmail && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
            >
              Obrigado pela sua assinatura, você receberá nossas novidades no
              e-mail {registeredEmail}
            </Alert>
          </Snackbar>
        )}
      </form>
    </div>
  );
};

export default EmailInput;

import {
  Box,
  Button,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState, type ReactElement } from 'react';
import {
  clearConversionsHistory,
  type Conversion,
} from '../../store/conversion-history/conversion-history.slice';
import { useAppDispatch } from '../../app/hooks';

export default function ConversionsHistory({
  conversionsHistory,
}: {
  conversionsHistory: Conversion[];
}): ReactElement {
  const dispatch = useAppDispatch();

  const [isDialogOpen, setisDialogOpen] = useState<boolean>(false);

  const onOpenDialogButtonClick = () => {
    setisDialogOpen(true);
  };

  const onCloseDialogButtonClick = () => {
    setisDialogOpen(false);
  };

  const onClearHistoryButtonClick = (): void => {
    dispatch(clearConversionsHistory());
  };

  if (conversionsHistory.length === 0) {
    return <p>History is empty! Try to make some converions please!</p>;
  }

  return (
    <Box
      sx={{
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button
        variant="outlined"
        sx={{ marginBottom: '10px' }}
        onClick={onOpenDialogButtonClick}
      >
        Clear history
      </Button>

      <Dialog open={isDialogOpen} onClose={onCloseDialogButtonClick}>
        <DialogTitle id="alert-dialog-title">
          {'Confirm history clear?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClearHistoryButtonClick}>Yes</Button>
          <Button onClick={onCloseDialogButtonClick} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(1, 1fr)',
              rowGap: '10px',
            }}
          >
            {conversionsHistory.map((conversion) => (
              <TableRow
                key={conversion.date}
                sx={{
                  '&:not(last-child)': {
                    border: '1px solid black',
                  },
                }}
              >
                <TableCell sx={{ display: 'block' }}>
                  Amount: {conversion.amount}
                </TableCell>
                <TableCell sx={{ display: 'block' }}>
                  Result: {conversion.result}
                </TableCell>
                <TableCell sx={{ display: 'block' }}>
                  From currency: {conversion.from}
                </TableCell>
                <TableCell sx={{ display: 'block' }}>
                  To currency: {conversion.to}
                </TableCell>
                <TableCell sx={{ display: 'block' }}>
                  Date: {conversion.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

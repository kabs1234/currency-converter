import {
  Box,
  Button,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import type { ReactElement } from 'react';
import type { Conversion } from '../../store/conversion-history/conversion-history.slice';

export default function ConversionsHistory({
  conversionsHistory,
}: {
  conversionsHistory: Conversion[];
}): ReactElement {
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
      <Button variant="outlined" sx={{ marginBottom: '20px' }}>
        Clear history
      </Button>

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

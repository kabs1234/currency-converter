import { Box, Button } from '@mui/material';
import { useState, type ReactElement } from 'react';
import { useAppSelector } from '../../app/hooks';
import { getConversionsHistory } from '../../store/conversion-history/conversion-history.selector';
import ConversionsHistory from '../conversions-history/conversions-history';

export default function ConversionsHistoryAccordeon(): ReactElement {
  const conversionsHistory = useAppSelector(getConversionsHistory);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  const onOpenHistoryButtonClick = (): void => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  return (
    <Box
      sx={{
        width: '280px',
        display: 'flex',
        flexDirection: 'column',
        margin: '20px auto 0',
      }}
    >
      <Button
        variant="outlined"
        sx={{ marginBottom: '10px' }}
        onClick={onOpenHistoryButtonClick}
      >
        {isHistoryOpen ? 'Close converions history' : 'Open converions history'}
      </Button>

      {isHistoryOpen && (
        <ConversionsHistory conversionsHistory={conversionsHistory} />
      )}
    </Box>
  );
}

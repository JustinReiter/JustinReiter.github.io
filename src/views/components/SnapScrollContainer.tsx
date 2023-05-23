import {
  Box,
  Button,
  Container,
  Fab,
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


interface SnapScrollContainerProps {
    children?: React.ReactNode;
    style?: object;
    className?: string;
    isLastSection?: boolean;
}

const SnapScrollContainer = ({children, style, className, isLastSection}: SnapScrollContainerProps) => {
  const styleObj = {
    scrollSnapAlign: "start",
    paddingTop: "12vh",
    height: "100vh",
    width: "100vw",
    ...style
  };
  
  return (
    <Container style={styleObj} maxWidth="lg" className={className} sx={{display: 'flex', flexDirection: "column", justifyContent: 'space-between'}} >
        {children}
        { !isLastSection && (
          <Box textAlign="center" sx={{mb: 6}}>
            <Fab color="primary" aria-label="next-section">
              <KeyboardArrowDownIcon fontSize='large'/>
            </Fab>
          </Box>
        )}
    </Container>
  );
};

export default SnapScrollContainer;

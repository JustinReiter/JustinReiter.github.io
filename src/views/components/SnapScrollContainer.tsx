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
    id: string;
    nextId?: string;
}

const SnapScrollContainer = ({children, style, id, nextId}: SnapScrollContainerProps) => {
  const styleObj = {
    scrollSnapAlign: "start",
    paddingTop: "12vh",
    height: "100vh",
    width: "100vw",
    ...style
  };
  
  return (
    <Container style={styleObj} maxWidth="lg" id={id} sx={{display: 'flex', flexDirection: "column", justifyContent: 'space-between'}} >
        {children}
        { nextId && (
          <Box textAlign="center" sx={{mb: 6}}>
            <Fab color="primary" aria-label="next-section" href={"#"+nextId}>
              <KeyboardArrowDownIcon fontSize='large'/>
            </Fab>
          </Box>
        )}
    </Container>
  );
};

export default SnapScrollContainer;

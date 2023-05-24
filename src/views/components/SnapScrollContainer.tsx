import { Box, Container, Fab } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SnapScrollContainerProps {
  children?: React.ReactNode;
  style?: object;
  id: string;
  nextId?: string;
}

const SnapScrollContainer = ({
  children,
  style,
  id,
  nextId,
}: SnapScrollContainerProps) => {

  return (
    <Container
      style={style}
      maxWidth="lg"
      id={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        scrollSnapAlign: "start",
        paddingTop: { xs: "6vh", md: "12vh" },
        paddingBottom: { xs: "4vh", md: "0" },
      height: {md: "100vh"},
      width: "100vw",
      }}
    >
      {children}
      {nextId && (
        <Box textAlign="center" sx={{ mb: 6, display: {xs: 'none', md: 'block'} }}>
          <Fab color="primary" aria-label="next-section" href={"#" + nextId}>
            <KeyboardArrowDownIcon fontSize="large" />
          </Fab>
        </Box>
      )}
    </Container>
  );
};

export default SnapScrollContainer;

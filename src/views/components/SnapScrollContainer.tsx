import {
  Container,
} from '@mui/material';

// import './SnapScrollContainer.css';

interface SnapScrollContainerProps {
    children?: React.ReactNode;
    style?: object;
    className?: string;
}

const SnapScrollContainer = ({children, style, className}: SnapScrollContainerProps) => {
  const styleObj = {
    scrollSnapAlign: "start",
    paddingTop: "12vh",
    height: "100vh",
    width: "100vw",
    ...style
  };
  
  return (
    <Container style={styleObj} maxWidth="lg" className={className}>
        {children}
    </Container>
  );
};

export default SnapScrollContainer;

"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styles from "./LayOut.module.css";

interface ILayOut {
  text: string;
  children: React.ReactNode;
}

const LayOut: React.FC<ILayOut> = ({ text, children }) => {
  return (
    <Container maxWidth="lg" className={styles.main}>
      <Typography variant="h3" sx={{ mb: 5 }}>
        {text}
      </Typography>
      {children}
    </Container>
  );
};

export default LayOut;

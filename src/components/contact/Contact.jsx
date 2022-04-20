import { useState } from "react";
import "./contact.scss";
import { TextField, Typography, Button, Stack, Container } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        
        <Typography variant="h4" gutterBottom component="div">
          Contact.
        </Typography>
        <form onSubmit={handleSubmit}>
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField
              variant="filled"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
            />
            <Button type="submit" sx={{m:2}} variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
        </Container>
          {message && <Typography variant="h6" sx={{color:'green',mb:2}} align="center" gutterBottom component="div">Thanks, I'll reply ASAP :)</Typography>}
        </form>
      </div>
    </div>
  );
}

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography, Divider } from '@mui/material';


export default function Form(){
    return(
        <Container maxWidth="md" style={{paddingBottom: '2rem'}}>
          <Divider style={{marginTop: '2rem'}}/>
          <Typography style={{fontSize: '2rem', fontWeight: '300', textAlign: 'center', marginTop: '2rem'}}>ENTRE EM CONTATO CONOSCO</Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="nome"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"

                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    defaultValue=""
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="telefone"
                    label="Telefone"
                    type="number"
                    id="telefone"
                    autoComplete="new-password"
                    />
                </Grid>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor: '#DBAD9A'}}
              >
              
              ENVIAR
            </Button>
          </Box>
          <Typography style={{textAlign:'center', marginTop: '3rem'}}>Alessandra Dias 2024 © Todos os direitos reservados.</Typography>
      </Container>

    )




}
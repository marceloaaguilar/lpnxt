import { Container, Typography, Divider} from "@mui/material";
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import depoimento1 from '/src/assets/images/depoimento-1.jpg';
import depoimento2 from '/src/assets/images/depoimento-2.jpg';
import depoimento3 from '/src/assets/images/depoimento-3.jpg';

export default function Testmonials(){
    return(
        <Container maxWidth="md" style={{marginBottom: '5rem'}}>
          <Grid container spacing={2} style={{justifyContent: 'center', margin: '0'}}>
            <Grid item md={12} xl={4}>
              <Typography style={{fontSize: '2rem', fontWeight: '300', textAlign: 'center', marginTop: '2rem', marginBottom:'1rem'}}>
                  DEPOIMENTOS
              </Typography>
            </Grid>
            <Grid container spacing={2} style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <Grid item md={12} lg={4}>
                <Image  src={depoimento1} style={{ maxWidth: '100%',height: '25rem', objectFit: 'cover', marginBottom: '2rem'}} alt="Depoimento 1 "></Image>
              </Grid>

              <Grid item md={12} lg={4}>
                <Image  src={depoimento2} style={{ maxWidth: '100%', height: '25rem', objectFit: 'cover', marginBottom: '2rem'}} alt="Depoimento 1 "></Image>
              </Grid>

              <Grid item md={12} lg={4}>
                <Image  src={depoimento3} style={{maxWidth: '100%', height: '25rem', objectFit: 'cover'}} alt="Depoimento 1 "></Image>
              </Grid>

            </Grid>
          </Grid>
          <Divider style={{marginTop: '2rem'}}/>
        </Container>



    )





}
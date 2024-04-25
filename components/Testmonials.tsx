import { Container, Typography, Divider} from "@mui/material";
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import depoimento1 from '../public/depoimento-1.jpg';
import depoimento2 from '../public/depoimento-2.jpg';
import depoimento3 from '../public/depoimento-3.jpg';

export default function Testmonials(){
    return(
        <Container maxWidth="md" style={{marginBottom: '5rem'}}>
          <Grid container spacing={0} style={{justifyContent: 'center', margin: '0', padding: '0'}}>
            <Grid item md={12} xl={4}>
              <Typography style={{fontSize: '2rem', fontWeight: '300', textAlign: 'center', marginTop: '2rem', marginBottom:'1rem'}}>
                  DEPOIMENTOS
              </Typography>
            </Grid>
            <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '0'}}>
              <Grid item md={12} lg={4}>
                <Image  src={depoimento1} style={{ maxWidth: '100%',height: '25rem', objectFit: 'cover', marginBottom: '2rem', border: '1px solid gray', borderColor: '#CCCCCC', borderRadius: '10px'}} alt="Depoimento 1 "></Image>
              </Grid>

              <Grid item md={12} lg={4}>
                <Image  src={depoimento2} style={{ maxWidth: '100%', height: '25rem', objectFit: 'cover', marginBottom: '2rem', border: '1px solid gray', borderColor: '#CCCCCC', borderRadius: '10px'}} alt="Depoimento 1 "></Image>
              </Grid>

              <Grid item md={12} lg={4}>
                <Image  src={depoimento3} style={{maxWidth: '100%', height: '25rem', objectFit: 'cover' , border: '1px solid gray', borderColor: '#CCCCCC', borderRadius: '10px'}} alt="Depoimento 1 "></Image>
              </Grid>

            </Grid>
          </Grid>
          <Divider style={{marginTop: '2rem'}}/>
        </Container>



    )





}
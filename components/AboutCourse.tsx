import Image from 'next/image';
import aboutCourse from '/about-course.jpg';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
export default function AboutCurse(){

    return (
      <>
      <Grid container spacing={2} style={{marginTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem 0 2rem'}} id="sobre">
        <Grid item lg={6} sm={12} style={{paddingRight: '2rem'}}>
          <Typography variant="h4" gutterBottom style={{fontWeight: '100',  fontSize: '2rem', marginTop: '2rem'}}>APRENDA AS FUNDAÇÕES DA</Typography>
          <Typography variant="h4" gutterBottom style={{fontWeight: '700', fontStyle: 'italic', fontFamily: 'serif', fontSize: '3rem', lineHeight: '40px'}}>Maquiagem Profissional</Typography>
          <Typography style={{marginTop:'2rem', fontSize: '1.2rem'}}>Descubra os segredos por trás de uma maquiagem impecável! Este curso é o ponto de partida perfeito para quem deseja dominar as fundações da maquiagem profissional. Aprenda técnicas essenciais que irão transformar sua habilidade de se maquiar e elevar sua confiança para um novo nível.</Typography>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Image  src={aboutCourse} alt="Picture of the author" style={{
            width: '100%',
            height: '50rem',
            objectFit: 'cover',
          }}  />
        </Grid>
      </Grid>
    </>


    )


}
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import homeImage from '../public/imagem3.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
    return (
      <Grid
      item
      xs={12}
      md={8}
      sx={{
        position: 'relative',
        height: '30rem',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
          zIndex: 1,
        }
      }}
      > 
        <Image src={homeImage} alt="Picture of the author" sizes="100vw" quality={100} style={{
          width: '100%',
          height: '30rem',
          objectFit: 'cover',
          objectPosition: '65% 35%',
         }}/>
        <Typography variant="h1" component="h2" style={{position: 'relative', zIndex: '1000', marginTop: '-17rem', fontSize: '2rem', color: '#ffffff', fontWeight: '700', padding: '0 2rem 0 2rem'}}> 
            Descubra o Segredo da Beleza
        </Typography>
        <Button variant="outlined" style={{position: 'relative', zIndex: '1000', marginTop: '1rem', fontWeight: '200', color: '#ffffff', borderColor: '#ffffff'}}>Quero Conhecer</Button>
      </Grid>
    )



}

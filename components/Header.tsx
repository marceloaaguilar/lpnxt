import Grid from '@mui/material/Grid';
import Image from 'next/image';
import homeImage from '../public/homeImage.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
    return (
      <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
      >
        <Image src={homeImage} alt="Picture of the author" sizes="100vw" style={{
          width: '100%',
          height: '30rem',
          objectFit: 'cover'
         }}/>
        <Typography variant="h1" component="h2" style={{position: 'relative', zIndex: '1000', marginTop: '-17rem', fontSize: '2rem', marginLeft: '3rem', color: '#ffffff', fontWeight: '700'}}> 
            Descubra o Segredo da Beleza
        </Typography>
        <Button variant="outlined" style={{position: 'relative', zIndex: '1000', marginTop: '1rem', marginLeft: '3rem', fontWeight: '200', color: '#ffffff', borderColor: '#ffffff'}}>Quero Conhecer</Button>
      </Grid>
    )



}

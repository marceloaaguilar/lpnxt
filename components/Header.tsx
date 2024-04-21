import Grid from '@mui/material/Grid';
import Image from 'next/image';
import homeImage from '../public/homeImage.jpg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AboutCurse from './AboutCourse';

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
        <Image  src={homeImage} alt="Picture of the author"  style={{
          width: '100%',
          height: '30rem',
          objectFit: 'cover'
        }}  />
        <Typography style={{marginTop: '-15rem', zIndex: '1000', color: 'white', fontWeight: '700', marginLeft: '5rem', fontSize: '2rem'}}>
          Descubra seu Potencial de Beleza
        </Typography>
        <Button variant="outlined"  href="#sobre" style={{zIndex: '1000', color: 'white', fontWeight: '700', marginLeft: '5rem', fontSize: '1rem', borderColor: 'white', marginTop: '1rem'}}>Quero Descobrir</Button>
      </Grid>
    )



}

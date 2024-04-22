import Grid from '@mui/material/Grid';
import image1 from '../public/imagem1.png';
import image2 from '../public/imagem2.png';
import image3 from '../public/imagem3.png';
import Image from 'next/image';

export default function SectionImages(){


    return (
      <Grid container spacing={0} style={{marginTop: '-1rem'}}>
        <Grid item xs={4}>
          <Image src={image1} style={{width: '100%', height: '25rem', objectFit: 'cover'}} alt="Picture of the author" />
        </Grid>
        <Grid item xs={4} >
          <Image src={image2} style={{width: '100%', height: '25rem', objectFit: 'cover'}}alt="Picture of the author" />
        </Grid>
        <Grid item xs={4}>
          <Image src={image3} style={{width: '100%', height: '25rem', objectFit: 'cover'}} alt="Picture of the author" />
        </Grid>



        </Grid>
    )



}
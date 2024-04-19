import Grid from '@mui/material/Grid';
import Image from 'next/image';
import homeImage from '../public/homeImage.jpg';


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
        <Image  src={homeImage} alt="Picture of the author" sizes="100vw" style={{
          width: '100%',
          height: '30rem',
          objectFit: 'cover'
        }}  />
      </Grid>
    )



}

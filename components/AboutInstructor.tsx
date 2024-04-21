import Grid from '@mui/material/Grid';
import Image from 'next/image';
import fotoAlessandra from './assets/images/IMG_0869.jpg';
import { Container, Typography } from '@mui/material';

export default function AboutInstructor(){

    return  (
        <Grid container spacing={0} style={{alignItems:'center'}}>
          <Grid lg={6} md={12} xl={6}>
            <Image src={fotoAlessandra} style={{maxWidth: '100%', height: '50rem', objectFit: 'cover'}} alt="Foto Alessandra" />
          </Grid>
          <Grid lg={6} md={12} xl={6} style={{ marginTop:'1rem', padding: '2rem', textAlign: 'left'}}>
            <Typography style={{fontWeight: '300', fontSize: '2rem', marginBottom: '2rem'}}>
              SOBRE A ALESSANDRA
            </Typography>
            <Typography>
            Alessandra descobriu sua paixão pela maquiagem desde criança, quando cortava os cabelos das bonecas e sonhava em seguir os passos de sua mãe, uma profissional da área. Sua jornada começou na adolescência, transformando a garagem de casa em seu primeiro salão, assumindo o legado de sua mãe que passou em um concurso público. <br/> <br/>

            Ao longo dos anos, trabalhou em diferentes salões, aprimorando suas técnicas e adquirindo conhecimento. Sua determinação e habilidades a levaram a empreender, abrindo seu próprio studio no centro da cidade de Ouro Preto. Ela conquistou seus clientes panfletando e os convidando para conhecer seu novo espaço. <br/> <br/>

            Em 2019, seu talento e dedicação foram reconhecidos quando ganhou o prêmio de melhor salão de Ouro Preto e ficou entre as 5 melhores maquiadoras de Minas Gerais. Alessandra tem um propósito claro de atender com excelência, buscando constantemente atualizações em suas técnicas e conhecimentos para proporcionar a melhor experiência possível às suas clientes em seu espaço.

            </Typography>
          </Grid>
        </Grid>
    )



}
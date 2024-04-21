
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import alessandraDutra from '/alessandra-dutra-1.jpg';
import makeup from '/makeup.jpg';
import alessandraDutra2 from '/alessandra-dutra-2.jpg';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function CourseContent(){

    return (
      <div style={{backgroundColor: '#DBAD9A', paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Container maxWidth="md" >
          <Grid container maxWidth="md" style={{justifyContent: 'center', backgroundColor: '#DBAD9A', border: '1px solid', borderColor: 'white', marginTop: '2rem'}}>
              <Grid item xl={6} md={12} lg={6}>
                <Image src={makeup}  style={{height: '30rem', objectFit:'cover', width: '100%'}}alt="Picture of the author"></Image>
              </Grid>
              <Grid item xl={6} md={12} lg={6} style={{textAlign: 'center', paddingTop: '2rem'}}>
                <Typography style={{color: 'white', fontSize: '2rem', marginBottom: '3rem', lineHeight: '2rem'}}>
                O QUE VOCÊ IRÁ <b> APRENDER </b>
                </Typography>
                <Typography style={{color: 'white', fontSize: '1.2rem', textAlign: 'left', marginLeft: '1rem' ,paddingRight: '1rem', lineHeight: '3rem', paddingBottom: '2rem'}}>
                  • Fundamentos essenciais da maquiagem. <br/>
                  • Uso correto de produtos e ferramentas. <br/>
                  • Como criar uma rotina de maquiagem eficiente.
                </Typography>
              </Grid>
          </Grid>

          <Grid container maxWidth="md" style={{justifyContent: 'center', backgroundColor: '#DBAD9A', border: '1px solid', borderColor: 'white', marginTop: '2rem'}}>
              <Grid item xl={6} md={12} lg={6} style={{textAlign: 'center', paddingTop: '2rem'}}>
                <Typography style={{color: 'white', fontSize: '2rem', marginBottom: '3rem', lineHeight: '2rem'}}>
                  AUTO <b> MAQUIAGEM </b>
                </Typography>
                <Typography style={{color: 'white', fontSize: '1.2rem', textAlign: 'left', marginLeft: '1rem' ,paddingRight: '1rem', lineHeight: '3rem', paddingBottom: '2rem'}}>
                  • Técnicas para realçar sua beleza natural. <br/>
                  • Aprender a se maquiar de acordo com seu estilo pessoal. <br/>
                  • Dicas para manter a maquiagem impecável ao longo do dia.
                </Typography>
              </Grid>
              <Grid item xl={6} md={12} lg={6}>
                <Image src={alessandraDutra}  style={{height: '30rem', objectFit:'cover', width: '100%'}}alt="Picture of the author"></Image>
              </Grid>
          </Grid>

          <Grid container maxWidth="md" style={{justifyContent: 'center', backgroundColor: '#DBAD9A', border: '1px solid', borderColor: 'white', marginTop: '2rem'}}>
              <Grid item xl={6} md={12} lg={6}>
                <Image src={alessandraDutra2}  style={{height: '30rem', objectFit:'cover', width: '100%'}}alt="Picture of the author"></Image>
              </Grid>
              <Grid item xl={6} md={12} lg={6} style={{textAlign: 'center', paddingTop: '2rem'}}>
                <Typography style={{color: 'white', fontSize: '2rem', marginBottom: '3rem', lineHeight: '2rem'}}>
                TÉCNICAS PROFISSIONAIS DE <b> MAQUIAGEM </b>
                </Typography>
                <Typography style={{color: 'white', fontSize: '1.2rem', textAlign: 'left', marginLeft: '1rem' ,paddingRight: '1rem', lineHeight: '3rem', paddingBottom: '2rem'}}>
                • Contorno e iluminação para esculpir o rosto. <br/>
                  • Correção de imperfeições e camuflagem. <br/>
                  • Segredos para criar looks profissionais para diversas ocasiões.
                </Typography>
              </Grid>
          </Grid>

            <Grid container maxWidth="md" style={{backgroundColor: '#DBAD9A', marginTop:'2rem',  outlineStyle: 'dotted', outlineColor: 'white', alignItems: 'center', justifyContent:'center'}}>
                <Grid item xl={6} md={12} lg={6} style={{ color: 'white', textAlign: 'center', marginTop: '1rem', padding: '1rem'}}>
                  <Typography style={{fontWeight: '700'}}>FAÇA SUA INSCRIÇÃO AGORA</Typography>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{backgroundColor: '#ffffff', color: '#DBAD9A', fontWeight: '700', marginTop: '0.5rem'}}
                    >
                    QUERO ME INSCREVER
                  </Button>
                </Grid>

                <Grid item xl={6} md={12} lg={6} style={{ textAlign: 'center'}}>
                  <Typography style={{fontWeight: '700', fontSize: '3rem',  color: 'white'}}>R$ 29,90</Typography>
                </Grid>
            </Grid>
        </Container>
      </div>



    )





}
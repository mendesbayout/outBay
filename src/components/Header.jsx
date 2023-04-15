import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'orange',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                }}
                >
                    Nós levamos o inglês técnico conversacional para dentro de seu sistema Ágile
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                    Inglês coloquial infelizmente não é uma ferramenta muito engajadora,
                    de acordo com o Discourssive approach, um adulto só consegue aprender
                    plenamente se o contéudo relatar o dia a dia deles, a outBay incorpora
                    engenheiros especialistas em diferentes stacks para promover um treinamento
                    customizado para cada membro e cada squad, se baseando no stack para gerar
                    automaticamente o contéudo.
                </Typography>

                <Box>
                    <Button
                        variant='contained'
                        sx={{
                        mr: 2,
                        px: 4,
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                          backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                          backgroundColor: "#343a55"
                        }
                        }}
                        onClick={() => window.open('https://www.linkedin.com/in/lucas-bayout-11a4573b/', '_blank')}
                        >
                        Meet one of our PM's
                </Button>

                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >

                />
            </Box>

        </CustomBox>
    )
}

export default Header
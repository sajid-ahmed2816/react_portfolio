import React, { useMemo, useState } from 'react';
import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import { ArrowOutward, NorthEast } from '@mui/icons-material';
import { projects } from './projects';
import Colors from '../../assets/style';

const pageSx = {
  '--project-bg': '#001025',
  '--project-panel': '#072131',
  '--project-line': 'rgba(0, 255, 255, .14)',
  '--project-muted': '#94aaa9',
  '--project-ink': '#f1f5ef',
  '--project-accent': '#00ffffc9',
  minHeight: '100vh',
  overflow: 'hidden',
  pt: { xs: '105px', sm: '125px', md: '14vh' },
  pb: { xs: 6, md: 9 },
  color: 'var(--project-ink)',
  fontFamily: 'Poppins, sans-serif',
  background: 'radial-gradient(ellipse at 75% 5%, rgba(0, 255, 255, .08), transparent 32%), linear-gradient(36deg, #072131 10%, #001025 100%)',
  '& *': { boxSizing: 'border-box' },
  '@media (prefers-reduced-motion: reduce)': {
    '& *, & *::before, & *::after': {
      scrollBehavior: 'auto !important',
      transitionDuration: '0.01ms !important'
    }
  },
};

const circleButtonSx = {
  display: 'grid',
  width: 34, height: 34,
  placeItems: 'center',
  border: '1px solid rgba(255,255,255,.32)',
  borderRadius: '50%',
  color: '#fff',
  bgcolor: 'rgba(5,20,24,.4)',
  backdropFilter: 'blur(8px)',
  transition: 'color .2s ease, background .2s ease',
  '& svg': { fontSize: 17 }
};

const filters = ['All', 'Web App', 'Website'];

function Project() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = useMemo(() => {
    return activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)
  }, [activeFilter]);

  return (
    <Box sx={pageSx}>
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid item md={12}>
            <Grid
              container
              justifyContent={"center"}
            >
              <Grid item md={10} sm={12}>
                <Box
                  sx={{
                    py: {
                      md: 6,
                      xs: 3
                    }
                  }}
                >
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.25,
                      color: Colors.primary2,
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: '.17em',
                      '&::before': {
                        content: '""',
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        bgcolor: Colors.primary2,
                        boxShadow: '0 0 13px rgba(0,255,255,.45)'
                      }
                    }}
                  >
                    FROM IDEAS TO REALITY
                  </Typography>
                  <Typography
                    component="h1"
                    sx={{
                      mt: 3,
                      mb: 3,
                      color: 'var(--project-ink)',
                      fontSize: {
                        xs: 'clamp(52px, 12vw, 76px)',
                        sm: 'clamp(54px, 8vw, 100px)'
                      },
                      fontWeight: 500,
                      lineHeight: .98,
                      letterSpacing: '-.075em'
                    }}
                  >
                    A Collection of Things<br />
                    <Box
                      component="span"
                      sx={{ color: 'var(--project-accent)' }}
                    >
                      I've Designed & Built
                    </Box>
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: {
                        xs: 'flex-start',
                        sm: 'end'
                      },
                      justifyContent: 'space-between',
                      flexDirection: {
                        xs: 'column',
                        sm: 'row'
                      },
                      gap: {
                        xs: 1.75,
                        sm: 3.75
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        maxWidth: 520,
                        color: '#b6c4c1',
                        fontSize: { xs: 14, sm: 16 },
                        lineHeight: 1.75
                      }}
                    >
                      A reflection of my ideas, creativity, and passion for turning concepts into meaningful digital experiences. From visually engaging websites to functional web applications, I focus on combining thoughtful design, modern technologies, and intuitive functionality to create solutions that not only look good but also solve real problems. Every project is an opportunity to explore new possibilities, overcome challenges, and deliver experiences that bring value to the people who use them.
                    </Typography>
                    <Typography
                      sx={{
                        color: Colors.primary2,
                        fontSize: 10,
                        letterSpacing: '.15em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <Box
                        component="strong"
                        sx={{
                          mr: 1.1,
                          color: 'var(--project-ink)',
                          fontSize: 28,
                          fontWeight: 500,
                          letterSpacing: '-.05em'
                        }}
                      >
                        {String(projects.length).padStart(2, '0')}
                      </Box>
                      PROJECTS
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={10}>
                <Box
                  aria-label="Filter projects"
                  sx={{
                    my: 3,
                    borderTop: "1px solid #444444",
                    borderBottom: "1px solid #444444"
                  }}
                >
                  <Box
                    role="group"
                    aria-label="Project category"
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: .9,
                      py: 1
                    }}
                  >
                    {filters.map((filter) => (
                      <Button
                        key={filter}
                        aria-pressed={activeFilter === filter}
                        onClick={() => setActiveFilter(filter)}
                        sx={{
                          minWidth: 0,
                          px: 1.5,
                          py: 1,
                          border: activeFilter === filter ? '1px solid rgba(0,255,255,.25)' : '1px solid transparent',
                          borderRadius: '3px',
                          color: activeFilter === filter ? 'var(--project-accent)' : '#a5b6b3',
                          bgcolor: activeFilter === filter ? 'rgba(0,255,255,.08)' : 'transparent',
                          fontSize: 12,
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: 'var(--project-line)',
                            bgcolor: activeFilter === filter ? 'rgba(0,255,255,.1)' : 'transparent'
                          }
                        }}
                      >
                        {filter}
                        <Box
                          component="span"
                          sx={{
                            ml: 1,
                            color: activeFilter === filter ? 'var(--project-accent)' : '#718582',
                            fontSize: 9
                          }}
                        >
                          {String(filter === 'All' ? projects.length : projects.filter((project) => project.category === filter).length).padStart(2, '0')}
                        </Box>
                      </Button>
                    ))}
                  </Box>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  {visibleProjects.map((project) => (
                    <Grid
                      item
                      xs={12}
                      md={4}
                      sm={6}
                      lg={3}
                      key={project.title}
                    >
                      <Box
                        component="article"
                        sx={{
                          height: '100%',
                          overflow: 'hidden',
                          border: '1px solid var(--project-line)',
                          borderRadius: '5px',
                          background: 'linear-gradient(145deg, rgba(16,39,43,.94), rgba(7,24,30,.98))',
                          transition: 'border-color .25s ease, transform .25s ease, box-shadow .25s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            borderColor: 'rgba(0,255,255,.42)',
                            boxShadow: '0 18px 40px rgba(0,0,0,.22)'
                          },
                          '&:hover .project-image': {
                            transform: 'scale(1.045)'
                          },
                          '&:hover .project-open-icon': {
                            color: '#001025',
                            bgcolor: 'var(--project-accent)'
                          },
                          '@media (prefers-reduced-motion: reduce)': {
                            transition: 'none',
                            '&:hover': {
                              transform: 'none'
                            },
                            '&:hover .project-image': {
                              transform: 'none'
                            }
                          }
                        }}
                      >
                        <Box
                          component="a"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${project.title}`}
                          sx={{
                            display: 'block',
                            color: 'inherit',
                            textDecoration: 'none'
                          }}
                        >
                          <Box
                            sx={{
                              position: 'relative',
                              aspectRatio: '1.62 / 1',
                              overflow: 'hidden',
                              bgcolor: '#10282d'
                            }}
                          >
                            <Box
                              component="img"
                              className="project-image"
                              src={project.image}
                              alt={`${project.title} project preview`}
                              loading="lazy"
                              sx={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform .6s cubic-bezier(.2,.75,.25,1)'
                              }}
                            />
                            <Box
                              sx={{
                                position: 'absolute',
                                inset: '35% 0 0',
                                pointerEvents: 'none',
                                background: 'linear-gradient(transparent, rgba(3,16,20,.52))'
                              }}
                            />
                            <Chip
                              label={project.category}
                              size="small"
                              sx={{
                                position: 'absolute',
                                bottom: 8,
                                left: 8,
                                height: 25,
                                border: '1px solid rgba(255,255,255,.25)',
                                borderRadius: '3px',
                                color: '#fff',
                                bgcolor: 'rgba(5,20,24,.63)',
                                backdropFilter: 'blur(8px)',
                                fontSize: 10,
                                '& .MuiChip-label': {
                                  px: 1.1
                                }
                              }}
                            />
                            <Box
                              className="project-open-icon"
                              sx={{
                                ...circleButtonSx,
                                position: 'absolute',
                                top: 8,
                                right: 8
                              }}
                            >
                              <NorthEast />
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            minHeight: { xs: 185, sm: 200 },
                            flexDirection: 'column',
                            p: 2.25
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'baseline',
                              justifyContent: 'space-between',
                              gap: 1.25
                            }}
                          >
                            <Typography
                              component="h2"
                              sx={{
                                color: 'var(--project-ink)',
                                fontSize: 17,
                                fontWeight: 500,
                                letterSpacing: '-.025em'
                              }}
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              sx={{
                                color: '#6b817c',
                                fontSize: 9,
                                letterSpacing: '.1em'
                              }}
                            >
                              {String(projects.indexOf(project) + 1).padStart(2, '0')}
                            </Typography>
                          </Box>
                          <Typography
                            sx={{
                              minHeight: 57,
                              mt: 1.1,
                              color: '#9db0ac',
                              fontSize: 12,
                              lineHeight: 1.6
                            }}
                          >
                            {project.description}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 1.1,
                              mt: 'auto',
                              pt: 1.9,
                              borderTop: '1px solid rgba(0,255,255,.09)'
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: .65
                              }}
                            >
                              {project.tech.slice(0, 3).map((tech) => (
                                <Box
                                  component="span"
                                  key={tech}
                                  sx={{
                                    px: .9,
                                    py: .5,
                                    border: '1px solid rgba(0,255,255,.13)',
                                    borderRadius: '2px',
                                    color: '#a4b7b1',
                                    fontSize: 9,
                                    lineHeight: 1.2
                                  }}
                                >
                                  {tech}
                                </Box>
                              ))}
                            </Box>
                            <Button
                              component="a"
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              endIcon={<ArrowOutward />}
                              sx={{
                                minWidth: 0,
                                px: 1,
                                py: .6,
                                color: 'var(--project-accent)',
                                fontSize: 11,
                                textTransform: 'none',
                                '& .MuiButton-endIcon': { ml: .4 },
                                '& svg': { fontSize: 14 },
                                '&:hover': { bgcolor: 'rgba(0,255,255,.08)' }
                              }}
                            >
                              Visit
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}

export default Project;

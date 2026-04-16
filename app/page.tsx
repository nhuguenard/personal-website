'use client'
import Image from "next/image";
import Link from 'next/link'
import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { Box, Chip, Paper } from '@mui/material';
import TypscriptIcon from '../components/TypescriptIcon';
import ReactIcon from '../components/ReactIcon';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-between py-2 px-10 sm:items-start">
        <Head>
          <title>hello</title>
        </Head>
        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: "stretch" }}>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Box>
              <Grid spacing={2} size={12} container>
                <Grid container size={{ xs: 12, md: 4 }} sx={{ justifyContent: 'center', alignItems: "center" }}>
                  <Image
                    className="dark:invert"
                    src="/headshot.jpg"
                    alt="Nick Huguenard"
                    width={250}
                    height={1000}
                    priority
                  />
                </Grid>
                <Grid container size={{ xs: 12, md: 8 }} sx={{justifyContent: 'center', alignItems: 'center' }}>
                  <p>Hello, I'm <b>Nick Huguenard</b>. I'm a Principal Software Consultant with over 10 years of experience building and improving complex enterprise systems. I specialize in understanding existing systems, identifying bottlenecks, and designing scalable, maintainable architectures.

                    I've led implementation projects, worked directly with customers, and built full-stack SaaS applications using C#, .NET, React, SQL, and modern frontend frameworks.

                    I enjoy solving difficult technical problems, improving reliability, and building systems that scale.</p>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <Paper elevation={10} sx={{ p: 3 }}>
            <Grid spacing={2} size={12} container>
              <Grid size={12}>
                <Typography align="center" variant="h5">My Skills</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container size={12} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Typography fontWeight="bold" variant="h6">Backend</Typography>
                </Grid>
                <Grid size={12} container spacing={1}>
                  <Chip color="primary" label="C#" />
                  <Chip color="primary" label=".NET / .NET Core" />
                  <Chip color="primary" label="SQL Server" />
                  <Chip color="primary" label="REST APIs" />
                  <Chip color="primary" label="Integration Systems" />
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container size={12} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Typography fontWeight="bold" variant="h6">Frontend</Typography>
                </Grid>
                <Grid container spacing={1}>
                  <Chip  color="primary" icon={<ReactIcon />}  label="React" />
                  <Chip color="primary" icon={<TypscriptIcon fontSize="small" />} label="Typscript" />
                  <Chip color="primary" label="Javascript" />
                  <Chip color="primary" label="HTML" />
                  <Chip color="primary" label="CSS" />
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container size={12} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Typography fontWeight="bold" variant="h6">Architecture & Systems</Typography>
                </Grid>
                <Grid container spacing={1}>
                  <Chip color="primary" label="Distributed Systems" />
                  <Chip color="primary" label="API Design" />
                  <Chip color="primary" label="Microservices" />
                  <Chip color="primary" label="Event-Driven Architecture" />
                  <Chip color="primary" label="System Debugging & Performance Optimization" />
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container size={12} sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                  <Typography fontWeight="bold" variant="h6"> Dev & Delievery</Typography>
                </Grid>
                <Grid container spacing={1}>
                  <Chip color="primary" label="CI/CD" />
                  <Chip color="primary" label="Code Reviews" />
                  <Chip color="primary" label="Technical Leadership" />
                  <Chip color="primary" label="Customer-Facing Engineering" />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </main>
    </div >
  );
}

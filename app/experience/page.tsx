'use client'
import Avatar from '@mui/material/Avatar';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from "next/image";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function Experience() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box>
      <Timeline position={isDesktop ? 'alternate' : 'right'}>
        <TimelineItem >
          <TimelineOppositeContent variant="body1" component="span" align="right" sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }}>
            Configit, Inc | 2023 — Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <Avatar
                src="/configit.jpg"
                className="dark:invert"
                alt="Configit"
                width={20}
                height={20}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Card sx={{ maxWidth: 450 }}>
              <CardContent>
                <Typography align='center' gutterBottom variant="h5" component="div">
                  Principal Software Consultant
                </Typography>
                <Typography align='center' variant="body1" component="div" sx={{ display: { xs: 'block', md: 'none' } }}>
                  Configit, Inc | 2023 — Present
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Lead implementation of enterprise configuration platforms" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Design scalable architecture for customer-specific solutions" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Collaborate with global teams and stakeholders" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Debug complex system issues across full-stack environments" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Improve reliability and performance of production systems" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent variant="body1" component="span" align="right" sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }}>
            Configit, Inc | 2019 — 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector  />
            <TimelineDot color="primary">
              <Avatar
                color="secondary"
                src="/configit.jpg"
                className="dark:invert"
                alt="Configit"
                width={20}
                height={20}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Card sx={{ maxWidth: 450, float: { xs: 'none', md: 'right' } }}>
              <CardContent>
                <Typography align='center' variant="h5" component="div">
                  Senior Software Consultant
                </Typography>
                <Typography align='center' variant="body1" component="div" sx={{ display: { xs: 'block', md: 'none' } }}>
                  Configit, Inc | 2019 — 2023
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Built full-stack features for enterprise SaaS platform" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Maintained CI/CD pipelines for delivery organization" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Designed integrations with customer systems" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Participated in architecture and design discussions" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent variant="body1" component="span" align="right" sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }}>
            Configit, Inc | 2016 — 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <Avatar
                src="/configit.jpg"
                className="dark:invert"
                alt="Configit"
                width={20}
                height={20}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card sx={{ maxWidth: 450 }}>
              <CardContent>
                <Typography align='center' gutterBottom variant="h5" component="div">
                  Software Engineer
                </Typography>
                <Typography align='center' variant="body1" component="div" sx={{ display: { xs: 'block', md: 'none' } }}>
                  Configit, Inc | 2016 — 2019
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary=" Developed enterprise software components using C# and SQL within large customer
implementation projects" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Delivered new features and system enhancements while maintaining reliability of existing
production systems" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Assisted with troubleshooting and resolving issues reported by customers and internal teams.
" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Contributed to collaborative development practices including testing, code reviews, and
documentation." />
                  </ListItem>
                </List>
              </CardContent>
            </Card></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent variant="body1" component="span" align="right" sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }}>
            Universal Avioncis Systems, Corp | 2013 — 2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <Avatar
                src="/universal-avionics-logo.png"
                className="dark:invert"
                alt="Universal Avionics"
                width={20}
                height={20}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card sx={{ maxWidth: 450, float: { xs: 'none', md: 'right' } }}>
              <CardContent>
                <Typography align='center' gutterBottom variant="h5" component="div">
                  Software Engineer
                </Typography>
                <Typography align='center' variant="body1" component="div" sx={{ display: { xs: 'block', md: 'none' } }}>
                  Universal Avioncis Systems, Corp | 2013 — 2016
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Developed automated testing software used to validate avionics hardware functionality" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Maintained and enhanced shared testing libraries used across multiple avionics validation
systems" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Built diagnostic tools that improved reliability of automated testing processes" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Worked within a high-reliability engineering environment requiring strict quality and verification
standards.
" />
                  </ListItem>

                </List>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent variant="body1" component="span" align="right" sx={{ m: 'auto 0', display: { xs: 'none', md: 'block' } }}>
            Windham Brannon, P.C. | 2012
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <Avatar
                src="/windham_brannon_logo.jpg"
                className="dark:invert"
                alt="Windham Brannon"
                width={20}
                height={20}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card sx={{ maxWidth: 450 }}>
              <CardContent>
                <Typography align='center' gutterBottom variant="h5" component="div">
                  Internal Developer Intern
                </Typography>
                <Typography align='center' variant="body1" component="div" sx={{ display: { xs: 'block', md: 'none' } }}>
                  Windham Brannon, P.C. | 2012
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary=" Developed and maintained internal web tools that supported daily operations across the firm." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Contributed to “Intraweb,” an internal system providing employee information and operational
functionality." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Built an automated reporting tool that generated SQL-based financial reports and distributed
them to clients via email." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Assisted with maintenance and improvements to internal business systems." />
                  </ListItem>

                </List>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>

  )
}
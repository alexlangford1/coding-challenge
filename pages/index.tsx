import React from 'react';
import Link from 'next/link';

// Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// Components
import Section from 'components/Sections/Section';
import Layout from 'components/Layout/Layout';

export default function Index() {
  return (
    <Layout>
      <Section id="home">
        <Grid
          container
          spacing={10}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Box mt={15} fontSize="1.4rem">
              Welcome to the home page
            </Box>
          </Grid>
          <Link href="/users/users">
            <Button variant="outlined">Press Me</Button>
          </Link>
        </Grid>
      </Section>
    </Layout>
  );
}

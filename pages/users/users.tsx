import useSWR from 'swr';
import { Button, Grid, Box } from '@material-ui/core';
import Navbar from '../../components/Layout/Header/Navbar/Navbar';
import Link from 'next/link'

const users = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/v1/users/x', fetcher);

  return (
    <Box>
      <Navbar />
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-evenly"
      >
        {!data
          ? null
          : data.map((e) => (
            <Link href={`/users/${e.id}`}>
              <Box m={10} p={5} border={1} borderRadius={10}>
                <Grid  >
                  <h1>{e.firstName}</h1>
                  <h2 key={e.id}>{e.email}</h2>
                </Grid>
              </Box>
            </Link>
            ))}
      </Grid>
      <Grid container justify='center' alignItems="center">
        <Link href="/">
        <Button variant="outlined" >
          Back
        </Button>
        </Link>
      </Grid>
    </Box>
  );
};

export default users;

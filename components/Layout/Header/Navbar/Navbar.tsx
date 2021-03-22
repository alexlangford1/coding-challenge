import { useState } from 'react';
import {
  useTheme,
  Theme,
  AppBar,
  Toolbar,
  Grid,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import Logo from 'components/Logo/Logo';
import Input from '../../../SearchInput/Input';
import useSWR from 'swr'

export default function Navbar() {
  const [lisher, setId] = useState('');

  const submitHandler = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR(`/api/v1/users/${lisher}`, fetcher);
  };

  const theme: Theme = useTheme();
  const mobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between">
          {mobile ? (
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item container xs={11} sm={11} alignItems="center">
                <Grid item xs={5} sm={4}>
                  <Box pr={2}>
                    <Grid container alignItems="center">
                      <Logo size={20} />
                    </Grid>
                  </Box>
                  <Input />
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Box p={2}>
                <Grid container alignItems="center">
                  <Logo size={24} />
                </Grid>
              </Box>
              <Box>
                <Input />
              </Box>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

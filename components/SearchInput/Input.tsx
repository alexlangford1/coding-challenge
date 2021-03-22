import { TextField, Box, InputAdornment, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from "prop-types";


const styles = {
  input: {
    color: 'white',
  }
};

const Input = (props) => {
  const { classes } = props;
  return (
    <Box>
      <TextField
        label="Search by ID"
        variant="filled"
        color="primary"
        size="small"
        InputProps={{
          className: classes.input,
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Box>
  );
};

Input.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Input);

import {memo, useCallback} from 'react'
import Box from '@material-ui/core/Box'
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PropType from 'prop-types'
import { NATIONALITIES_HUMAN_NAME } from '../../constans/nationality';


const useStyles = makeStyles((theme) => createStyles({
    fieldsContainer: {
        "& > *:not(last-child)": {
            marginRight: theme.spacing(2)
        }
    },
    fildGender: {
        minWidth: 120
    },
    fildNationality: {
        minWidth: 120
    }
}))



export const ContactsFilters = memo(({filters, updateFilter, clearFilters}) => {
    const classes = useStyles()


    const handleChangeFilter = useCallback((event) => {
        updateFilter(event.target.name, event.target.value)
    }, [updateFilter])


    return (
    <Box display="flex" justifyContent="space-between" >
         <Box display="flex" className={classes.fieldsContainer} >
               <TextField
               name="fullname"
               label="fullname"
               value={filters.fullname}
               variant="outlined"
               onChange={handleChangeFilter}
               />
        <FormControl className={classes.fildGender} variant="outlined" >
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          label="Gender"
          value={filters.gender}
          onChange={handleChangeFilter}
          name="gender"
        >
            
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
        </FormControl>
        <FormControl className={classes.fildNationality} variant="outlined" >
        <InputLabel id="gender">Nationality</InputLabel>
        <Select
          labelId="nationality"
          label="nationality"
          value={filters.nationality}
          onChange={handleChangeFilter}
          name="nationality"
        >
          <MenuItem value="all">All</MenuItem>
          {Object.entries(NATIONALITIES_HUMAN_NAME).map(([key, name]) => (
              <MenuItem value={key} key={key}>
                  {name}
              </MenuItem>
          ))}
        </Select>
        </FormControl>
        </Box>
        <Button 
        variant="contained"
        startIcon={<DeleteIcon />}
        color="secondary"
        onClick={clearFilters}
        >
            Delete
        </Button>
    </Box>
    )

})


ContactsFilters.propTypes = {
    filters: PropType.object.isRequired,
    updateFilter: PropType.func.isRequired,
    clearFilters: PropType.func.isRequired,
}

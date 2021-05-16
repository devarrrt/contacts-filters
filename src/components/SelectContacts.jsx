import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
	field: {
		minWidth: 120
	}
})



const SelectContacts = ({ filters, onChangeValue }) => {
	const  styles = useStyles()
	

	return (
		<FormControl variant="outlined" className={ styles.field }>
			<InputLabel id="gender"> Gender </InputLabel>
			<Select
				labelId="gender"
				label="Gender"
				value={filters.gender}
				onChange={onChangeValue}
				name="gender"
			>
			<MenuItem value="All"> All	</MenuItem>
			<MenuItem value="male"> Male </MenuItem>
			<MenuItem value="female">	Female</MenuItem>
			</Select>
		</FormControl>
	)
}

export default SelectContacts

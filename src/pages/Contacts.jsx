import React, { useState, useEffect } from 'react'
import { Grid, Container, makeStyles, Typography, TextField, Button } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios'

import TableContact from '../components/TableContact'
import { usersDb } from '../db'
import SelectContacts from '../components/SelectContacts'



const useStyles = makeStyles({
	root: {
		marginTop: '50px'
	},
	headContainer: {
		marginBottom: '20px'
	},
	searchForm: {
		margin: '20px 0 20px 0',
		display: 'flex',
		alignItems: 'center'
	}
})


const defaultValue = {
	fullname: "",
	gender: "all"
}




const Contacts = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [filters, setFilters] = useState(defaultValue)
	const styles = useStyles()

	const onChangeValue = (e) => {
		setFilters( prev => ({
			...prev,
			[ e.target.name ] : e.target.value
	}))
	}


	
	useEffect(()=> {
	axios.get('https://randomuser.me/api/?results=100').then( res => setUsers(res.data.results))
	},[] )


const filteredData = users.filter( user  => user.name.first.toLowerCase().includes( filters.fullname.toLowerCase()) || user.name.last.toLowerCase().includes(filters.fullname.toLowerCase())).filter( u => {
	if ( filters.gender === 'all' ) {
		return true
 	} 
	 return u.gender === filters.gender
 })

const clearFilters = ( ) => {
	setFilters( defaultValue )
}



	if ( isLoading ) {
		return <p> Loading... </p>
	}
	
	return (
		<Container className={ styles.root }>

		<Grid container>

			<Grid item xs={ 12 } className={ styles.headContainer }> 
				<Typography variant="h3" conponent="h4">
					Contacts
				</Typography>
			</Grid>	
			{/*  */}
			<Grid item xs={ 12 } className={ styles.searchForm }> 
				<TextField 
				id="fullname" 
				name="fullname"
				label="Enter name..." 
				variant="outlined" 
				value={ filters.fullname }
				onChange={ onChangeValue }
				/>
				<SelectContacts filters={ filters } onChangeValue={ onChangeValue } />

				<Button 
				onClick={ clearFilters }
				size="large" startIcon={ <ClearIcon/> }> Clear </Button>

			</Grid>	
			{/*  */}
			<Grid item xs={ 12 }> 
			<TableContact users={filteredData}  />
			</Grid>	


	</Grid>
</Container>
	)
}

export default Contacts








// //https://randomuser.me/api/?results=100
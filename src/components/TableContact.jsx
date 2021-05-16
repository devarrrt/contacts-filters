import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';

import CopyText from './CopyText'


const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
})

const TableContact = ({ users }) => {
	const styles = useStyles()


	return (
		<TableContainer component={Paper}>
			<Table className={styles.table} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell> Avatar </TableCell>
						<TableCell> Fullname </TableCell>
						<TableCell> Age </TableCell>
						<TableCell> Email </TableCell>
						<TableCell> Phone </TableCell>
						<TableCell> Location </TableCell>
						<TableCell> Nationality </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user) => (

						<TableRow key={user.login.uuid}>
							<TableCell component="th">
								<Avatar src={user.picture.thumbnail} />
							</TableCell>
							<TableCell> {user.name.first}  {user.name.last} </TableCell>
							<TableCell>{user.dob.age} y.o. </TableCell>

							<TableCell>
								<CopyText text={user.email}> {user.email} </CopyText>
							</TableCell>
							<TableCell>
								<CopyText text={user.phone}> {user.phone} </CopyText>
							</TableCell>

							<TableCell align="center">{user.location.city} {user.location.country} </TableCell>
							<TableCell align="center">{user.nat} </TableCell>
						</TableRow>

					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
export default TableContact



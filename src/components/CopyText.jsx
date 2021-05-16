import React, {  useState, useCallback } from 'react'
import { useCopyToClipboard } from 'react-use'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
import { Tooltip } from '@material-ui/core'


const useStyles = makeStyles({
	icon: {
		margin: "0 10px 0 0",
		cursor: "pointer"
	}
})



const CopyText = ({ text }) => {
	const styles = useStyles()
	const [, copyToClipboard] = useCopyToClipboard()
	const [stateCopy, setStateCopy] = useState("copy")

	const tooltipTitle = ( ) => {
		if ( stateCopy === 'copy' ){
			return 'Copy '
		} else if ( stateCopy === 'copied' ) {
			return 'Copied'
		} else return ""
	} 

	const onChangeStatusCopy = useCallback(()=> {
		copyToClipboard(text)
		setStateCopy('copied')
	}, [copyToClipboard, text] )



	return (
		<Tooltip title={ tooltipTitle() } placement="top" arrow>
			<Button display="flex" alignItems="center" onClick={ onChangeStatusCopy } onMouseLeave={ ()=> setStateCopy("copy")} >
				<FileCopyOutlinedIcon className={styles.icon} />
				{text}
			</Button>
		</Tooltip>
	)
}



export default CopyText


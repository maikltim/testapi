import React, {useState, useCallback} from "react"
import PropType from 'prop-types'
import {useCopyToClipboard} from 'react-use'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const useStyles = makeStyles((theme) => createStyles({
    root: {
        cursor: "pointer",
    },
    icon: {
        marginRight: theme.spacing(1)
    }
}))

const STATUS_COPY = {
    COPY: "copy",
    COPIED: "copied"
}

const TITLE_BY_STATUS = {
    [STATUS_COPY.COPY]: "Copy",
    [STATUS_COPY.COPIED]: "Copied",
}

export const CopyToClipboardText = ({text}) => {
    const classes = useStyles()
    const [, copyToClipboard] = useCopyToClipboard();
    const [statusCopy, setSatusCopy] = useState("copy");
    

    const onClickCopy = useCallback(() => {
        copyToClipboard(text)
        setSatusCopy(STATUS_COPY.COPIED)
    }, [copyToClipboard, text])

    const onClickAway = useCallback(() => {
        setSatusCopy(STATUS_COPY.COPY)
    }, [setSatusCopy])

    return (
        <ClickAwayListener onClickAway={onClickAway}>
        <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top" arrow>
        <Button
         display="flex" 
         alignItems="center" 
         className={classes.root}
         onClick={onClickCopy}
         >
        <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
            {text}
        </Button>
        </Tooltip>
        </ClickAwayListener>
    )
}


CopyToClipboardText.propType = {
    text: PropType.string.isRequird
}
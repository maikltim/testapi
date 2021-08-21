import {useCallback, memo} from 'react'
import {DATA_VIEW_MODES} from '../constants'
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import PropType from 'prop-types'



export const ToggleDataViewMode = memo(({dataViewMode, setDataViewMode}) => {
    const handleChangeViewMode = useCallback((_, nextView) => {
        setDataViewMode(nextView);
        
      }, [setDataViewMode]);
    return (
        <ToggleButtonGroup value={dataViewMode} exclusive onChange={handleChangeViewMode}>
            <ToggleButton value={DATA_VIEW_MODES.TABLE} aria-label={DATA_VIEW_MODES.TABLE}>
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value={DATA_VIEW_MODES.GRID} aria-label={DATA_VIEW_MODES.GRID}>
                <ViewModuleIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}) 

ToggleDataViewMode.propType = {
    dataViewMode: PropType.oneOf([DATA_VIEW_MODES.TABLE, DATA_VIEW_MODES.GRID]).isRequired,
    setDataViewMode: PropType.func.isRequired
}
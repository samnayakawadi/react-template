import { useDispatch } from "react-redux"
import { bulkAddInstitutionsActions } from "./redux/bulkAddInstitutionsSlice.js"

const BulkAddInstitutionsHandlers = () => {

    // const feature_bulkAddInstitutionsState = useSelector(prevState => prevState.feature_bulkAddInstitutions)
    const dispatch = useDispatch()

    const selectExcelHandler = (e) => {
        const file = e.target.files[0]
        dispatch(bulkAddInstitutionsActions.selectFile(file))
        dispatch(bulkAddInstitutionsActions.updateCurrentComponent("selectExcel"))
    }


    const bulkAddInstitutionsHandlers = {
        selectExcelHandler
    }

    return bulkAddInstitutionsHandlers
}

export default BulkAddInstitutionsHandlers
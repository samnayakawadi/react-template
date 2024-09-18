import BulkAddInstitutionsHandlers from "../features/feature_bulkAddInstitutions/BulkAddInstitutionsHandlers.js"
import GlobalComponentHandlers from "./globalComponent/GlobalComponentHandlers.js"

const GlobalHandlers = () => {

    const globalComponentHandlers = GlobalComponentHandlers()
    const bulkAddInstitutionsHandlers = BulkAddInstitutionsHandlers()

    const globalHandlers = {
        globalComponentHandlers,
        bulkAddInstitutionsHandlers
    }

    return globalHandlers

}

export default GlobalHandlers
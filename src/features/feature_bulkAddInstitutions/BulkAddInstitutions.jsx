import { Button, Card, FlexBox } from "shivaji-ui"
import DownloadExcel from "./components/DownloadExcel.jsx"
import { useSelector } from "react-redux"
import GlobalHandlers from './../../global/GlobalHandlers';
import SelectExcel from "./components/SelectExcel.jsx";

const BulkAddInstitutions = () => {

    const feature_bulkAddInstitutionsState = useSelector(prevState => prevState.feature_bulkAddInstitutions)
    const globalHandlers = GlobalHandlers()

    console.log("feature_bulkAddInstitutionsState", feature_bulkAddInstitutionsState)

    return (
        <FlexBox direction="col" gap="2" justify="center" align="center" otherClasses="w-full h-full">
            <Card color="info" otherClasses="w-full">
                <FlexBox direction="row" justify="evenly">
                    <FlexBox direction="row" gap="2" justify="start" otherClasses="w-full">
                        <a href={feature_bulkAddInstitutionsState.downloadExcelTemplatePath}>
                            <Button backgroundColor="success" fontAwesomeIcon="fa-solid fa-circle-down">Download Sample Excel</Button>
                        </a>
                        <input type="file" onChange={globalHandlers.bulkAddInstitutionsHandlers.selectExcelHandler} className="file-input file-input-bordered file-input-secondary w-full max-w-xs h-full" />
                        <Button fontAwesomeIcon="fa-regular fa-folder-open" isDisabled={!feature_bulkAddInstitutionsState.selectExcel.isThisStepCompleted}>Extract Excel</Button>
                    </FlexBox>
                    <FlexBox direction="row" gap="2" justify="end" otherClasses="w-full">
                        <Button backgroundColor="success" fontAwesomeIcon="fa-solid fa-circle-chevron-up">Submit/Upload</Button>
                    </FlexBox>
                </FlexBox>
            </Card>
            <Card color="info" otherClasses="w-full h-full">
                {feature_bulkAddInstitutionsState.currentComponent === "downloadExcel" && <DownloadExcel />}
                {feature_bulkAddInstitutionsState.currentComponent === "selectExcel" && <SelectExcel />}
            </Card>
        </FlexBox>
    )
}

export default BulkAddInstitutions
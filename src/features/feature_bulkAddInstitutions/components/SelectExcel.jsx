import { useSelector } from "react-redux"
import { FlexBox } from "shivaji-ui"

const SelectExcel = () => {

    const feature_bulkAddInstitutions = useSelector(prevState => prevState.feature_bulkAddInstitutions)

    return (
        <FlexBox gap="3" direction="col" justify="center" align="center" otherClasses="w-full h-full">
            <i className="fa-solid fa-circle-check text-6xl text-green-600"></i>
            <span>File Selected Successfully</span>
            <span>File Name <strong>{`${feature_bulkAddInstitutions.selectExcel.selectedExcelFile.name}`}</strong></span>
            <span>File Type <strong className={`${feature_bulkAddInstitutions.selectExcel.isValidFileType ? "text-green-600" : "text-red-600"}`}>{`${feature_bulkAddInstitutions.selectExcel.selectedExcelFile.type}`}</strong>{!feature_bulkAddInstitutions.selectExcel.isValidFileType && <span className="italic"> {"[Invalid File]"}</span>}</span>
            <span>File Size <strong>{`${feature_bulkAddInstitutions.selectExcel.selectedExcelFile.size / 1024} KB`}</strong></span>
            <span>File Last Modified <strong>{`${feature_bulkAddInstitutions.selectExcel.selectedExcelFile.lastModifiedDate}`}</strong></span>
            {/* <span>Click on <strong>{`"Extract Excel"`}</strong> to Extract and View Excel Content</span> */}
        </FlexBox>
    )
}

export default SelectExcel
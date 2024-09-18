import { FlexBox } from "shivaji-ui"

const DownloadExcel = () => {
    return (
        <FlexBox gap="3" direction="col" justify="center" align="center" otherClasses="w-full h-full">
            <i className="fa-solid fa-circle-down text-6xl text-gray-400"></i>
            <span>Download Excel by clicking on <strong>{`"Download Sample Excel"`}</strong></span>
            <span>Fill all the data according to columns</span>
            <span>Click on <strong>{`"Select Excel"`}</strong> to Select the excel</span>
            <span>Click on <strong>{`"Extract Excel"`}</strong> to Extract and View Excel Content</span>
        </FlexBox>
    )
}

export default DownloadExcel
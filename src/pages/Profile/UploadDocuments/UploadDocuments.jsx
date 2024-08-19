import React from 'react'

const UploadDocuments = () => {
  return (
    <>
         <div className="text-center m-5 table-container">
        <table class="table table-bordered " style={{border:"1px"}}>
          <tbody>
            <tr>
            <th scope="col">S.no</th>
            <th scope="col">Application No.</th>
            <th scope="col">Submitted Application</th>
            <th scope="col">Application Status</th>
            <th scope="col">Admit card status</th>
            <th scope="col">Download Admit card</th>
            <th scope="col">Interview date</th>
            <th scope="col">Interview Feedback</th>
            <th scope="col">Selection Letter</th>
            <th scope="col">Confirmation Letter</th>
            <th scope="col">Upload documents</th>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>xxxxxxxxxx</td>
              <td>21/06/2024</td>
              <td>Approved badge-Icon</td>
              <td>Generated</td>
              <td>Download</td>
              <td>xx/xx/xxxx</td>
              <td>Selected</td>
              <td>Download</td>
              <td>Pending</td>
              <td>Upload docx ^</td>
              {/* <td colspan="2">Larry the Bird</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UploadDocuments

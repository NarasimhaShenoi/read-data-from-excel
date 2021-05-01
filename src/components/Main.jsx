import React from 'react'
import readXlsxFile from 'read-excel-file';

const readExcel = () => {
    readXlsxFile('data.xlsx').then((rows) => {
        console.log(rows);
    })
}

function Main() {
    return (
        <div>
            {readExcel()}
        </div>
    )
}

export default Main;

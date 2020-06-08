import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Viewer from '../Viewer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from './Upload.styles'

const Upload = (props) => {
  const [pdf, setPdf] = useState()
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles[0].type === 'application/pdf') {
      setPdf(URL.createObjectURL(acceptedFiles[0]))
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  if (pdf) {
    return <Viewer pdf={pdf} />
  }
  return (
    <Wrapper {...getRootProps()}>
      <p><FontAwesomeIcon icon={faFileUpload}/></p>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p className="text" >Drop the files here ...</p> :
          <p className="text">Drag 'n' drop some files here, or click to select files</p>
      }
    </Wrapper>
  )
}

export default Upload

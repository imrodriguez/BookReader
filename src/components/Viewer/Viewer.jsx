import React, { useState, useEffect, useRef } from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
import { Wrapper, Options } from './Viewer.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight,faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as faMoon2 } from '@fortawesome/free-regular-svg-icons'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


export default (props) => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotal] = useState()
  const [size, setSize] = useState()
  const [invert, setInvert] = useState(false)
  const wrapper = useRef()

  useEffect(() => {
    setSize(wrapper.current.offsetWidth - 20)
    window.addEventListener('resize', () => { setSize(wrapper.current.offsetWidth - 20) })
  }, [wrapper])

  const onDocumentLoadSuccess = ({ numPages }) => {
    setTotal(numPages)
  }

  const nextPage = () => {
    if (page !== totalPages) {
      setPage(page + 1)
    }
  }

  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }

  const nightMode = () => {
    setInvert(invert ? false : true)
  }

  return (
    <Wrapper ref={wrapper} invert={invert}>
      <Document
        onLoadSuccess={onDocumentLoadSuccess}
        file={props.pdf}
      >
        <Page renderAnnotationLayer={false} pageNumber={page} width={size} />
      </Document>
      <Options>
        <button onClick={previousPage}><FontAwesomeIcon icon={faChevronLeft}/></button>
        <p>{page}/{totalPages}</p>
        <button onClick={nightMode}>
          {invert 
          ? <FontAwesomeIcon icon={faMoon2}/>
          : <FontAwesomeIcon icon={faMoon}/>
          }
          </button>
        <button onClick={nextPage}><FontAwesomeIcon icon={faChevronRight}/></button>
      </Options>
    </Wrapper>
  )
} 
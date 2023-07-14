import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Spinner from 'react-bootstrap/Spinner';
const Loader = () => {
  return (
    <div style={{margin:'200px'}}>
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Getting Products...
      </Button>
    </div>
  )
}

export default Loader
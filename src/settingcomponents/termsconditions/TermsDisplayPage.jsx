import React, {useState} from 'react'

function TermsDisplayPage() {
  const [value, setValue] = useState();

  return (
    <div>
            {/* Need to inject data rich text editor content here */}
            {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
    </div>
  )
}

export default TermsDisplayPage
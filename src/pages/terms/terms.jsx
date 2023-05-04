import React from 'react'
import './terms.css'

const Terms = () => {
  return (
    <div id='terms-container'>
      <h2>Terms and Conditions</h2>
      <hr/>
      <p>
        The following disclaimer applies to <strong>Lungchuingam Riammei's</strong> personal portfolio website:
      </p>
      <p>
        <strong>Accuracy of Information:</strong> 
         While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
      </p>
      <p>
       <strong>Intellectual Property:</strong> All content and intellectual property rights on this website, including but not limited to images, logos, text, videos, and other materials, are owned by <strong>Lungchuingam Riammei</strong>. You may not reproduce, copy, distribute, or use any of the content on this website without our prior written permission.
      </p>
      <p>
        <strong>External Links:</strong>This website may contain links to external websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
      </p>

      <p>  
       <strong>No Professional Advice:</strong> The information provided on this website is for general informational purposes only and is not intended as professional advice. You should not rely on any information on this website as a substitute for professional advice. If you require professional advice, please consult a qualified professional in the relevant field.
      </p>
      <p>
        <strong>Changes to the Website:</strong >We reserve the right to modify or withdraw, temporarily or permanently, the website (or any part of it) with or without notice to you. We shall not be liable to you or any third party for any such modification or withdrawal of the website.
      </p>
      <p>
       By accessing and using this website, you agree to be bound by the terms of this disclaimer. If you do not agree with any of the terms in this disclaimer, please do not use this website.
      </p>
      <input type="checkbox" id="check" />
      <span>I agree to the above terms and conditions.</span>
    </div>
  )
}

export default Terms

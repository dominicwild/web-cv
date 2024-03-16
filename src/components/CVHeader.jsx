import "../scss/cv-header.scss"
import EmailIcon from "./icons/EmailIcon"
import LocationIcon from "./icons/LocationIcon"
import PhoneIcon from "./icons/PhoneIcon"
import WebsiteIcon from "./icons/WebsiteIcon"

function CVHeader(){

return (
    <div className="cv-header">
        <h1 className="name">Dominic Wild</h1>
        <h2 className="statement">Lancaster University Graduate - Seeking to grow as a software developer</h2>
        <div className="contact-info">
            <div className="contact">
                <div className='contact-icon'>
                    <PhoneIcon />
                </div>
                <div className='contact-detail'>07403532968</div>
            </div>
            <div className="contact">
                <div className='contact-icon'>
                     <LocationIcon />
                </div>
                <div className='contact-detail'>
                    Preston
                </div>
            </div>
            <div className="contact">
                <div className='contact-icon'>
                     <EmailIcon />
                </div>
                <div className='contact-detail'>
                    dominic55555@hotmail.com
                </div>
            </div>
            {/* <div className="contact">
                <div className='contact-icon'>
                     <WebsiteIcon />
                </div>
                <div className='contact-detail'>
                    www.dominicwild.com
                </div>
            </div> */}
        </div>
  </div>
)

}

export default CVHeader
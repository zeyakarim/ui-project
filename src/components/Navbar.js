import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faDrop} from '@fortawesome/free-regular-svg-icons';
import {faCircleArrowLeft, faCirclePlus} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    return (
      <div className="navbar">
        <div style={{display:'flex'}}>
          <div className="listbox1">
              <div>
                <FontAwesomeIcon 
                    icon={faCircleArrowLeft} 
                    style={{fontSize: '25px',
                            padding: '2px 0px',
                            color:'#517BC3'
                        }}
                />
              </div>
              <div className="back">
                  <p>BACK</p>
              </div>
          </div>

          <div className="listbox2">
            <div className="listItem">
              <p className="highlight">B2C</p>
            </div>
            <div className="listItem">
              <p>B2B Tax</p>
            </div>
            <div className="listItem">
              <p>B2B Supply</p>
            </div>
          </div>

          <div className="listbox3">
            <div>
              <p>Manual</p>
            </div>
            <div style={{marginTop:'10px'}}>
              <FontAwesomeIcon 
                    icon={faCirclePlus} 
                    style={{fontSize: '25px',
                            padding: '2px 0px',
                            color:'#517BC3'
                        }}
                />
            </div>
          </div>
          
        </div>
        <div>
          <p>Bill Documentation</p>
        </div>
      </div>
    );
  }
  
  export default Navbar;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aside from "./Aside";
import {
    faCirclePlus, 
    faExternalLink, 
    faSquareCheck, 
    faCircleQuestion,
    faMicrochip,
    faEye,
    faFileExcel,
    faPrint,
    faEnvelope,
    faMobileScreenButton,
    faXmark
} from '@fortawesome/free-solid-svg-icons';


function MainContainer(){
    return(
        <div>
            <div className="main">
                <div className="mainContainer">
                    <div className="container">
                        <div className="contentbox">
                            <p>Unit Mapped</p>
                            <p>2 / 725</p>
                        </div>
                        <div className="contentbox">
                            <p>Active Charges</p>
                            <p>7/7</p>
                        </div>
                        <div className="contentbox">
                            <p>Reading</p>
                            <p>- / 2</p>
                        </div>
                    </div>

                    <div className="billing">
                        <div className="billingContainer">
                            <div className="box1">
                                <div>
                                    <h4 style={{margin:'0'}}>Billing cycle *</h4>
                                </div>
                                <div className="icon">
                                    <div>
                                        <FontAwesomeIcon 
                                            icon={faExternalLink} 
                                            style={{fontSize: '22px',
                                                padding: '2px 0px',
                                                color:'#517BC3'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <FontAwesomeIcon 
                                            icon={faCirclePlus} 
                                            style={{fontSize: '22px',
                                                padding: '2px 0px',
                                                color:'#517BC3'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="box2">
                                <select>
                                    <option>Nov-21-B2C | B2C</option>
                                    <option>Jan-22-B2C | B2C</option>
                                    <option>Feb-21-B2C | B2C</option>
                                    <option>Apr-21-B2C | B2C</option>
                                </select>
                            </div>
                            <div className="box3">
                                <div>
                                    <h3 style={{margin:'3px 0' }}>Billing cycle is active</h3>
                                    <div>
                                        <FontAwesomeIcon 
                                            icon={faSquareCheck} 
                                            style={{fontSize: '22px',
                                                padding: '6px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="billingContainer">
                            <div className="box1">
                                <div>
                                    <h4 style={{margin:'0px 0px 5px'}}>Cluster *</h4>
                                </div>
                            </div>

                            <div className="box2">
                                <select>
                                    <option>AMN</option>
                                    <option>BNC</option>
                                    <option>LDA</option>
                                    <option>GFA</option>
                                </select>
                                <div>
                                    <FontAwesomeIcon 
                                        icon={faXmark} 
                                        style={{fontSize: '16px',
                                            padding: '10px',
                                            color:'black',
                                            backgroundColor:'lightgray'
                                        
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="billing">
                        <div className="billingContainer">
                            <div className="box1">
                                <div>
                                    <h4 style={{margin:'0'}}>Tower</h4>
                                </div>
                            </div>

                            <div className="box2">
                                <select>
                                    <option>Select Tower</option>
                                    <option>Relaince</option>
                                    <option>Airtel</option>
                                    <option>Bsnl</option>
                                </select>
                                <div>
                                    <FontAwesomeIcon 
                                        icon={faXmark} 
                                        style={{fontSize: '16px',
                                            padding: '10px',
                                            color:'black',
                                            backgroundColor:'lightgray'
                                        
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="billingContainer">
                            <div className="box1">
                                <div>
                                    <h4 style={{margin:'0'}}>Unit</h4>
                                </div>
                            </div>

                            <div className="box2">
                                <select>
                                    <option>AMN0020905 - Lokendra Kumar Sharma</option>
                                    <option>BNC0030105 - Trilok Kumar</option>
                                    <option>LDA0010910 - Abhay Raj </option>
                                    <option>GFA0033505 - Divendra Kumar Sharma</option>
                                </select>
                                <div>
                                    <FontAwesomeIcon 
                                        icon={faXmark} 
                                        style={{fontSize: '16px',
                                            padding: '10px',
                                            color:'black',
                                            backgroundColor:'lightgray'
                                        
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="billing">
                        <div className="inputContainer">
                            <input placeholder="Remarks"/>
                        </div>
                    </div>

                    <div className="checkbox">
                        <div>
                            <input type='checkbox' placeholder="Remarks"/>
                        </div> 
                        <div>
                            <h5>Provisional Bill</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon 
                                icon={faCircleQuestion} 
                                style={{
                                    padding: '4px',
                                }}
                            />
                        </div> 
                    </div>
                </div>
                
                <div className="aside">
                    < Aside />
                </div>
            </div>

            <div className="generateBillContainer">
                <div className="generatebill">
                    <div className="generate">
                        <div>
                            <FontAwesomeIcon 
                                icon={faMicrochip} 
                                style={{fontSize: '16px',
                                    padding: '4px 0px'
                                }}
                            />
                        </div>
                        <div>
                            <p>Generate</p>
                        </div>
                    </div>

                    <div className="preview">
                        <div>
                            <FontAwesomeIcon 
                                icon={faEye} 
                                style={{fontSize: '16px',
                                    padding: '4px 0px'
                                }}
                            />
                        </div>
                        <div> 
                            <p>Preview</p>
                        </div>
                    </div>

                    <div className="file">
                        <div>
                            <FontAwesomeIcon 
                                icon={faFileExcel} 
                                style={{fontSize: '16px',
                                    padding: '4px 0px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="print">
                        <div>
                            <FontAwesomeIcon 
                                icon={faPrint} 
                                style={{fontSize: '16px',
                                    padding: '4px 0px'
                                }}
                            />
                        </div>
                        <div>
                            <p>Print</p>
                        </div>
                    </div>

                    <div className="file">
                        <div>
                            <FontAwesomeIcon 
                                icon={faFileExcel} 
                                style={{fontSize: '16px',
                                    padding: '4px 0px'
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="generatebill2">
                    <div className="envelop">
                        <div>
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                                style={{fontSize: '16px',
                                    padding: '4px 6px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="previewEye">
                        <div>
                            <FontAwesomeIcon 
                                icon={faEye} 
                                style={{fontSize: '16px',
                                    padding: '4px 6px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="print change">
                        <div>
                            <FontAwesomeIcon 
                                icon={faPrint} 
                                style={{fontSize: '16px',
                                    padding: '4px 6px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="file mobile">
                        <div>
                            <FontAwesomeIcon 
                                icon={faMobileScreenButton} 
                                style={{fontSize: '16px',
                                    padding: '3px 0px'
                                }}
                            />
                        </div>
                        <div>
                            <p>SMS</p>
                        </div>
                    </div>

                    <div className="file">
                        <div>
                            <FontAwesomeIcon 
                                icon={faFileExcel} 
                                style={{fontSize: '16px',
                                    padding: '4px 6px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="previewEye">
                        <div>
                            <FontAwesomeIcon 
                                icon={faEye} 
                                style={{fontSize: '16px',
                                    padding: '4px 6px'
                                }}
                            />
                        </div>
                    </div>
                </div> 
            </div>               
        </div>
    );
}


export default MainContainer;
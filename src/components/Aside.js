function Aside(){
    return(
        <div className="asideContainer">
            <div className="header">
                <p>Billing Cycle</p>
            </div>
            <div className="asideboxes">
                <div className="asideBox">
                    <h4>Billing period FROM | To </h4>
                    <p>01 Nov 2021 | 30 Nov 2021</p>
                </div>

                <div className="asideBox">
                    <h4>Bill due date </h4>
                    <p>01 Jan 2022 | 01 Jan 2022</p>
                </div>

                <div className="asideBox">
                    <h4>Consider payment To </h4>
                    <p>30 Nov 2021</p>
                </div>

                <div className="asideBox">
                    <h4>Consider meter reading FROM | To </h4>
                    <p>01 Nov 2021 | 30 Nov 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Aside;
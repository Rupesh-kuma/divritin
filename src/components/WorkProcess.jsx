const WorkProcess = () => {
    return (
        <>


            <section className="work-process-wrapper clinet_bg">
                <div className="container-fluid px-lg-5 px-sm-1">
                <div className='sub_title mx-5 px-5'>
                    <span>Our Work Process</span>
                    <h3>How We Transform Ideas Into Reality</h3>
                    <p>
                        With years of experience in the industry, we follow a proven methodology to deliver exceptional digital solutions that drive business growth and ensure your success in the digital landscape.
                    </p>
                </div>
                {/* Process Steps */}
                <div className="process-steps position-relative py-5">
                    {/* Connecting Line */}
                    <div className="connecting-line" />
                    <div className="row g-4">
                        {/* Step 1: Discovery */}
                        <div className="col-lg-3 col-md-6">
                            <div className="step-card position-relative">
                                <div className="step-number">01</div>
                                <div className="step-icon-container">
                                    <i className="fas fa-lightbulb" />
                                </div>
                                <h3 className="step-title">Discovery &amp; Planning</h3>
                                <p className="step-description">
                                    We analyze your business goals, target audience, and market to
                                    create a comprehensive strategy.
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">Research</span>
                                    <span className="feature-tag">Analysis</span>
                                    <span className="feature-tag">Strategy</span>
                                </div>
                                <i className="fas fa-arrow-right arrow-connector" />
                            </div>
                        </div>
                        {/* Step 2: Design */}
                        <div className="col-lg-3 col-md-6">
                            <div className="step-card position-relative">
                                <div className="step-number">02</div>
                                <div className="step-icon-container">
                                    <i className="fas fa-pencil-ruler" />
                                </div>
                                <h3 className="step-title">Design &amp; Prototype</h3>
                                <p className="step-description">
                                    Our creative team designs stunning interfaces with user experience
                                    at the forefront.
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">UI/UX</span>
                                    <span className="feature-tag">Wireframes</span>
                                    <span className="feature-tag">Mockups</span>
                                </div>
                                <i className="fas fa-arrow-right arrow-connector" />
                            </div>
                        </div>
                        {/* Step 3: Development */}
                        <div className="col-lg-3 col-md-6">
                            <div className="step-card position-relative">
                                <div className="step-number">03</div>
                                <div className="step-icon-container">
                                    <i className="fas fa-code" />
                                </div>
                                <h3 className="step-title">Development &amp; Testing</h3>
                                <p className="step-description">
                                    We build robust solutions using cutting-edge technologies and
                                    rigorous testing protocols.
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">Coding</span>
                                    <span className="feature-tag">Testing</span>
                                    <span className="feature-tag">QA</span>
                                </div>
                                <i className="fas fa-arrow-right arrow-connector" />
                            </div>
                        </div>
                        {/* Step 4: Launch */}
                        <div className="col-lg-3 col-md-6">
                            <div className="step-card position-relative">
                                <div className="step-number">04</div>
                                <div className="step-icon-container">
                                    <i className="fas fa-rocket" />
                                </div>
                                <h3 className="step-title">Launch &amp; Support</h3>
                                <p className="step-description">
                                    We deploy seamlessly and provide ongoing support to ensure
                                    continued success.
                                </p>
                                <div className="step-features">
                                    <span className="feature-tag">Deploy</span>
                                    <span className="feature-tag">Monitor</span>
                                    <span className="feature-tag">Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CTA Button */}
                <div className="d-flex justify-content-center">
                    <a href="#" className="service_cta_button mb-4">
                        Start Your Project Today
                        <i className="fas fa-arrow-right" />
                    </a>
                    </div>
                </div>
            </section >

        </>
    )
}
export default WorkProcess;
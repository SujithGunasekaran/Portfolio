import { myInfo } from '../Information/myInfo';
export default function Contact() {
    const { Contact } = myInfo;
    return (
        <div>
            <div className="contact-container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                        <div className="contact-heading">{Contact.ContactHeading}</div>
                        <div className="contact-heading-line"></div>
                    </div>
                    <div className="contact-detail-container">
                        <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <div className="col-md-4">
                                <div className="contact-detail-display">
                                    <div className="contact-detail-info-display">
                                        <div className="contact-detail-info-heading">{Contact.ContactPhoneHeading}</div>
                                        <div className="contact-detail-info">{Contact.ContactPhoneInfo}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-detail-display">
                                    <div className="contact-detail-info-display">
                                        <div className="contact-detail-info-heading">{Contact.ContactAddressHeading}</div>
                                        <div className="contact-detail-info">{Contact.ContactAddressInfo}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-detail-display">
                                    <div className="contact-detail-info-display">
                                        <div className="contact-detail-info-heading">{Contact.ContactEmailHeading}</div>
                                        <div className="contact-detail-info">{Contact.ContactEmailInfo}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

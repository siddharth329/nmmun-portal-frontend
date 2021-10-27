import {useEffect, useState} from "react";

import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import {ReactComponent as AccordianPlusIconSVG} from "../../assets/icons/accordianplusicon.svg";
import {ReactComponent as AccordianCrossIconSVG} from "../../assets/icons/accordiancrossicon.svg";
import './support.styles.scss';

const FAQS = [
    {
        id: 1,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
        id: 2,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
        id: 3,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },{
        id: 4,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },{
        id: 5,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },{
        id: 6,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },{
        id: 7,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },{
        id: 8,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },{
        id: 9,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },{
        id: 10,
        question: 'What is my role?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    }
]

const SupportPage = () => {
    const [faqOpened, setFaqOpened] = useState(null);
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        setFaqs(FAQS);
    }, []);

    return (
        <div className='supportpage'>
            <HeaderNavComponent title='Help & Support'/>
            <div className="supportpage__content">
                <div className="supportpage__heading">
                    We’re here to help you with anything and everything on NMMUN.
                </div>
                <div className="supportpage__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                </div>
            </div>

            <div className="supportpage__faqcontent">
                <div className="faqs">
                    <div className="faqs__head">FAQ</div>
                    <div className="faqs__content">
                        {faqs.map(faq => (
                            <div className="faq" key={faq.id}>
                                <div
                                    className="faq__head"
                                    onClick={() => faqOpened === faq.id ? setFaqOpened(null) : setFaqOpened(faq.id)}
                                >
                                    <div className="faq__question">{faq.question}</div>
                                    {faqOpened === faq.id ? <AccordianCrossIconSVG/> : <AccordianPlusIconSVG/>}
                                </div>
                                <div className={`faq__answer ${faqOpened === faq.id && 'faq__opened'}`}>{faq.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{height: `122px`}}>&nbsp;</div>
            <div className="supportpage__helpbox" id='supportbox'>
                <div className="supportpage__helpbox-text">Still stuck? Help is a mail away.</div>
                <a href='mailto:help@nmmun.in' className="supportpage__cta">Send a message</a>
                <a href='mailto:help@nmmunportal.in' className="supportpage__cta-mini">Trouble using application?</a>
            </div>
        </div>
    )
}

export default SupportPage;
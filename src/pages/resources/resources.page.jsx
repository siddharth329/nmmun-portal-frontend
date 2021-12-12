import {format} from "date-fns";
import {motion} from "framer-motion";

import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import {ReactComponent as PDFIconSVG} from '../../assets/icons/pdficon.svg';
import './resources.styles.scss';

const dateGenerator = dateobj => format(dateobj, 'do MMM, yyyy');

const studyMaterial = [
    {name: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {name: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {name: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {name: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {name: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {name: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'}
]

const ResourcesPage = () => {
    return (
        <motion.div
            className="resourcespage"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.7}}
        >
            <HeaderNavComponent title='Resources'/>

            <div className="resourcepage__content">
                {studyMaterial.map((data, index) => (
                    <motion.a
                        href={data.link}
                        target='_blank'
                        className="resource"
                        key={index}
                        rel='noreferrer'

                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: (index + 1) * 0.1}}
                    >
                        <PDFIconSVG />
                        <div className="resource__content">
                            <div className="resource__title">{data.name}</div>
                            <div className="resource__info">
                                <span className="resource__type">{data.type}</span>
                                <span className="resource__date">{dateGenerator(data.date)}</span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.div>
    )
}

export default ResourcesPage;
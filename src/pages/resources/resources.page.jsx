import {format} from "date-fns";

import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import {ReactComponent as PDFIconSVG} from '../../assets/icons/pdficon.svg';
import './resources.styles.scss';

const dateGenerator = dateobj => format(dateobj, 'do MMM, yyyy');

const studyMaterial = [
    {title: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {title: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {title: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {title: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {title: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'},
    {title: 'SOCHUM Study Guide', type: 'PDF', date: new Date(Date.now()), link: 'https://a.com'}
]

const ResourcesPage = () => {
    return (
        <div className="resourcespage">
            <HeaderNavComponent title='Resources'/>

            <div className="resourcepage__content">
                {studyMaterial.map((data, index) => (
                    <a href={data.link} target='_blank' className="resource" key={index} rel='noreferrer'>
                        <PDFIconSVG />
                        <div className="resource__content">
                            <div className="resource__title">{data.title}</div>
                            <div className="resource__info">
                                <span className="resource__type">{data.type}</span>
                                <span className="resource__date">{dateGenerator(data.date)}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ResourcesPage;
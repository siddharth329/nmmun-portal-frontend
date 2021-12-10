import {Component} from "react";
import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import './details.styles.scss';

// import image from '../../assets/images/tempavatar.png'
let image = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80'
const TEMP_TEAM_DETAILS = [
    {id: 1, category: 'SECRETARIAT', position: 'Secretary General', name: 'Nandini Shenai', image: '', description: 'With a deeply rooted interest in International relations, diplomacy and gender studies, Nandini is skilled in research and negotiation. She comes with an experience of over 50 MUNs and a never say never attitude.'},
    {id: 2, category: 'SECRETARIAT', position: 'Secretary General', name: 'Nandini Shenai', image: '', description: 'With a deeply rooted interest in International relations, diplomacy and gender studies, Nandini is skilled in research and negotiation. She comes with an experience of over 50 MUNs and a never say never attitude.'},
    {id: 3, category: 'SECRETARIAT', position: 'Secretary General', name: 'Nandini Shenai', image: '', description: 'With a deeply rooted interest in International relations, diplomacy and gender studies, Nandini is skilled in research and negotiation. She comes with an experience of over 50 MUNs and a never say never attitude.'},
    {id: 4, category: 'DIRECTORATE', position: 'Media & SMM', name: 'Akshar Bhayani', image: ''},
    {id: 5, category: 'DIRECTORATE', position: 'Media & SMM', name: 'Akshar Bhayani', image: ''},
    {id: 6, category: 'DIRECTORATE', position: 'Media & SMM', name: 'Akshar Bhayani', image: ''},
    {id: 7, category: 'DIRECTORATE', position: 'Media & SMM', name: 'Akshar Bhayani', image: ''},
    {id: 8, category: 'DIRECTORATE', position: 'Media & SMM', name: 'Akshar Bhayani', image: ''},
    {id: 9, category: 'DIRECTORATE', position: 'Media & SMM', name: 'Akshar Bhayani', image: ''},
    {id: 10, category: 'DIRECTORATE', position: 'Media & SMM', name: 'Akshar Bhayani', image: ''}
]
TEMP_TEAM_DETAILS.forEach(t => TEMP_TEAM_DETAILS[t.id - 1].image = image)

class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {members: TEMP_TEAM_DETAILS}
    }


    generateSecretariatComponent = (members) => {
        return (
            <div className="secretariat">
                <div className="secretariat__head">SECRETARIAT</div>
                <div className="secretariat__content">
                    {members.map(member => (
                        <div className="secretariatcard">
                            <div className="secretariatcard__header">
                                <div
                                    className="secretariatcard__avatar-box"
                                    style={{backgroundImage: `url(${member.image})`}}
                                >
                                    &nbsp;
                                </div>
                                <div className="secretariatcard__detail">
                                    <div className="secretariatcard__position">{member.position}</div>
                                    <div className="secretariatcard__name">{member.name}</div>
                                </div>
                            </div>
                            <div className="secretariatcard__content">
                                {member.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    generateRegularComponent = (head, members) => {
        return (
            <div className="detailcards">
                <div className="detailcards__head">{head}</div>
                <div className="detailcards__content">
                    {members.map(member => (
                        <div
                            className="detailcards__image"
                            style={{backgroundImage: `url(${member.image})`}}
                        >
                            &nbsp;
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    generateTeamDetails = () => {
        const obj = {}
        this.state.members.forEach(member => {
            if (obj[member.category]) {
                obj[member.category].push(member)
            } else {
                obj[member.category] = [member]
            }
        })

        const detailsRendered = []

        if (obj['SECRETARIAT']) {
            detailsRendered.push(this.generateSecretariatComponent(obj['SECRETARIAT']))
            delete obj['SECRETARIAT']
        }

        if(Object.keys(obj)) {
            Object.keys(obj).forEach(key => {
                detailsRendered.push(this.generateRegularComponent(key, obj[key]))
            })
        }

        return detailsRendered
    }

    render() {
        return (
            <div className='detailspage'>
                <HeaderNavComponent title='Details'/>

                <div className="detailspage__content">
                    {this.generateTeamDetails()}
                </div>
            </div>
        )
    }
}

export default DetailsPage;
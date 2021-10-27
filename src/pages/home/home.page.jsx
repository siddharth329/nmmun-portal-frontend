import {Component} from "react";
import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import {Link} from "react-router-dom";

import {ReactComponent as GalleryMoreIconSVG} from '../../assets/icons/gallerymoreicon.svg';
import './home.styles.scss';


const TEMP_IMAGES = [
    {id: 1, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 2, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 3, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 4, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 5, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 6, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 7, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 8, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 9, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 10, year: 2019, url: 'https://picsum.photos/200/300'},
    {id: 11, year: 2019, url: 'https://picsum.photos/200/300'},
    {id: 12, year: 2019, url: 'https://picsum.photos/200/300'}
]

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { galleryImages: TEMP_IMAGES }
    }

    render() {
        return (
            <div className='homepage'>
                <HeaderNavComponent title='Home'/>

                <div className="homepage__quicklinks">
                    <div className="homepage__quicklinks--head">Quick Links</div>
                    <ul className="homepage__quicklinks--links">
                        <li className="homepage__quicklinks--link"><Link to='/blog'>Blog</Link></li>
                        <li className="homepage__quicklinks--link"><Link to='/about'>About</Link></li>
                        <li className="homepage__quicklinks--link"><Link to='/committee'>Committee</Link></li>
                        <li className="homepage__quicklinks--link"><Link to='/details'>Team</Link></li>
                        <li className="homepage__quicklinks--link"><Link to='/resources'>Resources</Link></li>
                    </ul>
                </div>

                <div className="homepage__gallery">
                    <div className="homepage__gallery--head">
                        <div className="homepage__gallery--title">Gallery</div>
                        <Link to='/gallery' className="homepage__gallery--morebtn">
                            <span>more</span> <GalleryMoreIconSVG />
                        </Link>
                    </div>
                    <div className="homepage__gallery--images">
                        {this.state.galleryImages.map(image => (
                            <div
                                key={image.id}
                                className="homepage__gallery--image"
                                style={{backgroundImage: `url(${image.url})`}}
                            >
                                &nbsp;
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
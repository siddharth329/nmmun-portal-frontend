import React, {Component, Fragment} from "react";
import axios from 'axios';
import LoaderComponent from "../../components/loader/loader.component";
import HeaderNavComponent from "../../components/header-nav/header-nav.component";

import './gallery.styles.scss';

const TEMP_IMAGES = [
    {id: 15, year: 2019, url: 'https://picsum.photos/200/300'},
    {id: 1, year: 2020, url: 'https://picsum.photos/300/300'},
    {id: 2, year: 2020, url: 'https://picsum.photos/400/300'},
    {id: 3, year: 2020, url: 'https://picsum.photos/200/200'},
    {id: 4, year: 2020, url: 'https://picsum.photos/200/200'},
    {id: 5, year: 2020, url: 'https://picsum.photos/200/400'},
    {id: 6, year: 2020, url: 'https://picsum.photos/300/500'},
    {id: 7, year: 2020, url: 'https://picsum.photos/500/300'},
    {id: 8, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 9, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 16, year: 2020, url: 'https://picsum.photos/200/300'},
    {id: 10, year: 2019, url: 'https://picsum.photos/200/300'},
    {id: 11, year: 2019, url: 'https://picsum.photos/200/300'},
    {id: 12, year: 2019, url: 'https://picsum.photos/200/300'},
    {id: 13, year: 2019, url: 'https://picsum.photos/200/300'},
    {id: 14, year: 2019, url: 'https://picsum.photos/200/300'}
]

class GalleryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {images: TEMP_IMAGES, loading: true}
    }

    async componentDidMount() {
        const gallery = async () => {
            const response = await axios.get('https://tanejasiddharth.pythonanywhere.com/api/gallery/');
            this.setState({images: response.data, loading: false})
        }
        await gallery()
    }

    generateGalleryPattern = (imagesObj) => {
        const obj = {};
        imagesObj.forEach(image => {
            if (obj[`${image.year}`]) {
                obj[`${image.year}`].push(image)
            } else {
                obj[`${image.year}`] = [image]
            }
        })

        if (Object.keys(obj)) {
            return Object.keys(obj).reverse().map((key) => {
                const images = obj[key];
                const numToRemove = images.length % 6;
                const imagesForGrid = images.slice(0, images.length - numToRemove);

                const gridStyledReturnObj = [];
                for (let i = 0; i < imagesForGrid.length / 6; i++) {
                    gridStyledReturnObj.push(this.generateGalleryStyledGrid(images.slice(i, i + 6)))
                }

                gridStyledReturnObj.push(images.slice(images.length - numToRemove, images.length).map(image => (
                    <div
                        key={`galleryimage-${image.id}`}
                        className={`gallerygrid__image`}
                        style={{backgroundImage: `url(https://tanejasiddharth.pythonanywhere.com${image.url})`}}
                        onClick={() => window.open(image.url)}
                    >
                        &nbsp;
                    </div>
                )))

                return (
                    <div className='gallerygrid' key={`gallerygrid-${key}`}>
                        <div className="gallerygrid__year">{key}</div>
                        <div className="gallerygrid__content">{gridStyledReturnObj}</div>
                    </div>
                )
            });
        }

        return <LoaderComponent />
    }

    generateGalleryStyledGrid = (imageObj) => {
        return (
            <Fragment>
                {imageObj.map((image, index) => (
                    <div
                        key={`galleryimage-${image.id}`}
                        className={`gallerygrid__image gallerygrid__image--${index + 1}`}
                        style={{backgroundImage: `url(https://tanejasiddharth.pythonanywhere.com${image.url})`, backgroundPosition: 'center'}}
                        onClick={() => window.open(image.url)}
                    >
                        &nbsp;
                    </div>
                ))}
            </Fragment>
        )
    }

    render() {
        return (
            <div className="gallerypage">
                <HeaderNavComponent title='Gallery' />
                {this.state.loading ? (
                    <div>Loading</div>
                ) : this.generateGalleryPattern(this.state.images) }
            </div>
        )
    }
}

export default GalleryPage;
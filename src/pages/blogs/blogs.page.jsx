import HeaderNavComponent from "../../components/header-nav/header-nav.component";
import {format} from "date-fns";

import './blogs.styles.scss';

const TEMP_BLOGS = [
    {
        id: 0,
        name: 'Lorem Ipsum heading',
        published_at: new Date(Date.now()),
        image_cover: 'https://picsum.photos/300/200',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...'
    }
]

const BlogsPage = () => {
    return (
        <div className='blogspage'>
            <HeaderNavComponent title='Blogs' />

            <div className="blogspage__blogs">
                {TEMP_BLOGS.map(blog => (
                    <div className="blogcard">
                        <div
                            className="blogcard__image-box"
                            style={{backgroundImage: `url(${blog.image_cover})`}}
                        >
                            &nbsp;{/*<img src={blog.image_cover} alt={blog.name} className="blogcard__image"/>*/}
                        </div>
                        <div className="blogcard__details">
                            <div className="blogcard__head">
                                <div className="blogcard__name">{blog.name}</div>
                                <div className="blogcard__published_at">{format(blog.published_at, 'do MMM, yyyy')}</div>
                            </div>
                            <div className="blogcard__content">{blog.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsPage;
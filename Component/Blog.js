import { FaExternalLinkAlt, FaMedium } from "react-icons/fa";
import { myInfo } from "../Information/myInfo";

function Blog() {
    const { Blog } = myInfo;
    return (
        <div className='blog-container'>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="blog-heading">{Blog.BlogHeading}</h2>
                    <div className="blog-heading-line"></div>
                </div>
            </div>
            <div className="blog-card-container">
                <div className="row">
                    {
                        Blog.BlogList.map((blog) => (
                            <div className="col-md-4" key={blog.alt}>
                                <div className="blog-card">
                                    <div className="blog-card-top-display">
                                        <FaMedium className="blog-card-top-folder-icon" />
                                        <a
                                            href={blog.BlogLink}
                                            target="_blank"
                                            rel="noreference"
                                            aria-label="Blog link"
                                        >
                                            <FaExternalLinkAlt className='blog-card-top-font-icon2' />
                                        </a>
                                    </div>
                                    <h3 className="blog-card-title">{blog.BlogName}</h3>
                                    <p className="blog-card-description">{blog.BlogDescription}</p>
                                    <p className="blog-card-tags"><span className="blog-card-tags-language">{blog.BlogTags}</span></p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Blog;

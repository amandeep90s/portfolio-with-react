import React from "react";
import blogs from "../components/allBlogs";
import Title from "../components/Title";

const BlogsPage = () => {
    return (
        <>
            <div className="b-title">
                <Title title={"Recent Blogs"} span={"Recent Blogs"} />
            </div>

            <div className="BlogsPage">
                {blogs.map((blog) => {
                    return (
                        <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt="" />
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BlogsPage;

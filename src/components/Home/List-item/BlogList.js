import './BlogList.css';

const BlogList = ({ blogs }) => {
    console.log(blogs);
    return (
        <div className="blog-list">
            {blogs.slice(0,10).map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
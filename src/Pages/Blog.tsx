// Blog.js
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Welcome to My Blog',
      date: 'October 8, 2024',
      content: 'This is a training post on my blog. Here, I will share my thoughts, projects, and tutorials on web development and more!',
    },
    {
      id: 2,
      title: 'Understanding React',
      date: 'October 1, 2024',
      content: 'React has changed the way we build components of websites. With React, I will dive into creating new components, new blogs, and more.',
    },
    {
      id: 3,
      title: 'Building Responsive Portfolio',
      date: 'September 24, 2024',
      content: 'With React, we can create responsive portfolios that more users can access from various devices. Building responsive designs is crucial. Here’s how you can make your site look great on any screen size.',
    },
    {
      id: 4,
      title: 'New Terms from Today’s Workshop',
      date: 'October 9, 2024',
      content: `Const: Creates constants, which means that once you assign a value to a variable declared with const, you cannot change the reference to a new value later. 
      =>: Arrow function, a shorter syntax for defining functions. 
      Array: A list-like structure to store multiple values in a single variable. 
      $: Used in template literals to embed variables into strings. 
      useState: A React hook that allows functional components to have state. 
      index: The position of an element within an array, starting from 0.`,
    },
  ];
  return (
    <div className="blog-container">
      <h1>Salim Saay's Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-date">{post.date}</p>
            <p className="blog-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

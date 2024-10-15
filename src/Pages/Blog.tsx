// Blog.js
import React from 'react';
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
    {
      id:5,
      title: 'How to Create a New React App, Connect VSCode to GitHub, and Deploy to GitHub Pages', 
      date: ' 15 october 2024',
      content: ' To successfully deploy a React app to GitHub Pages, you need to follow these steps:
        1- Check the required tools including  a) Node and npm ( # node --version, # npm --version) b) Git ( #git --version) 
        2- Create an empty repository on your Github account, if you do not have any github account create an account. 
    3- Create a react app ( #npm create-react-app your-app-name
                           if you want to have your app in typescrip ( #npm create-react-app my-app --template typescript
      #cd your-app-name
  4- install the gh-page ( #npm install gh-pages --save-dev
  5- add homepage to the package.json file of your app
  {
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://your-github-username.github.io/reposity-name",
  "private": true,
    
    6- add deployment script to the package.json
   "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
  
  7- Add a "remote" that points to the GitHub repository ( #git remote add origin https://github.com/{username}/{repo-name}.git)
8- Push the React app to the GitHub repository 
     # npm run deploy
     # npm run deploy -- -m "Deploy React app to GitHub Pages"

9- Configure GitHub Pages
    Navigate to the GitHub Pages settings page
    In your web browser, navigate to the GitHub repository
    Above the code browser, click on the tab labeled "Settings"
    In the sidebar, in the "Code and automation" section, click on "Pages"
    Configure the "Build and deployment" settings like this:
    Source: Deploy from a branch
    Branch:
    Branch: gh-pages
    Folder: / (root)
    Click on the "Save" button
     
 10- 
# git add .
# git commit -m "Configure React app for deployment to GitHub Pages"
# git push origin master ',
  
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

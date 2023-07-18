// blog.js
const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single blog post
router.get('/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new blog post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBlogPost = new BlogPost({ title, content });
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a blog post
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(updatedBlogPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deletedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

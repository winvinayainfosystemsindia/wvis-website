import { createContentSlice } from './createContentSlice';
import { getPublishedBlogs, getBlogBySlug } from '../services/blogService';
import { listAllBlogs, createBlog, updateBlog, deleteBlog } from '../services/adminBlogService';
import type { BlogPost, BlogPayload } from '../models/blog';

const blogContentSlice = createContentSlice<BlogPost, BlogPayload, BlogPayload>({
	name: 'blogs',
	fetchPublic: getPublishedBlogs,
	fetchBySlug: getBlogBySlug,
	fetchAdmin: listAllBlogs,
	create: createBlog,
	update: updateBlog,
	remove: deleteBlog,
});

export const {
	fetchPublic: fetchBlogsPublic,
	fetchBySlug: fetchBlogBySlug,
	fetchAdmin: fetchBlogsAdmin,
	create: createBlogThunk,
	update: updateBlogThunk,
	remove: removeBlogThunk,
} = blogContentSlice.thunks;

export const { clearDetail: clearBlogDetail } = blogContentSlice.actions;

export default blogContentSlice.reducer;

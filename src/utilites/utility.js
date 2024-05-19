import toast from "react-hot-toast";


export const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs')
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)
    }

    return blogs;
}

// save
export const saveBlog = blogDetails => {
    let blogs = getBlogs()
    const isExist = blogs.find(item => item.id === blogDetails.id)
    if(isExist){
        return toast.error('Already Bookmarked!')
    }
    blogs.push(blogDetails)
    localStorage.setItem('blogs', JSON.stringify(blogs))
    toast.success('Bookmarked Successfully!')
}

// delete
export const deleteBlog = id => {
    let blogs = getBlogs()
    const remaining = blogs.filter(item => item.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Successfully removed your bookmark!')
}


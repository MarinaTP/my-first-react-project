const mainEndPoint = 'https://jsonplaceholder.typicode.com/posts';

export const getBlogs = () => {
    return fetch(mainEndPoint)
    .then(res => res.json())    
    .then(blogs => {
        return blogs
    });
}
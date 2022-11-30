import { Post } from "../models/post.interface";
let posts = getPost();

export async function getPost(): Promise<Post[]> {
  return await(await fetch('assets/db.json')).json();
}

export async function updatePost(data: Partial<Post>, id: number) {
    (await posts).map(post => post.id == id? {...post,...data}: post)
    return (await posts).find(post => post.id == id) as Post
}


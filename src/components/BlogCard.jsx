export default function BlogCard({ post }) {
    return (
        <div
            id="blog_card"
            class="relative mt-4 flex max-w-72 flex-col justify-center gap-4 rounded-lg bg-lightGreen object-cover p-4 transition-all hover:bg-darkGreen hover:text-white hover:shadow-lg hover:shadow-slate-950"
        >
            <img
                width={1}
                height={1}
                src={post.frontmatter.image.url}
                alt={post.frontmatter.image.alt}
                class="h-[150px] w-[305px]"
            />
            <h4 class="text-lg font-semibold">{post.frontmatter.postTitle}</h4>
            <p class="text-sm">{post.frontmatter.description}</p>
            <div class="text-center">
                <a class="text-md absolute -bottom-7 left-5 w-fit" href={post.frontmatter.postUrl}>
                    <Button>Visitar post</Button>
                </a>
            </div>
        </div>
    )
}
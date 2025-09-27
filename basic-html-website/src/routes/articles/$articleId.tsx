import {createFileRoute, Link, useParams} from '@tanstack/react-router'
import {articles} from "@/data/article-data.ts";

export const Route = createFileRoute('/articles/$articleId')({
    component: ArticleDetails,
})

function ArticleDetails() {
    const {articleId} = useParams({from: '/articles/$articleId'})
    const article = articles.find((a) => a.id === articleId)

    if (!article) {
        return (
            <div>
                <h2>Article Not Found</h2>
                <p>Sorry, we couldn't find an article with that ID.</p>
                <Link to="/articles">← Back to all articles</Link>
            </div>
        );
    }

    return (
        <article>
            <h1>{article.title}</h1>
            <p><em>Published on: {article.publishDate}</em></p>
            <div style={{whiteSpace: 'pre-line'}}>{article.content}</div>
            <br/>
            <Link to="/articles">← Back to all articles</Link>
        </article>
    );
}

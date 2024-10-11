import '../../css/Article.css';

const Article = (article:any) => {
    
    console.log('Article() -- article', article);

    const {
            title,
            description,
            pubDate,
            link,
            originallink
        } = article.article;



    return (
        <div>
            <p>제목: {title}</p>
            <p>요약: {description}</p>
            <p>발간일: {pubDate}</p>
            <p>네이버 링크: {link}</p>
            <p>원본 링크: {originallink}</p>
        </div>
    );

}

export default Article;
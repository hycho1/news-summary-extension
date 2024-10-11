import { useDispatch, useSelector } from 'react-redux';
import Article from './Article';
import { useEffect } from 'react';
import { asyncArticleFetch } from '../../slice/articleSlice';

const ArticleContainer = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(asyncArticleFetch());
    },[])

    const articles = useSelector((state:any) => state.article.articleInfo);
    console.log('ArticleContainer() -- article', articles);
    
    return (
        <div>
            {
                articles.map((article:any, index:number) => {
                    console.log(article)
                  return (
                    <div key={index}>
                        <Article article={article}/>
                    </div>
                  )
                })
            }
        </div>
    );

}
export default ArticleContainer;
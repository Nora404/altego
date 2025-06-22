
import DOMPurify from 'dompurify';
import type { NewsArticel } from '../../layout/components/articel/NewsArticelList';
import { useParams } from 'react-router-dom';
import data from '../../Data/NewsData.json';
import Button from '../../layout/components/Button';

export default function NewsArticle() {
    const { id } = useParams();
    const post: NewsArticel | undefined = data.find((p) => p.id === id);

    if (!post) return <div>Artikel nicht gefunden</div>;

    const sanitizedHTML = DOMPurify.sanitize(post.newsText, {
        ALLOWED_TAGS: ['b', 'i', 'br', 'p', 'ul', 'li', 'a', 'strong'],
    });

    return (
        <div>
            <div className='articel-header'>{post.title}</div>
            <hr className='neon-orange' />
            <div className='flex-row-top'>
                <img src={post.img} alt={post.title} className='articel-img-big' />
                <div className='only-desktop' style={{ marginTop: "1rem" }}>{post.shortText}</div>
            </div>
            <div className='only-mobile' style={{ marginBottom: "1rem" }}>{post.shortText}</div>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />

            <hr className='neon-orange spaceY' />

            <div className="flex-row">
                <div>
                    Autor: {post.autor} · {post.comments} Kommentare
                </div>
                <Button to={`/news`}>zu den News</Button>
            </div>
        </div>
    );
}
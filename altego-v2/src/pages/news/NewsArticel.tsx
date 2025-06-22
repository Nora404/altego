
import DOMPurify from 'dompurify';
import type { NewsArticel } from '../../layout/components/articel/NewsArticelList';
import { useParams } from 'react-router-dom';
import data from '../../Data/NewsData.json';
import comments from '../../Data/CommentsData.json';
import Button from '../../layout/components/Button';

export default function NewsArticle() {
    const { id } = useParams();
    const post: NewsArticel | undefined = data.find((p) => p.id === id);

    if (!post) return <div>Artikel nicht gefunden</div>;

    const relatedComments = comments
        .filter(comment => comment.newsId === id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Neueste zuerst


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

            <p>{" "}</p><p>{" "}</p>
            <div className='articel-header'>Kommentare</div>
            <hr className='neon-orange' />
            {relatedComments.map(comment => (
                <div key={comment.id} className="comment">
                    <div className="comment-header">
                        <img src={comment.img} alt={comment.name} className="comment-avatar" />
                        <div>
                            <strong>{comment.name}</strong>
                            <div className="comment-date">
                                {new Date(comment.date).toLocaleString('de-DE', {
                                    weekday: 'short',
                                    day: '2-digit',
                                    month: 'short',
                                    year: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </div>
                        </div>
                    </div>
                    <div
                        className="comment-text"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(comment.text, {
                                ALLOWED_TAGS: ['br']
                            })
                        }}
                    />
                    <hr className="neon-orange" />
                </div>
            ))}
        </div>
    );
}
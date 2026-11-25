import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Seo from '../../Component/Seo';
import { TitleBlock } from '../../Component/Blueprint';
import { getPost, getPostSlugs } from '../../lib/posts';
import { myInfo } from '../../Information/myInfo';

const WAVE_BARS = 70;

// Deterministic so server and client render the same bars.
const barHeight = (bar) => 14 + Math.round(Math.abs(Math.sin(bar * 0.43) * Math.cos(bar * 0.17)) * 86);

const formatDate = (date) => new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

/* The waveform fills in as you read, like a transmission being played back. */
function ReadingWave({ targetRef }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const rect = targetRef.current?.getBoundingClientRect();
            if (!rect) return;
            const read = (window.innerHeight * 0.5 - rect.top) / rect.height;
            setProgress(Math.min(1, Math.max(0, read)));
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [targetRef]);

    const played = Math.round(progress * WAVE_BARS);

    return (
        <div className="post-wave" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
            <span className="mono air-label"><i className="onair"></i>channel open</span>
            <div className="post-wave-bars" aria-hidden="true">
                {Array.from({ length: WAVE_BARS }, (_, bar) => (
                    <i key={bar} className={bar < played ? 'played' : ''} style={{ '--h': barHeight(bar) }}></i>
                ))}
            </div>
            <span className="mono post-wave-pc">{Math.round(progress * 100)}%</span>
        </div>
    )
}

// Posts on this site open in place; the rest still open on Medium.
function MessageLink({ blog, direction }) {
    const label = direction === 'next' ? 'next message' : 'previous message';
    const arrow = direction === 'next' ? '→' : '←';
    const content = (
        <>
            <small className="mono">{direction === 'next' ? `${label} ${blog.BlogSlug ? arrow : '↗'}` : `${blog.BlogSlug ? arrow : '↗'} ${label}`}</small>
            <span>{blog.BlogName}</span>
        </>
    );
    if (blog.BlogSlug) {
        return <Link className={`post-${direction}`} href={`/writing/${blog.BlogSlug}`} title={blog.BlogName}>{content}</Link>;
    }
    return <a className={`post-${direction}`} href={blog.BlogLink} target="_blank" rel="noopener noreferrer" title={blog.BlogName}>{content}</a>;
}

export async function getStaticPaths() {
    return { paths: getPostSlugs().map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    return { props: { post: getPost(params.slug) } };
}

export default function PostPage({ post }) {
    const articleRef = useRef(null);
    const { BlogList } = myInfo.Blog;
    const position = BlogList.findIndex((blog) => blog.BlogSlug === post.slug);
    const message = String(position >= 0 ? position + 1 : 0).padStart(2, '0');
    // Previous and next follow the writing list and loop: the last message leads back to the first, and the other way round.
    const hasMore = BlogList.length > 1 && position >= 0;
    const previous = hasMore ? BlogList[(position - 1 + BlogList.length) % BlogList.length] : null;
    const next = hasMore ? BlogList[(position + 1) % BlogList.length] : null;

    return (
        <>
            <Seo
                title={post.title}
                description={post.description}
                article={{ publishedTime: post.date, author: post.author, tags: post.tags, sameAs: post.medium }}
            />
            <div className="bp">
                <div className="wrap sheet post">
                    <header className="post-head">
                        <Link href="/writing" className="mono back-link">← all transmissions</Link>
                        <span className="mono eyebrow reveal">msg {message} · pit wall</span>
                        <h1 className="post-title">{post.title}</h1>
                    </header>

                    <ReadingWave targetRef={articleRef} />

                    <dl className="post-log reveal">
                        <div>
                            <dt className="mono">date</dt>
                            <dd><time dateTime={post.date}>{formatDate(post.date)}</time></dd>
                        </div>
                        <div>
                            <dt className="mono">from</dt>
                            <dd>{post.author}</dd>
                        </div>
                        <div>
                            <dt className="mono">read time</dt>
                            <dd>{post.minutes} min</dd>
                        </div>
                        {
                            post.medium && (
                                <div>
                                    <dt className="mono">source</dt>
                                    <dd><a className="post-medium mono" href={post.medium} target="_blank" rel="noopener noreferrer">also on Medium ↗</a></dd>
                                </div>
                            )
                        }
                        <div className="post-log-wide">
                            <dt className="mono">channels</dt>
                            <dd>
                                <ul className="post-tags mono">
                                    {post.tags.map((tag) => <li key={tag}>{tag}</li>)}
                                </ul>
                            </dd>
                        </div>
                    </dl>

                    <article className="prose" ref={articleRef} dangerouslySetInnerHTML={{ __html: post.html }} />

                    <div className="post-eot mono">end of transmission</div>

                    {
                        hasMore && (
                            <nav className="post-nav" aria-label="More messages">
                                <MessageLink blog={previous} direction="previous" />
                                <MessageLink blog={next} direction="next" />
                            </nav>
                        )
                    }

                    <TitleBlock drawing="team radio" sheet="04 / 05" />
                </div>
            </div>
        </>
    )
}

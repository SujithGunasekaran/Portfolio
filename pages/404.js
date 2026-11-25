import Link from 'next/link';
import Seo from '../Component/Seo';
import Lines from '../Component/Lines';

export default function NotFoundPage() {
    return (
        <>
            <Seo title="Page not found" description="This page does not exist or has moved. Head back to the grid." noindex />
            <div className="wrap">
                <div className="page-head">
                    <span className="mono eyebrow reveal">404 · off track</span>
                    <h1 className="h2"><Lines lines={['Lost the', { em: 'racing line.' }]} /></h1>
                    <p className="lead reveal" style={{ '--d': '350ms' }}>That page doesn't exist or has moved. Head back to the grid and pick it up from there.</p>
                    <div className="btn-row reveal" style={{ '--d': '500ms', marginTop: 28 }}>
                        <Link href="/" className="btn primary">Back to the grid <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

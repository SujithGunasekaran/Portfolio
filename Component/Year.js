import { useEffect, useState } from 'react';

/*
 * The current year, kept fresh after the page loads. The statically built HTML carries the
 * year it was built in, so on the client the span is swapped for one with today's year.
 */
export default function Year() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return <span key={mounted ? 'client' : 'build'} suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

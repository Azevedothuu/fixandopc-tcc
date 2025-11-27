import { type JSX } from 'react'

type VideoBackgroundProps = {
    src?: string
    poster?: string
    className?: string
    /**
     * 'fixed' keeps the video fixed to the viewport.
     * 'absolute' makes it positioned inside a relative hero container (Option B).
     */
    coverType?: 'fixed' | 'absolute'
}

export function VideoBackground({ src = '', poster, className = '', coverType = 'absolute' }: VideoBackgroundProps): JSX.Element {
    const containerClass = coverType === 'fixed' ? 'fixed inset-0 overflow-hidden' : 'absolute inset-0 overflow-hidden'
    // place the video behind content by default (-z-10)
    return (
        <div className={`${containerClass} -z-10 ${className}`}>
            <video
                src={src}
                poster={poster}
                className="w-full h-full object-cover pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    )
}

export default VideoBackground


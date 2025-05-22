interface AdComponentProps {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
    style?: React.CSSProperties;
}

export function AdComponent({ slot, format = 'auto', style }: AdComponentProps) {
    return (
        <div className="my-8 overflow-hidden rounded-lg" style={style}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-2234156203417980"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
} 
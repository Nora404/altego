type FeatureBannerProps = {
    feature: string;
    description: string;
    img: string;
}

const FeatureBanner = (prop: FeatureBannerProps) => {
    const { feature, description, img } = prop;
    return (
        <div
            className="feature-banner"
            style={{ '--bg-image': `url(${img})` } as React.CSSProperties}
        >
            <h3 className="neon-border-text" style={{ margin: 0 }}>{feature}</h3>
            <p className="feature-text">{description}</p>
        </div>
    );
}

export default FeatureBanner;
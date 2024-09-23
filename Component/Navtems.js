const NavItems = (props) => {

    // props
    const {
        sectionName,
        displayName,
        className
    } = props;

    return (
        <a
            href={`#${sectionName}`}
            data-section={sectionName}
            className={className}
        >
            {displayName}
        </a>
    )
}

export default NavItems;

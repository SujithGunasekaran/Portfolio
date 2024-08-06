const NavItems = (props) => {

    // props
    const {
        activeSection,
        sectionName,
        displayName,
        handleNavClick
    } = props;

    return (
        <div
            onClick={() => handleNavClick(sectionName)}
            data-section={sectionName}
            className={`header-nav-item ${activeSection === sectionName ? 'active' : ''}`}
        >
            {displayName}
        </div>
    )
}

export default NavItems;
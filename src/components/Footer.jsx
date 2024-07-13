const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
    return (
        <div className="copyright">
            <p>Copyright &copy; {year} Rishabh Raj. All right reserved</p>
        </div>
    )
}

export default Footer
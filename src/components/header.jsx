import chefIcon from '../assets/chef-icon.png'

export default function Header() {
    return (
        <header className='header'>
            <nav className='nav-container'>
                <img src={chefIcon} alt='chefIcon' className='chef-icon' />
                <p className='chef-name'>Your Chef</p>
            </nav>
        </header>
    )
}
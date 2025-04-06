import ChefClaudeLogo from '../images/chef-claude-logo.png'
// import '../index.css'

export default function Header() {
    return (
        <header>
            <img className='chef-claude-img' src={ChefClaudeLogo} alt="chef-claude-img" />
            <h1 className='chef-claude-title'>Chef Claude</h1>
        </header>
    )
}
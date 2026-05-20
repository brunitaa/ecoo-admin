import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const items = [
  { to: '/', label: 'Inicio', icon: '🏠' },
  { to: '/escanear', label: 'Escanear', icon: '📷' },
  { to: '/premios', label: 'Premios', icon: '🎁' },
  { to: '/roles', label: 'Más', icon: '☰' },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      {items.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
          end={to === '/'}
        >
          <span className="bottom-nav__icon" aria-hidden>{icon}</span>
          <span className="bottom-nav__label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

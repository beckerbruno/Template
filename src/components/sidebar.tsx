import React, { useState } from 'react'
import { Home, User, Settings, HelpCircle, Menu } from 'lucide-react'
import Link from 'next/link'
import styles from './sidebar.module.css'

interface MenuItem {
  name: string
  icon: React.ReactNode
  path: string
}

const menuItems: MenuItem[] = [
  { name: 'Início', icon: <Home size={20} />, path: '/' },
  { name: 'Perfil', icon: <User size={20} />, path: '/profile' },
  { name: 'Configurações', icon: <Settings size={20} />, path: '/settings' },
  { name: 'Ajuda', icon: <HelpCircle size={20} />, path: '/help' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.name} className={styles.menuItem}>
              <Link href={item.path} className={styles.menuLink}>
                {item.icon}
                <span className={styles.menuText}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
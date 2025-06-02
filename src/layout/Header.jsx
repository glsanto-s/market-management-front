import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Ms Market Management</div>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>Home</a>
        <a href="/produtos" style={styles.link}>Produtos</a>
        <a href="/contato" style={styles.link}>Contato</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 32px',
    backgroundColor: '#69AC54',
    color: '#fff',
    fontFamily: '"Poppins", sans-serif',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Header;
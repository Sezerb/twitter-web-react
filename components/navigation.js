import React from 'react'

import NavigationButton from './navigation-button'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'

import styles from './navigation.module.css'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'home'}>
        <Home />
        <span>Home</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'explore'}>
        <Explore />
        <span>Explore</span>
      </NavigationButton>

      <NavigationButton notify={132} selected={selectedKey === 'notification'}>
        <Notification />
        <span>Notification</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'messages'}>
        <Messages />
        <span>Messages</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <span>Bookmark</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'lists'}>
        <Lists />
        <span>Lists</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'profile'}>
        <Profile />
        <span>Profile</span>
      </NavigationButton>

      <NavigationButton selected={selectedKey === 'more'}>
        <More />
        <span>More</span>
      </NavigationButton>
    </nav>
  )
}

export default Navigation

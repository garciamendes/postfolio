import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from '@phosphor-icons/react'

export const ScrollToHome = () => {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const triggerPoint = 0.1

      if (scrollY >= triggerPoint) {
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.button
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          role="button"
          aria-label="back to top"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="
            fixed bottom-5 right-5
            bg-black text-white
            flex items-center justify-center
            rounded-full shadow-lg
            p-2.5 cursor-pointer border border-zinc-300
          "
        >
          <ArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

import { useState, useEffect, createContext, useContext } from 'react'

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
  params: {}
})

export function useRouter() {
  return useContext(RouterContext)
}

// Clean path helper
function getNormalizedPath(pathname) {
  let p = pathname || '/'
  if (p.length > 1 && p.endsWith('/')) {
    p = p.slice(0, -1)
  }
  return p.toLowerCase()
}

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    // Check if coming from 404.html redirect query parameter (e.g. ?p=/products/fwd-pdf)
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search)
      const redirectedPath = searchParams.get('p')
      if (redirectedPath) {
        // Clear search param cleanly without reload
        const newUrl = window.location.origin + redirectedPath + window.location.hash
        window.history.replaceState(null, '', newUrl)
        return getNormalizedPath(redirectedPath)
      }
      return getNormalizedPath(window.location.pathname)
    }
    return '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (toPath, options = {}) => {
    if (!toPath) return
    const normalized = getNormalizedPath(toPath)
    if (window.location.pathname !== normalized) {
      window.history.pushState(null, '', normalized)
      setCurrentPath(normalized)
    }
    if (!options.keepScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Intercept normal anchor clicks if internal link
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href) return

      // Handle internal relative paths starting with /
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault()
        navigate(href)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Parse params if blog route
  let params = {}
  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '').replace(/\/$/, '')
    params = { slug }
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate, params }}>
      {children}
    </RouterContext.Provider>
  )
}

/**
 * Custom Link Component
 */
export function Link({ to, children, className = '', activeClassName = '', ...props }) {
  const { currentPath, navigate } = useRouter()
  const normalizedTo = getNormalizedPath(to)
  const isActive = currentPath === normalizedTo || (normalizedTo !== '/' && currentPath.startsWith(normalizedTo))

  const handleClick = (e) => {
    e.preventDefault()
    navigate(to)
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
      {...props}
    >
      {children}
    </a>
  )
}

/**
 * Hook to dynamically update SEO meta tags on route change
 */
export function useSeo({ title, description, canonicalUrl }) {
  useEffect(() => {
    if (title) {
      document.title = title.includes('Right 2 Creation') ? title : `${title} | Right 2 Creation`
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)

      let ogDesc = document.querySelector('meta[property="og:description"]')
      if (ogDesc) ogDesc.setAttribute('content', description)
      let twDesc = document.querySelector('meta[name="twitter:description"]')
      if (twDesc) twDesc.setAttribute('content', description)
    }

    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]')
      if (!linkCanonical) {
        linkCanonical = document.createElement('link')
        linkCanonical.setAttribute('rel', 'canonical')
        document.head.appendChild(linkCanonical)
      }
      linkCanonical.setAttribute('href', canonicalUrl)
    }
  }, [title, description, canonicalUrl])
}

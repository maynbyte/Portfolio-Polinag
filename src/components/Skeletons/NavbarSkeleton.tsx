
const NavbarSkeleton = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center animate-pulse">
        {/* Logo / Name */}
        <div className="h-6 w-32 bg-muted rounded-md" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="h-5 w-16 bg-muted rounded-md" />
          <div className="h-5 w-16 bg-muted rounded-md" />
          <div className="h-5 w-16 bg-muted rounded-md" />
          <div className="h-9 w-24 bg-muted rounded-md ml-4" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <div className="h-6 w-6 bg-muted rounded-md" />
        </div>
      </div>
    </header>
  )
}

export default NavbarSkeleton
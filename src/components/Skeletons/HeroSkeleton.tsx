
const HeroSkeleton = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-white px-6">
      <div className="max-w-3xl w-full text-center animate-pulse">
        {/* Subtitle */}
        <div className="h-4 w-40 bg-muted rounded-md mx-auto mb-3" />

        {/* Heading */}
        <div className="h-8 md:h-10 w-72 md:w-[32rem] bg-muted rounded-md mx-auto mb-4" />
        <div className="h-8 md:h-10 w-60 bg-muted rounded-md mx-auto mb-6" />

        {/* Typewriter text */}
        <div className="h-5 w-48 bg-muted rounded-md mx-auto mb-8" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="h-10 w-40 bg-muted rounded-md" />
          <div className="h-10 w-40 bg-muted rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;

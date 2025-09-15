import SkeletonCard from "./components/SkeletonCard";

export default function loading() {
  return (
    <section className="max-w-7xl mx-auto pt-8">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
       <SkeletonCard isLoading/>
       <SkeletonCard isLoading/>
       <SkeletonCard isLoading/>
       <SkeletonCard isLoading/>
       <SkeletonCard isLoading/>
       <SkeletonCard isLoading/>
       <SkeletonCard isLoading/>
       <SkeletonCard isLoading/>
       <SkeletonCard isLoading/>
      </div>
    </section>
  );
}

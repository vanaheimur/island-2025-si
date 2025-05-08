export const Skeleton = () => {
  return (
    <div className="flex flex-col gap-20 animate-pulse">
      {/* Section 5.1 */}
      <div>
        <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-5 w-96 bg-gray-200 rounded mb-6"></div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>

          <div className="flex gap-4">
            <div className="h-8 w-40 bg-gray-200 rounded mb-4"></div>
            <div className="h-8 w-40 bg-gray-200 rounded mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Section 5.2 */}
      <div>
        <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-5 w-96 bg-gray-200 rounded mb-6"></div>
        <div className="h-10 w-80 bg-gray-200 rounded"></div>
      </div>

      {/* Section 5.3 */}
      <div>
        <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-5 w-96 bg-gray-200 rounded mb-6"></div>

        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2 items-center max-lg:flex-wrap">
              <div className="w-full lg:w-8/12 xl:w-3/5">
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
              <div className="w-[calc(50%-4px)] lg:w-4/12 xl:w-1/5">
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
              <div className="w-[calc(50%-4px)] lg:w-4/12 xl:w-1/5">
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5.4 */}
      <div>
        <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-5 w-96 bg-gray-200 rounded mb-6"></div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <div className="h-12 w-32 bg-gray-200 rounded"></div>
        <div className="h-12 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

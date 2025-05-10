import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function CardSection() {
    return (
      <section className="py-16 px-4">
      <div className="flex flex-wrap justify-center gap-8">
        {/* Kort 1 */}
        <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-4 text-center">Registrera ditt lag</h3>
              <div className="flex justify-center mt-4">
                <PencilSquareIcon className="w-12 h-12 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
    
        {/* Kort 2 */}
        <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-4 text-center">Hitta en motståndare som passar er</h3>
              <div className="flex justify-center mt-4">
                <MagnifyingGlassIcon className="w-12 h-12 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
    
        {/* Kort 3 */}
        <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-4 text-center">Skicka förfrågan om match</h3>
            
            <div className="flex justify-center mt-4">
              <PaperAirplaneIcon className="w-12 h-12 text-blue-500" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
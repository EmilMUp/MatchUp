export default function CardSection() {
    return (
      <section className="py-16 px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {/* Kort 1 */}
          <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Card 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Kort 1</h3>
                <p className="text-gray-600">
                  Registrera ditt lag
                </p>
              </div>
            </div>
          </div>
  
          {/* Kort 2 */}
          <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Card 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Kort 2</h3>
                <p className="text-gray-600">
                  Hitta en motståndare som passar er
                </p>
              </div>
            </div>
          </div>
  
          {/* Kort 3 */}
          <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Card 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Kort 3</h3>
                <p className="text-gray-600">
                  Skicka förfrågan om match
                </p>
              </div>
            </div>
          </div>

          {/* Kort 4 */}
          <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Card 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Kort 3</h3>
                <p className="text-gray-600">
                  Spela matchen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
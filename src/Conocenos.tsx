
export function Conocenos () {

    return (
        <>
            <div className="flex flex-col md:flex-row items-center mt-10 md:mt-16 lg:mt-20 lg:mb-20 bg-gradient-to-b from-black via-gray-900 to-blue-950 min-h-screen p-6">
                {/* Texto */}
                <div className="flex-1 md:pr-10 lg:pr-16 md:pl-6 lg:pl-8 text-center md:text-left mb-8 md:mb-0 max-w-xl">
                    <p className="text-white text-lg sm:text-xl mb-4">
                        Tu lugar favorito para descubrir y disfrutar anime en alta calidad.
                    </p>
                    <p className="text-white text-lg sm:text-xl">
                        Nosotros ofrecemos las mejores series de anime que puedas ver con una buena calidad y ofreciendo las series el mismo día que se publican en Japón.
                        No te pierdas de nada y mantente al tanto con nosotros.
                    </p>
                </div>
            </div>


            <div className=" max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-black text-center text-2xl sm:text-3xl font-bold mb-10">¿Por qué elegirnos?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-blue-300 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-xl font-semibold mb-4">Variedad de contenido</h3>
                        <p>Ofrecemos una amplia gama de series de anime, desde clásicos hasta los más recientes lanzamientos.</p>
                    </div>
                    <div className="bg-green-400 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-xl font-semibold mb-4">Calidad de transmisión</h3>
                        <p>Nuestra plataforma garantiza una experiencia de visualización fluida y de alta calidad.</p>
                    </div>
                    <div className="bg-yellow-300 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl sm:text-xl font-semibold mb-4">Actualizaciones frecuentes</h3>
                        <p>Nos aseguramos de mantener nuestro catálogo actualizado con las últimas series y episodios.</p>
                    </div>
                </div>
            </div>
            <section className="py-16 px-4 md:px-20 bg-gray-800 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-white">Nuestros Openings Favoritos</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <video
                        className="w-72 h-40 sm:w-80 sm:h-48 rounded-lg shadow-lg"
                        src="https://drive.google.com/uc?export=download&id=1Ru5iVK4wPZheQ6i1j-9IIj2fk2s69IEO"
                        controls
                    ></video>
                    <video
                        className="w-72 h-40 sm:w-80 sm:h-48 rounded-lg shadow-lg"
                        src="https://drive.google.com/uc?export=download&id=1jg9EeAdgulCH0b_iY17ba1DIp5YnldQj"
                        controls

                    ></video>
                </div>

            </section>

        </>
    );
}
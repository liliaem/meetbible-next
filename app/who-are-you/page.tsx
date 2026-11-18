import Link from "next/link";

export default function WhoAreYou() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-6">
        <h1 className="text-5xl font-extrabold text-center text-blue-800">Who Are You ?</h1>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <p className="text-xl text-gray-800 mb-4 max-w-2xl">
          Esta es la página donde puedes presentarte. ¿Eres un desarrollador, un artista, un soñador? ¡Cuéntanos!
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          BLA BLA BLA BLA BLA BLA...
        </p>
        <div className="space-x-4">
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Volver a Home
          </Link>
          <Link href="/who-are-we" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Ir a Who Are We
          </Link>
        </div>
      </main>

      {/* Footer opcional */}
      <footer className="w-full p-4 text-center text-gray-500">
        <p>© 2025 - Hecho con curiosidad</p>
      </footer>
    </div>
  );
}
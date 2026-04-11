

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <main className="flex flex-col items-center justify-center gap-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Welcome to Next.js!</h1>
        <p className="text-xl text-gray-600">
            Get started by editing <code className="bg-gray-200 px-1 rounded">page.tsx</code>
        </p>
        <div className="flex gap-4">
            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                > Deploy to Vercel </a>
            <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors"
                > Documentation </a>
        </div>
        </main>
    </div>
    );
};

export default Hero;
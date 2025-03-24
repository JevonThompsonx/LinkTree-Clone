import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ShareIcon } from "@heroicons/react/24/outline";

const LinktreeClone = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-900">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Linktree clone</title>
        <link rel="icon" href="link.ico?v=2" />
        <meta name="theme-color" content="#000" />
      </Helmet>

      <div className="max-w-2xl mx-auto px-4">
        <header className="flex justify-end py-8">
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            aria-label="Share link"
            title="Copy link"
          >
            <ShareIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="flex flex-col items-center space-y-6 text-white">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
            <img
              className="w-full h-auto object-cover"
              src="me1.webp"
              alt="Profile"
            />
          </div>

          <h1 className="text-3xl font-bold mt-4">WebDevJev</h1>

          <div className="w-full space-y-4 max-w-md">
            <SocialButton
              url="https://twitter.com/JevonThompson12"
              icon={
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              }
              label="Twitter"
            />
            <SocialButton
              url="https://www.linkedin.com/in/jevon-thompson-522ab4237"
              icon={
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              }
              label="LinkedIn"
            />
            <SocialButton
              url="https://github.com/JevonThompsonx?tab=repositories"
              icon={
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              label="Github"
            />
            <SocialButton
              url="https://web-dev-blogsite.onrender.com"
              icon={
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a4.5 4.5 0 01-7.437.307 4.499 4.499 0 010-5.807 4.5 4.5 0 017.437 5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              label="Personal Site"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

const SocialButton = ({
  url,
  icon,
  label,
}: {
  url: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full flex items-center justify-center space-x-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-200 text-white"
  >
    {icon}
    <span className="text-lg font-medium">{label}</span>
  </a>
);

export default LinktreeClone;

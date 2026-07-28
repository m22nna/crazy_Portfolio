function CVPreview() {
  return (
    <div className="max-w-sm mx-auto rounded-2xl bg-zinc-900 border border-white/10 p-4">

      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/CV.png"
          alt="CV Preview"
          className="
            rounded-xl
            hover:scale-[1.02]
            duration-300
            cursor-pointer
            shadow-lg
          "
        />
      </a>

      <div className="mt-5 flex items-center justify-between">

        

        <a
          href="/cv.pdf"
          download
          className="
            px-5
            py-2
            mx-auto
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-600
            text-white
            transition
          "
        >
          Download 
        </a>

      </div>

    </div>
  );
}

export default CVPreview;
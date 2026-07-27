export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
    </div>
  );
}
function Modal({ children }: React.PropsWithChildren) {
  return (
    <div
      className={`bg-zinc-800 rounded-xl shadow p-6 transition-all max-w-mid scale-100 opacity-100`}>
      <div className="gap-4 flex-col flex items-center">{children}</div>
    </div>
  );
}

export default Modal;

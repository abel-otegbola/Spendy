export default function PhoneMockup() {
  return (
    <div className="relative mt-12 h-[590px] w-[330px] [perspective:1200px]">
      <div className="phone-rotation absolute inset-x-0 top-4 mx-auto h-[560px] w-[300px] rotate-[-8deg] transform-gpu [transform-style:preserve-3d]">
        <div className="absolute inset-0 translate-x-4 translate-y-2 overflow-hidden rounded-[38px] border border-black/20 bg-white [backface-visibility:hidden] dark:bg-[#292a2b] [transform:translateZ(-8px)_rotateY(180deg)]">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#f2f2ef_0%,#c6c7c4_48%,#aeb0ae_100%)] opacity-90 dark:bg-[linear-gradient(145deg,#494b4b_0%,#242627_52%,#111213_100%)]" />
          <div className="absolute left-7 top-7 flex h-[112px] w-[112px] flex-wrap gap-2 rounded-[27px] border border-black/10 bg-[#b9bab7]/90 p-3 shadow-lg dark:bg-[#17191a]/95">
            {["top-0 left-0", "top-0 right-0", "bottom-0 left-0"].map((position) => (
              <span key={position} className={`absolute ${position} m-3 size-9 rounded-full border-[5px] border-[#555653] bg-[#171818] shadow-inner dark:border-[#575959]`}>
                <span className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_35%_30%,#a7c2cf_0_8%,#273944_28%,#080b0c_70%)]" />
              </span>
            ))}
            <span className="absolute bottom-4 right-5 size-7 rounded-full border-4 border-[#777875] bg-[#e7d79b] shadow-inner" />
            <span className="absolute right-4 top-4 size-2 rounded-full bg-white/70" />
          </div>
        </div>

        <div className="absolute inset-0 z-10 overflow-hidden rounded-[38px] border-[6px] border-[#f2f2ef] bg-white [backface-visibility:hidden] dark:border-[#151617] dark:bg-[#202122] dark:shadow-[12px_18px_30px_rgba(0,0,0,0.45)] [transform:translateZ(8px)]">
          <div className="absolute inset-[5px] overflow-hidden rounded-[29px] bg-[linear-gradient(150deg,#f7f7f5,#e8e9e7)] dark:bg-[linear-gradient(150deg,#292b2c,#171819)]">
            
          </div>
          <span className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-[#e4e4e1] shadow-inner dark:bg-[#0d0e0f]" />
          <span className="absolute left-[calc(50%-38px)] top-[21px] size-2 rounded-full bg-[#b9c8cc] shadow-[0_0_0_2px_#cfd0cc] dark:shadow-[0_0_0_2px_#252627]" />
          <span className="absolute bottom-4 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-black/15 dark:bg-white/20" />
        </div>

        <span className="absolute left-[-6px] top-24 z-20 h-12 w-1.5 rounded-l bg-[#babbb8] shadow-inner dark:bg-[#0e0f10] [transform:translateZ(4px)]" />
        <span className="absolute left-[-6px] top-40 z-20 h-12 w-1.5 rounded-l bg-[#babbb8] shadow-inner dark:bg-[#0e0f10] [transform:translateZ(4px)]" />
        <span className="absolute right-[-6px] top-32 z-20 h-16 w-1.5 rounded-r bg-[#babbb8] shadow-inner dark:bg-[#0e0f10] [transform:translateZ(4px)]" />
        <span className="absolute bottom-[-8px] left-1/2 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[#a8a9a6] dark:bg-[#0c0d0e] [transform:translateZ(23px)]" />
      </div>
      {/* <div className="absolute bottom-0 left-1/2 h-8 w-52 -translate-x-1/2 rounded-[50%] bg-black/15 blur-xl dark:bg-black/45" /> */}
    </div>
  )
}
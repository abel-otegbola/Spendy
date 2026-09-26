import LogoIcon from '@/assets/icons/logo'

function SuccessPage() {
    return (
        
        <div className="flex md:w-[55%] h-screen w-full items-center justify-center">
            <div className="sm:w-[400px] md:mx-0 mx-auto w-full p-6">
                <div className="flex flex-col justify-center items-center text-center gap-6 md:p-[5%]">
                    <div className=" px-4 py-2 rounded-lg border border-gray-500/[0.2] w-fit">
                        <LogoIcon className="w-[14px] h-[28px]"  />
                    </div>
                    <h1 className="font-semibold text-[32px] text-dark-500">Account Created</h1>
                    <p>Please check your email to verify your account</p>
                </div>
            </div>
        </div>
  )
}

export default SuccessPage
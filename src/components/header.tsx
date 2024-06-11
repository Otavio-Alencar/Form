import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip"
import { CardDescription, CardTitle } from "./ui/card"
import { ModeToggle } from "./toggle"
export const Header = ()=>{
    return(
        <>
        <div className="flex items-center gap-3">
            <div className="flex-1">
                <CardTitle className="">Create an Account</CardTitle>
                <CardDescription>Enter your email below to create your account</CardDescription>
            </div>
            <ModeToggle/>
          </div>
          <div className="flex items-center justify-center gap-5 py-4">
            <TooltipProvider >
              <Tooltip>
                <TooltipTrigger className="bg-black hover:bg-black/85 dark:border py-2 px-8 text-white rounded-sm flex-1">Github</TooltipTrigger>
                <TooltipContent className="text-xs text-gray-500">login in github</TooltipContent>
              </Tooltip>
            </TooltipProvider >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-black hover:bg-black/85 py-2 px-8 text-white rounded-sm flex-1 dark:border">Email</TooltipTrigger>
                <TooltipContent className="text-xs text-gray-500">login in email</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center justify-center overflow-x-hidden ">
            <Separator orientation="horizontal"/>
            <p className="text-nowrap px-1 text-xs text-gray-500">OR CONTINUE WITH</p>
            <Separator orientation="horizontal"/>
          </div>
          </>
    )
}
"use client"
import { Header } from "@/components/header"
import { ModeToggle } from "@/components/toggle"
import { FormItem } from "@/components/ui/FormItem"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


const Page  = ()=>{
  return(
    <div className="h-screen w-full flex justify-center items-center bg-cover bg-gray-400 dark:bg-zinc-700">
    
      <Card className="dark:bg-black">
        <CardHeader>
          <Header/>
        </CardHeader>
        <CardContent>
          <FormItem/>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
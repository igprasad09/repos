import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./input";
import { Label } from "@radix-ui/react-label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Username() {
    const navigate = useNavigate();

    //Hooks
    const [input, setinput] = useState("");
    
    //fuctions
    function handle_search(){      
        if(input === "") alert('enter username')   
        else  {
            console.log(input)
            navigate("/home", { state: { username: input} });
        }
    }

  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
       
       <div className="grid justify-center items-center h-screen">
    <Card className="w-[390px]">
      <CardHeader>
        <CardTitle>Git-Repos</CardTitle>
        <CardDescription>
          See all github repos and commits.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">UserName</Label>
              <Input id="name" placeholder="Name of your project" value={input} onChange={(e)=>setinput(e.target.value)}/>
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        
        <Button onClick={handle_search}>Search</Button>
      </CardFooter>
    </Card>
  </div>

    </div>
  )
}

export default Username

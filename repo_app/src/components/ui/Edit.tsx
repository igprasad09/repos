import { useState } from "react";
import { Button } from "./button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,}from './dialog';
import { Input } from "./input";
import { Label } from "./label";

type EditProps = {
  fun: (val:string) => void;
  user: string;
};

function Edit({ fun, user }: EditProps) {
  const [input, setInput] = useState<string>(user);
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit UserName</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value={input} className="col-span-3" onChange={(e)=>setInput(e.target.value)}/>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" onClick={()=>fun(input)}>Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default Edit

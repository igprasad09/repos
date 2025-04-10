import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
type Repo = {
    name: string;
    html_url: string;
  };
type ReposProps = {
    res?: Repo[];
  };

function Repos({ res = [] }: ReposProps) {
    console.log(res)
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">

        {res.map((element, index)=>(
            <AccordionItem value={`item-${index+1}`}>
            <AccordionTrigger>{index+1} - {element.name}</AccordionTrigger>
            <AccordionContent>
               <a href={element.html_url} className="text-blue-500 underline">{element.html_url}</a>
            </AccordionContent>
          </AccordionItem>
        ))}
        
      </Accordion>
    </div>
  );
}

export default Repos;

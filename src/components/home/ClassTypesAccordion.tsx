"use client";

import { Plus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { classTypes } from '@/lib/data';

export function ClassTypesAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {classTypes.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-3xl border-none shadow-sm hover:shadow-md transition-all overflow-hidden">
          <AccordionTrigger className="w-full p-6 text-left flex justify-between items-center group font-bold text-slate-700 hover:text-primary transition-colors uppercase text-sm hover:no-underline">
              <span>{item.title}</span>
              <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all ml-4">
                  <Plus className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 pt-0 text-slate-500 text-base leading-relaxed font-medium">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

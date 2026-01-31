"use client";
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';

function CreateAgentSection() {
    const [openDialog, setOpenDialog] = React.useState(false);
    return (
        <div className='flex flex-col items-center justify-center p-8 text-center'>
            <h2 className='font-bold text-3xl mb-2 text-white'>Create AI Agent</h2>
            <p className='text-md text-gray-400 mb-8'>Build a AI Agent workflow with custom logic and tools</p>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                    <Button size={'lg'} onClick={() => setOpenDialog(true)} className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-medium px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                        <Plus /> Create Agent
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Enter Agent Name</DialogTitle>
                        <DialogDescription>
                            <Input placeholder='Agent Name' />
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="ghost">Cancel</Button>
                        </DialogClose>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateAgentSection

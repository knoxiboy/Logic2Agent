import { Button } from '@/components/ui/button'
import { ChevronLeft, Code2, Play, Share } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800'>
            <div className='flex items-center gap-2'>
                <ChevronLeft className='h-8 w-8' />
                <h1 className='text-xl font-bold'>Agent Name</h1>
            </div>
            <div>
                <Button variant={'ghost'}> <Code2 /> Code </Button>
                <Button variant={'ghost'}> <Play /> Preview </Button>
                <Button variant={'ghost'}> <Share /> Publish </Button>
            </div>
        </div>
    )
}

export default Header   
"use client";
import React from 'react'
import { Handle, Position } from '@xyflow/react'
import { Blocks } from 'lucide-react'

interface MCPNodeProps {
    selected?: boolean;
}

function MCPNode({ selected }: MCPNodeProps) {
    return (
        <div className={`flex items-center gap-3 bg-white dark:bg-gray-900 border-2 rounded-xl p-4 shadow-sm min-w-[150px] relative transition-all hover:shadow-md ${selected ? 'border-violet-500 shadow-violet-500/20' : 'border-violet-500'}`}>
            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 !bg-violet-500 border-2 border-white dark:border-gray-900"
            />
            <div className='w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center text-violet-500'>
                <Blocks className='h-6 w-6' />
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <p className='text-xs text-gray-500 font-medium uppercase tracking-wider'>Tool</p>
                    <h2 className='text-lg font-bold'>MCP</h2>
                </div>
                <span className='text-[10px] bg-violet-500/20 text-violet-600 dark:text-violet-400 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider'>Beta</span>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 !bg-violet-500 border-2 border-white dark:border-gray-900"
            />
        </div>
    )
}
export default MCPNode
